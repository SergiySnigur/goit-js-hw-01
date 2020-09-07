const baseUrl = 'https://pixabay.com/api/';
const apiKey = '?key=14998986-82322fa46abf8765da09830ba';
const countImage = '&per_page=12';
export default {
    page: 1,
    query: '',

    fethImages() {
        const queryParam = `&q=${this.query}`;
        const currentPage = `&page=${this.page}`;

        return fetch(baseUrl + apiKey + queryParam + countImage + currentPage)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();
                return data.hits;
            });
    },

    incrementPage() {
        this.page += 1;
    },

    get currentQuery() {
        return this.query;
    },

    set currentQuery(string) {
        this.query = string;
    },

    get currentPage() {
        return this.page;
    },

    resetPage() {
        this.page = 1;
    },
};
