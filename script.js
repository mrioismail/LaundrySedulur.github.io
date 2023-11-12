// membuat scroll jadi smooth atau saat di scroll item2 akan muncul dari bawaah secara perlahan
window.addEventListener('scroll', reveal)

function reveal() {
   var reveals = document.querySelectorAll('.scroll')

   for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight
      var revealtop = reveals[i].getBoundingClientRect().top
      var revealpoint = 150

      if (revealtop < windowheight - revealpoint) {
         reveals[i].classList.add('active')
      } else {
         reveals[i].classList.remove('active')
      }
   }
}
