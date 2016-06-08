'use strict';

const app = require('../app-data.js');
// const authApi = require('./api.js');
const getFormFields = require('../../../lib/get-form-fields');
const favoritesApi = require('./favoritesApi');

require('jribbble');

console.log(app);

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.token = data.user.token;
  app.id = data.user.id;
  console.log(app);
  $('#signInModal').modal('hide');
  $(".modal-backdrop").hide();
  favoritesApi.getFavorite(success, failure);
};

const changePasswordSuccess = (data) => {
  console.log(app);
  $('#changePasswordModal').modal('hide');
  $(".modal-backdrop").hide();
  console.log(data);
};

const signUpSuccess = (data) => {
  console.log(success);
  $('#signUpModal').modal('hide');
  $(".modal-backdrop").hide();
  console.log(data);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $('.content').html('');
};

const addFavoriteSuccess = (data) => {
  console.log(app);
  console.log(app.favoriteID);
  favoritesApi.getFavorite(getFavoriteSuccess, failure);
}

const getFavoriteSuccess = (data) => {
  console.log(data);
  let getfavoritesTemplate = require('./templates/favorites.handlebars');
  $('.myfavorites').html(getfavoritesTemplate({
    data: data.favorites
  }));
};

// create empty array to push objects into
// for each id, loop through the array of favorites, get each object for that id
const dribbbleFavorites = (data) => {
  console.log(data);
  let favoriteShots = [];
  for (var i = 0; i < data.favorites.length; i++) {
    console.log('test');
    $.jribbble.shots(data.favorites[i].dribble).then(function(res){
    })
  }
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
  addFavoriteSuccess,
  dribbbleFavorites,
  // getFavoriteSuccess,
  app,
};
