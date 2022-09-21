import { getRefs } from './getRefs';
const refs = getRefs();
export function createCountryInfo(data) {
  return data
    .map(item => {
      refs.countryInfo.insertAdjacentHTML(
        'beforeend',
        `<div class="header"><img src="${
          item.flags.svg
        }" alt="" width = "70" height = "50">
      <p class="title">${item.name.common}</p>
      </div>
      <p class="characteristic">Capital: <span class="description">${
        item.capital
      }</span></p>
      <p class="characteristic">Population: <span class="description">${
        item.population
      }</span></p>
      <p class="characteristic">Languages: <span class="description">${Object.values(
        item.languages
      )}</span></p>`
      );
      
    })
    .join('');
}