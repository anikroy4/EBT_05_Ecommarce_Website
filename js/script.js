$('.sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,

  autoplaySpeed: 1500,
  prevArrow: '<i class="fa-solid fa-angle-left leftarrow"></i>',
  nextArrow: '<i class="fa-solid fa-angle-right rightarrow"></i>',
});
// Year and time

function dateAndTime() {
  const now = new Date();
  
  document.getElementById('footer-year').textContent = now.getFullYear();
  
 
  function updateTime() {
    const clockNow = new Date();
    document.getElementById('footer-date-time').textContent = clockNow.toLocaleTimeString();
  }
  
  // Run clock immediately and every second
  updateTime();
  setInterval(updateTime, 1000);
}
 
// Run on page load
document.addEventListener('DOMContentLoaded', dateAndTime);