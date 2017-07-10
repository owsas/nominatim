import { NominatimJS, INominatimParams } from '../index';

var search: INominatimParams = {
  q: '5th avenue',
  country: 'USA',
  accept_language: 'fr'
};

NominatimJS.search(search)
  .then(results => {
    console.log('got results', results.map(result => {
      return result.display_name
    }));
  });