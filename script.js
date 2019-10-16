window.onresize = function () {
  toggle();
};

window.onscroll = function () {
  myFunction();
};

//resize, scroll

var nav = document.getElementById('navid');
var sticky = nav.offsetTop;
var logo = document.getElementById('logo2id');
var biglogo = document.getElementById('logoid');
var mainnav = document.getElementById('mainnavid');
var yellow  = document.getElementById('yellow');

function myFunction() {
  if (window.pageYOffset > sticky) {
    biglogo.style.display = 'none';
    logo.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
    yellow.style.paddingLeft = '126px';
  } else if (window.pageYOffset < sticky && window.innerWidth >= 1023) {
    biglogo.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '14px';
    yellow.style.paddingLeft = '20px';
  } else if (window.pageYOffset < sticky && window.innerWidth <= 1024) {
    logo.style.display = 'none';
    biglogo.style.display = 'block';
  }
}

function toggle() {
  if (window.innerWidth > 1023) {
    biglogo.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '15px';
  } else if (window.innerWidth < 1024) {
    logo.style.display = 'none';
    biglogo.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
  }
}