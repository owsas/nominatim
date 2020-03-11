# REPO MOVED.
Please refer to https://github.com/owsas/opensource for the latest version. Thank you. 

# Nominatim-JS

Unofficial JS SDK for the Nominatim Open Street Map service that allows geocoding and reverse geocoding

## How to use?

First, install the SDK
``` 
$> npm install --save nominatim-JS
```

Then, use it :). It works with Promises, or can be used with async / await.

```js
const { NominatimJS } = require('nominatim-js');
```

## Search

### Example with promises

```js
NominatimJS.search({
  q: 'bakery in new york'
}).then(results => {
  // do something with results
}).catch(error => {
  // error ocurred
})
```

### Example with async / await

```js
async function search(){
  let results = await NominatimJS.search({
    q: 'bakery in new york'
  });
}
```
NOTE: To await the response, the call to the API must be written inside an async function

## Lookup

First parameter is an array of OSM ids with types. Type can be one of `way`, `node` or `relation`.

Second parameter is optional params.  

### Example with promises

```js
NominatimJS.lookup([{ type: "way", id: 163993703}])
  .then(results => {
    // do something with results
  })
  .catch(error => {
    // error ocurred
  })

```

### Example with async / await

```js
const results = await NominatimJS.lookup([{ type: "way", id: 163993703}]);
```

## Typescript

Typescript is supported out of the box. 

```typescript
const idToLookup: IOsmId = { type: "way", id: 163993703};
const lookupParams: ILookupParams = { addressdetails: 1 };
const results: ISearchResult[] = await NominatimJS.lookup([idToLookup], lookupParams);
```


## More examples 

See examples folder in the repository

## Author

Juan Camilo Guarín Peñaranda  
Otherwise SAS   
Colombia  

## License

MIT

## Support us on Patreon
[![patreon](./repo/patreon.png)](https://patreon.com/owsas)
