var doc = document;
var viewportWidth = window.innerWidth;
if (viewportWidth > 640) {
  addEventListener('load', function(){
    addEventListener('scroll', function(){
    document.querySelector('.nav').style.backgroundColor = doc.documentElement.scrollTop > 99 ? 'rgba(254, 254, 254, 0.995)' : 'transparent';
    document.querySelector('.nav').style.boxShadow = doc.documentElement.scrollTop > 99 ? '0px 13px 13px -16px #1111118c' : 'none';
    });
  });
}



  function toggleMenu(ref) {
    ref.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  };
