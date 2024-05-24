const leftArrow = document.querySelector(".scroll-arrow-left");
const rightArrow = document.querySelector(".scroll-arrow-right");
const carousel = document.querySelector(".carousel");

leftArrow.addEventListener("click", function() {
    console.log("Seta esquerda clicada");
    carousel.scrollLeft -= 350;
});

rightArrow.addEventListener("click", function() {
    console.log("Seta direita clicada");
    carousel.scrollLeft += 350;
});

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener("mousedown", function(event) {
    isDragging = true;
    startPos = event.pageX - carousel.offsetLeft;
    carousel.classList.add("grabbing");
    event.preventDefault(); 
});

carousel.addEventListener("mousemove", function(event) {
    if (!isDragging) return;
    const currentPosition = event.pageX - carousel.offsetLeft;
    const distance = currentPosition - startPos;
    currentTranslate = prevTranslate + distance;
    carousel.scrollLeft = -currentTranslate;
});

carousel.addEventListener("mouseup", function() {
    isDragging = false;
    prevTranslate = currentTranslate;
    carousel.classList.remove("grabbing");
});

carousel.addEventListener("mouseleave", function() {
    isDragging = false;
    prevTranslate = currentTranslate;
    carousel.classList.remove("grabbing");
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.card.expanded').forEach(expandedCard => {
            if (expandedCard !== this) {
                expandedCard.classList.remove('expanded');
                expandedCard.querySelector('.card-body').style.display = 'none';
            }
        });
        
        this.classList.toggle('expanded');
        const cardBody = this.querySelector('.card-body');
        cardBody.style.display = this.classList.contains('expanded') ? 'block' : 'none';
    });
});
