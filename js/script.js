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


/* DOM Content Loaded Listener Start */
document.addEventListener("DOMContentLoaded", function() {
    
    /* Contact Form Selection Start */
    const contactForm = document.getElementById("mainContactForm");
    /* Contact Form Selection End */

    /* Form Submit Event Listener Start */
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            
            /* Prevent Default Page Reload Start */
            event.preventDefault();
            /* Prevent Default Page Reload End */
            
            /* Get Name Input Value Start */
            const nameInput = contactForm.querySelector('input[type="text"]').value;
            /* Get Name Input Value End */
            
            /* Show Success Alert Start */
            alert("Thank you, " + nameInput + ". Your message has been sent successfully!");
            /* Show Success Alert End */
            
            /* Reset Form Start */
            contactForm.reset();
            /* Reset Form End */
        });
    }
    /* Form Submit Event Listener End */

});
/* DOM Content Loaded Listener End */