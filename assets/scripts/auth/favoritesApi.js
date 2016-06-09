'use strict';

const app = require('../app-data.js');


const addFavorite = (success, failure, id, name) => {
  // debugger;
  $.ajax({
    method:'POST',
    url: app.app.api + 'favorites',
    headers: {
      Authorization: 'Token token='+ app.token,
    },
    data: {
      "favorite": {
        "dribble": id,
        "name": name,
        "tag": "tag",
      }
    },
  })
  .done(success)
  .fail(failure);
};


const getFavorite = (success, failure) => {
  $.ajax({
    method:'GET',
    url: app.app.api + 'favorites',
    headers: {
      Authorization: 'Token token='+ app.token,
    },
  })
  .done(success)
  .fail(failure);
};


const deleteFavorite = (success, failure, id) => {
  $.ajax({
    method:'DELETE',
    url: app.app.api + 'favorites/' + id,
    headers: {
      Authorization: 'Token token='+ app.token,
    },
  })
  .done(success)
  .fail(failure);
};



module.exports = {
  addFavorite,
  getFavorite,
  deleteFavorite,
};
