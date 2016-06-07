'use strict'

$.jribbble.setToken('829e7b01d4f7bf4fae734bf7af259e228706a7f08abb66459fad663ed89e68db');
$.jribbble.shots({per_page: 100}).then(function(shots) {
  var html = [];

//for each shot on the page, give it a link and an image
  shots.forEach(function(shot) {
    html.push('<div class="shots--shot" data-id="' + shot.id + '">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></div>');
  });

  $('.shots').html(html.join(''));
});

//get id of image
$('.shots--shot').on('click', function(){
    $(this).data('id');
});

//
// //filter by tag
// $.jribbble.shots({per_page: 1000}).then(function(shots) {
//   var html = [];
//   console.log(shots);
//
//   shots.forEach(function(shot) {
//     if (shot.tags.indexOf('typography') >= 0) {
//       html.push('<div class="shots--shot">');
//       html.push('<a href="' + shot.html_url + '" target="_blank">');
//       html.push('<img src="' + shot.images.normal + '">');
//       html.push('</a></div>');
//     }
//   });
//
//   $('.shots').html(html.join(''));
// });
