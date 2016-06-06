'use strict'

$.jribbble.setToken('829e7b01d4f7bf4fae734bf7af259e228706a7f08abb66459fad663ed89e68db');
$.jribbble.tags('typography').shots({per_page: 35}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    // html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});
