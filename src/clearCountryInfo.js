import { getRefs } from './getRefs';
const refs = getRefs();
export function clearCountryInfo() {
  return refs.countryInfo.innerHTML = '';
}
