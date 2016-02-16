"use strict";

function centerContent () {
  var hero = document.getElementsByClassName('hero')[0];
  hero.style.height = window.innerHeight;
};

(function () {
  centerContent();
  window.setTimeout(function () {
    var headers = document.getElementsByClassName('headers')[0];
    headers.classList.toggle('end');
    window.setTimeout(function () {
      $(".typed").typed({
        strings: ["front end", "back end", "full stack"],
        typeSpeed: 30,
        startDelay: 0,
        backSpeed: 30,
        backDelay: 1000
      });
    }, 800);
  }, 1000);

  window.addEventListener('resize', centerContent);
}());
