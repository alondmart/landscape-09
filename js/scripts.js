// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()


// opens and closes nav for mobile
const hamburger = document.querySelector("#hamburgerBtn")

hamburger.addEventListener("click", () => {
    document.querySelector("#primaryNav").classList.toggle("open")  
})

// slider stuff
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical', we can get rid of this, since direction: horizontal is the default
    loop: true,
    effect: 'slide',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // start autoplay
    autoplay: {
        delay: 5000,
    },


  });