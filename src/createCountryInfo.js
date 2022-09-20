import { getRefs } from './getRefs';
const refs = getRefs();
export function createCountryInfo(data) {
  return data
    .map(item => {
      refs.countryInfo.insertAdjacentHTML(
        'beforeend',
        `<div class="wrap"> <img src="${
          item.flags.svg
        }" alt="" width = "70" height = "50">
      <p class="country-title">${item.name.common}</p> </div>
      <p class="country-description">Capital: <span class="country-description-name">${
        item.capital
      }</span></p>
      <p class="country-description">Population: <span class="country-description-name">${
        item.population
      }</span></p>
      <p class="country-description">Languages: <span class="country-description-name">${Object.values(
        item.languages
      )}</span></p>`
      );
    })
    .join('');
}