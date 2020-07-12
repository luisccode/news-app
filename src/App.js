import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NewsContainer from './components/NewsContainer';
import Heading from './components/Heading';
import AlertContainer from './components/AlertContainer';
import ProgressBar from './components/ProgressBar';
import { getPageCategories, capitalize } from './helpers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState({});
    useEffect(() => {
        if (category === '') return;
        setLoading({
            status: true,
            maxPercent: 80,
        });
        const getData = async () => {
            const url = !query
                ? `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.REACT_APP_NEWS_API}&category=${category}`
                : `https://api.currentsapi.services/v1/search?keywords=${query}&apiKey=${process.env.REACT_APP_NEWS_API}`;
            const response = await fetch(url);
            const data = await response.json();
            setLoading({
                status: true,
                maxPercent: 100,
            });
            if (data.news.length) {
                setError(false);
            } else {
                setError(true);
                setLoading({
                    status: false,
                    maxPercent: 0,
                });
            }

            setNews(data.news);
        };
        setNews([]);
        getData();
    }, [category, query]);

    return (
        <React.Fragment>
            <Router>
                <Header setQuery={setQuery} />
                {loading.status ? <ProgressBar loading={loading} setLoading={setLoading} /> : null}
                <Switch>
                    <Route path="/" exact>
                        <Heading title={'General News'} setCategory={setCategory} />
                    </Route>
                    {getPageCategories().map((categ) => (
                        <Route path={`/${categ}`} key={categ}>
                            <Heading
                                title={`${!query ? capitalize(categ) : capitalize(query)} News`}
                                setCategory={setCategory}
                            />
                        </Route>
                    ))}
                </Switch>
            </Router>
            {!error ? (
                <NewsContainer news={news} />
            ) : (
                <AlertContainer
                    query={query}
                    type={'error'}
                    message={`There aren't results for "${query}" — `}
                    messageStrong={'Try more general words.'}
                />
            )}
        </React.Fragment>
    );
}

export default App;
