'use strict';

const app = require('../app-data.js');
// const authApi = require('./api.js');
const getFormFields = require('../../../lib/get-form-fields');
const favoritesApi = require('./favoritesApi');

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
  app.favoriteID = data.favorite.id;
  console.log(app);
  console.log(app.favoriteID);
  favoritesApi.getFavorite(addFavoriteSuccess, failure);
}

// const getFavoritesSuccess = (data) => {
//   let getDrankDisplayTemplate = require('./templates/drank-display.handlebars');
//   $('.content').html(getDrankDisplayTemplate({
//     data: data.drinks
//   }));
//   console.log(data);
// };


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
  addFavoriteSuccess,
  app,
};
