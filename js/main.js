!function t(n,e,i){function r(o,u){if(!e[o]){if(!n[o]){var f="function"==typeof require&&require;if(!u&&f)return f(o,!0);if(a)return a(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var c=e[o]={exports:{}};n[o][0].call(c.exports,function(t){var e=n[o][1][t];return r(e?e:t)},c,c.exports,t,n,e,i)}return e[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,n,e){"use strict";!function(t){t.fn.turntable=function(n){function e(t){var n=void 0,e=t.length;n="y"===r.axis?a.height():a.width();for(var i=n/e,u=0;u<t.length;u++)o[u]={min:i*u,max:i+i*u,index:u}}var i=t("ul",this).children(),r=t.extend({},t.fn.turntable.defaults,n),a=t(this),o=[];return function(n){i.each(function(){t(this).append('<img src="'+t(this).data("imgSrc")+'">')})}(),t("li:first-child>img",a).load(function(){t(this).parent().addClass("active"),e(i)}),t(window).resize(function(){e(i)}),a.on("mousemove",function(n){var e=t(this).offset(),a=void 0;a="y"===r.axis?n.pageY-e.top:n.pageX-e.left,t.each(o,function(){a>=this.min&&a<=this.max&&(i.removeClass("active"),i.eq(this.index).addClass("active"))})})},t.fn.turntable.defaults={axis:"x"}}(jQuery)},{}]},{},[1]);
$(function() {
  $('a[href*="#"]:not([href="#"]):not([role="tab"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
