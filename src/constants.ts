const devApi = 'http://api.localhost:3001/v2/';
const prodApi = 'https://biblio.herokuapp.com/';
export const apiRoot = process.env.NODE_ENV === 'development' ? devApi : prodApi;

export const appName = "Biblio"
