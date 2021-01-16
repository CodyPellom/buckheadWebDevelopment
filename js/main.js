/* Initiate Particle */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-js-2', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  particlesJS.load('particles-js-3', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
/* Initiate Particle End */

function init() {
  var me = this;
  me.navBarOpacityOnScroll();
};

function getNavbarHeight() {
    // debugger;;;
    var navBar = document.getElementById('main-navbar-id');
    var navbarHeight = navBar.clientHeight;
    console.log(navbarHeight);
};

function navBarOpacityOnScroll() {
    var navBar = document.getElementById('main-navbar-id');
    window.addEventListener('scroll', function(){
      if (window.scrollY > 70) {
        navBar.style.opacity = 0;
      }
      if (window.scrollY < 70) {
        navBar.style.opacity = 100;
      }
    })
}

init();