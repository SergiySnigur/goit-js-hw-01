'use strict';

const debounce = require('lodash.debounce');
import countryService from './services/country-info-serv';
import PNotify from 'pnotify/dist/es/PNotify.js';
import countriesListTemplate from '../templates/countries-list.hbs';
import countryInfoTemplate from '../templates/country-info.hbs';

const refs = {
  form: document.querySelector('#search-form'),
  section: document.querySelector('#country-section'),
};

const nameValid = {
  MAXVIEWCOUNTRY: 10,
  ONECOUNTRYVIEW: 1,
};

refs.form.addEventListener('input', debounce(countryNameHandler, 500));

function countryNameHandler(event) {
  console.log(event);

  const searchQuery = event.target.value;

  console.log(searchQuery);

  if (!searchQuery) {
    clearWeatherList();
    return;
  }
  console.log(event);
  countryService.fethSearchCountry(searchQuery).then(data => {
    if (data.length > nameValid.MAXVIEWCOUNTRY) {
      clearWeatherList();
      PNotify.error({
        text: 'Too many matches found. Please enter a more specific query',
        delay: 2000,
      });
    } else if (data.length === nameValid.ONECOUNTRYVIEW) {
      generateMarkup(data[0], countryInfoTemplate);
      console.log('Data with one template');
      console.log(data);
    } else {
      generateMarkup(data, countriesListTemplate);
      console.log('Data with list template');
      console.log(data);
    }
  });
}

function generateMarkup(obj, template) {
  clearWeatherList();
  const markup = template(obj);
  refs.section.insertAdjacentHTML('beforeend', markup);
}

function clearWeatherList() {
  refs.section.innerHTML = '';
}
