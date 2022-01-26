'use strict'

window.addEventListener('load', function () {
  quicklink.listen({
    el: [
      document.getElementById('header'),
      document.querySelector('.blog-cards')
    ]
  })
})
