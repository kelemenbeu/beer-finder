export const beerService = {
    getAll
};

function getAll() {
    return fetch(`https://api.punkapi.com/v2/beers`).then(handleResponse);
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