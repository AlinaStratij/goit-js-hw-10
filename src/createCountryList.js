import { getRefs } from './getRefs';
const refs = getRefs();

export function createCountryList(data) {
  return data
    .map(item => {
      refs.countryList.insertAdjacentHTML(
        'beforeend',
        `<li class='list-item'>
        <img src="${item.flags.svg}" alt="flag" width = "50">
        <span class="item-text">${item.name.official}</span>
      </li>`
      );
    })
    .join('');
}
