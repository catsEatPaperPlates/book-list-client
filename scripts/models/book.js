var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = '';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

$.getJSON(ENV.apiUrl + '/api/v1/books').then(books => {
  console.log(books);
});

(function(module) {
  
  function Book(rawDataObj) {
  this.author = rawDataObj.author;
  this.title = rawDataObj.title;
  }

 Book.prototype.toHTML = function() {
  let template = Handlebars.compile($('#book-template').text());
  return template(this);
 }

 Book.fetchAll = function() {
   $.getJSON(ENV.apiUrl + '/api/v1/books')
   .then(books => {
    Book.all = books.map(bookInstance => new Book(bookInstance));
   })
 }
  // Object.assign(this, rawDataObj); MDN assign method for ES6
    module.Book = Book;
  })(app)
 