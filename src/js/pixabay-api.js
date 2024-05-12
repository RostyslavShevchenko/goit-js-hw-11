export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '43827798-4b15de3508f50a47656d425a7';

export function fetchData(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=15&safesearch=true&orientation=horizontal`)
        .then((responce) => {
            if (!responce.ok) {
                throw new Error(response.statusText);
            }
            return responce.json();
        })
}