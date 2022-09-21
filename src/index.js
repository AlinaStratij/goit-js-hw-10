import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { getRefs } from './getRefs';
import { clearCountryInfo } from './clearCountryInfo';
import { clearCountryList } from './clearCountryList';
import { createCountryList } from './createCountryList';
import { createCountryInfo } from './createCountryInfo';



const DEBOUNCE_DELAY = 300;

const refs = getRefs();
refs.inputText.addEventListener(
  `input`,
  debounce(onSearchInput, DEBOUNCE_DELAY)
);
function onSearchInput(evt) {
  clearCountryInfo();
  clearCountryList(); 
  const inputValue = evt.target.value.trim();
  if (!inputValue) {
    clearCountryInfo();
    clearCountryList(); 
    // стереть список стран и стереть карточку страны
    return;
  }
  fetchCountries(inputValue).then(onFetchSuccess).catch(onFetchError);
}

function onFetchSuccess(data) {
  console.log(data)
  
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
   
  }
  if (data.length >= 2 && data.length <= 10) {
    createCountryList(data);
     clearCountryInfo();
  }
  if (data.length < 2) {
    createCountryInfo(data);
    clearCountryList();
  }
}

function onFetchError() {
  Notify.failure('Oops, there is no country with that name');
}


