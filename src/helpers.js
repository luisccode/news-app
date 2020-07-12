export function getPageCategories() {
    // theses categories come from https://api.currentsapi.services/v1/available/categories
    return [
        'general',
        'business',
        'programming',
        'entertainment',
        'health',
        'science',
        'sports',
        'technology',
        'gadgets',
        'game',
        'security',
    ];
}
export function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
