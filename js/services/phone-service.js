const API_BASE_URL = 'http://localhost:8080/server/data/';

class PhoneService {
  static getAll() {
    return fetch(API_BASE_URL + 'phones/phones.json')
      .then(response => response.json())
      .catch(error => {
        console.log('Request failed', error)
      })
  }

  static get(phoneId) {
    return fetch(API_BASE_URL + `phones/${ phoneId }.json`)
      .then(response => response.json());
  }
}