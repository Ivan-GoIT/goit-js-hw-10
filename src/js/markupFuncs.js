import { refs } from './refs';

const { counrtyListEl, counrtyInfoEl } = refs;

export const manyCounrtisListMarkup = countries =>
  countries
    .map(({ name, flags }) => {
      return `    
    <li>
      <img width="20" height="20"
      src="${flags}">
      </img>
      <p>
      ${name}</p>
    </li>`;
    })
    .join('');

export const oneCounrtyMarkup = ({
  name,
  flags,
  capital,
  population,
  languages,
}) => `<h2><img width="20" height="20"
      src="${flags}">
      </img>${name}</h2>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Population:</strong> ${population}</p>
    <p><strong>Languages:</strong> ${languages}</p>`;

export const clearMarkup = () => {
  counrtyListEl.innerHTML = '';
  counrtyInfoEl.innerHTML = '';
};
