window.onscroll = function () {
  logosticky();
};

window.onresize = function () {
  resizable();
};

var nav = document.getElementById('navid');
var sticky = nav.offsetTop;
var image = document.getElementById('logo-token');
var logo = document.getElementById('logo-token-2');
var mainnav = document.getElementById('mainnavid');
var yellow  = document.getElementById('yellow');

function logosticky() {
  if (window.pageYOffset > sticky) {
    image.style.display = 'none';
    logo.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
    yellow.style.paddingLeft = '126px';
  } else if (window.pageYOffset < sticky && window.innerWidth >= 1023) {
    image.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '14px';
    yellow.style.paddingLeft = '20px';
  } else if (window.pageYOffset < sticky && window.innerWidth <= 1024) {
    logo.style.display = 'none';
    image.style.display = 'block';
  }
}

function resizable() {
  if (window.innerWidth > 1023) {
    image.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '15px';
  } else if (window.innerWidth < 1024) {
    logo.style.display = 'none';
    image.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
  }
}