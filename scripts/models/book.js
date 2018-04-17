var app = {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'window.location.href';
ENV.productionApiUrl = 'https://catseatpaperplates.github.io/book-list-client';
ENV.developmentApiUrl = 'https://ja-booklist.herokuapp.com';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function(module) {
  
    Book.prototype.toHtml = function() {
      let template = Handlebars.compile($('#book-template').text());
      return template(this);
    }
  
    Book.all = [];
  
    Book.loadAll = rows => {
      Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
    }
  
    Book.fetchAll = callback =>
      $.get(`${ENV.apiUrl}/books`)
        .then(Book.loadAll)
        .then(callback)
        .catch(errorCallback);
  
    module.Book = Book;
  })(app)
 