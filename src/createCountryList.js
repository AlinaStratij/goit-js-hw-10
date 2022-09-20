import { getRefs } from './getRefs';
const refs = getRefs();

export function createCountryList(data) {
  return data
    .map(item => {
      refs.countryList.insertAdjacentHTML(
        'beforeend',
        `<li class='country-list-item'>
        <img src="${item.flags.svg}" alt="flag" width = "50" height = "30">
        <p class="country-list-text">${item.name.official}</p>
      </li>`
      );
    })
    .join('');
}
