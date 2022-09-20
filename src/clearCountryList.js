import { getRefs } from './getRefs';
const refs = getRefs();

export function clearCountryList() {
     return (refs.countryList.innerHTML = '');
}

