export const userService = {
    login,
    logout,
    getAll
};

function login(username) {

    return fetch(`https://yesno.wtf/api`)
        .then(handleResponse)
        .then(user => {
            console.log(user, username)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(username));

            return username;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return fetch(`https://api.punkapi.com/v2/beers`).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok || data.answer === "no") {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const errorMessage = data.answer === "no" ? "Login failed." : response.statusText;
            return Promise.reject(errorMessage);
        }
        return data;
    });
}