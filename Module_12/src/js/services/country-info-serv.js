const baseUrl = 'https://restcountries.eu/rest/v2/name';

export default {
  fethSearchCountry(value) {
    const requestParams = `/${value}`;
    return fetch(baseUrl + requestParams).then(response => response.json());
  },
};




//comment for example