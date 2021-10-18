function fetchWithNativeFetch() {
  console.log('fetching with fetch');
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

function fetchWithAxios() {
  console.log('fetching with axios');
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(json => console.log(json))
}

setInterval(() => {
  fetchWithAxios();
}, 1000)