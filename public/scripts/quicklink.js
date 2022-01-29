'use strict'

window.addEventListener('load', function () {
  quicklink.listen({
    el: document.getElementById('header'),
    el: document.querySelector('.blog-cards'),
    el: document.getElementById('.sitemap-list'),
    throttle: 2
  })
})
