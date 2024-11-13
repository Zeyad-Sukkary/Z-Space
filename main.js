
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

}

function scrollToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}




const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0 }); 
  
  
  const slidingElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  
  
  slidingElements.forEach(el => observer.observe(el));
  
  
  
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    
    const sticky = header.offsetTop + header.offsetHeight;
  
    if (window.pageYOffset > sticky) {
        logo.classList.add('fixed');
    } else {
        logo.classList.remove('fixed');
    }
  });
  