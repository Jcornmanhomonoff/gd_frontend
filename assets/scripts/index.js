'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./jribbble');


const getFormFields = require('../../lib/get-form-fields');

const app = require('./app-data.js');
const authApi = require('./auth/api');
const authUi = require('./auth/ui');
const authFavorites = require('./auth/favoritesApi');
// const app = require('./app-data.js');


// const addHandlers = () => {
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    console.log("sign-up success");
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    console.log("sign-in success");
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    console.log("sign-out success");
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-password').on('submit', function (event){
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePassword(authUi.changePasswordSuccess, authUi.failure, data);
  });
  $('.addFavorite').on('click', function (event){
    event.preventDefault();
    data.favorites.user_id = app.id;
    authFavorites.addFavorite(authUi.addFavoriteSuccess, authUi.failure, data, name);
  })
  // $('#getFavorite').on('click', function (event){
  //   event.preventDefault();
  //   authFavorites.getFavorite(authUi.getFavoriteSuccess, authUi.failure);
  // })


// SIGN UP AND IN, MODAL DROP DOWN

// OPENS SIGNIN FROM DROPDOWN
$('.open-sign-in').on('click', function(event){
  event.preventDefault();
  $('#signInModal').modal('show');
});

// OPENS SIGNUP FROM DROPDOWN
$('.open-sign-up').on('click', function(event){
  event.preventDefault();
  $('#signUpModal').modal('show');
});

// OPENS CHANGE PASSWORD FROM DROPDOWN
$('.open-change-password').on('click', function(event){
  event.preventDefault();
  $('#changePasswordModal').modal('show');
});

// OPENS CREATE NEW DRINK FROM BUTTON
$('.open-create-drink').on('click', function(event){
  event.preventDefault();
  $('#createDrinkModal').modal('show');
});
