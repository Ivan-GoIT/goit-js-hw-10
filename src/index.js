import './sass/styles.scss';
import { refs } from './js/refs';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const { searchBoxEl, counrtyListEl, counrtyInfoEl } = refs;

const manyCounrtisListMarkup = ({ name: { common: countryName }, flag }) => {
  console.log(countryName + flag);
};

const oneCounrtyMarkup = ({
  name: { common: countryName },
  flag,
  capital,
  population,
  languages,
}) => {
  console.log(countryName + flag);
};

const onKeyDown = () => {
  const country = searchBoxEl.value;
  fetchCountries(country).then(countries =>
    countries.forEach(element => {
      counrtyListMarkup(element);
    })
  );
};

searchBoxEl.addEventListener('keydown', debounce(onKeyDown, DEBOUNCE_DELAY));
