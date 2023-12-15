const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for all links with a hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, /* Enable looping */
        slidesPerView: 'auto',
        speed: 8500,
        autoplay:{
            delay: 0,
            disableOnInteraction: false,
        }
    });
});

document.querySelector('.mobile-menu-icon').addEventListener('click', function () {
    document.querySelector('.navBar').classList.toggle('mobile-menu-open');
});

document.addEventListener('DOMContentLoaded', function () {
    var martiniImage = document.getElementById('martiniImage');
    var rotated = false;

    martiniImage.addEventListener('click', function () {
        if (rotated) {
            martiniImage.style.transform = 'rotate(0deg)';
        } else {
            martiniImage.style.transform = 'rotate(90deg)';
        }

        rotated = !rotated; // Toggle the rotation state
    });
});