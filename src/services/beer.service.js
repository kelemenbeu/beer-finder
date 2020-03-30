export const beerService = {
  getAll,
  getBeerById,
  getBeerByParams
};

function getAll(page) {
  return fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=15`
  ).then(handleResponse);
}

function getBeerById(id) {
  return fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then(handleResponse)
    .then(elem => elem && elem[0]);
}

function getBeerByParams(name = "", min = 0, max = 100) {
  return fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}&abv_gt=${min}&abv_lt=${max}`).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const errorMessage = response.statusText;
      return Promise.reject(errorMessage);
    }
    return data;
  });
}
