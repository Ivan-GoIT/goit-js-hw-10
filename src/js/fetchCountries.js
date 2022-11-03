const URL = 'https://restcountries.com/v3.1/name/';

export const fetchCountries = (name) => fetch(URL + name).then(res => res.json());
