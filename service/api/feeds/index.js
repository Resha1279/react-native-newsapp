const axios = require('axios');

const BASE_URL = 'http://epaper.qbitsx.com/api/v1/news';

class FeedsApi {
  constructor() {
    this.headers = {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
      'Content-Type': 'application/json',
    };
  }

  fetchFeeds(page, category) {
    console.log(`${BASE_URL}?page=${page}&&category=${category}`);
    if (!page) {
      return Promise.reject(new Error('Page required'));
    }
    const options = {
      method: 'GET',
      headers: this.headers,
    };

    return axios(`${BASE_URL}?page=${page}`, options)
      .then(res => res.data)
      .then(res => res.data)
      .catch(err => {
        if (err.response) {
          throw err.response.data;
        } else {
          throw err.message;
        }
      });
  }
}

module.exports = new FeedsApi();
