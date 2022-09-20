export function getRefs() {
    return {
      inputText: document.querySelector(`#search-box`),
      countryList: document.querySelector(`.country-list`),
      countryInfo: document.querySelector(`.country-info`),
    };
}