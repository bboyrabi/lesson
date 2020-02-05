"use strict";

function searchBooks(query) {
  console.log({query});
  
  if(!query) {
    console.warn('query is empty.');
    return;
  }
  const by = 'relevance';
  const fields = 'fields=items(id,volumeInfo/*,accessInfo(embeddable,country,viewability))';
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${by}&${fields}&download=epub&maxResults=20`)
    .then(res => res.json())
    .then(data => return data.items)
    .catch(() => console.error('Search books fetch error. query is ' + query));
}
