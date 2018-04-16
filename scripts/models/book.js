var app = {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'window.location.href';
ENV.productionApiUrl = 'https://ja-booklist.herokuapp.com/';
ENV.developmentApiUrl = 'http://localhost:5432/';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;