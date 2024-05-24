document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.getElementById('logo-img');
    const originalSrc = logoImg.src;
    const hoverSrc = './assets/logo-hover.svg';

    logoImg.addEventListener('mouseenter', () => {
        logoImg.classList.remove('rotated-out');
        logoImg.classList.add('rotated-in');
        setTimeout(() => {
            logoImg.src = hoverSrc;
        }, 300);
    });

    logoImg.addEventListener('mouseleave', () => {
        logoImg.classList.remove('rotated-in');
        logoImg.classList.add('rotated-out');
        setTimeout(() => {
            logoImg.src = originalSrc;
        }, 300); 
    });
});

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
