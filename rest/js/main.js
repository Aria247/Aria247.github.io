$(function() {
 $('.toggles button').click(function(){
  var get_id = this.id;
  var get_current = $('.posts .' + get_id);

  $('.card').not(get_current).hide(500);
  get_current.show(500);
 });

 $('#showall').click(function() {
  $('.card').show(500);
 });
});﻿
