const currentPage = 1; 

const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    circle.classList.remove('active');
});

const currentCircle = document.getElementById(`n${currentPage}`);
currentCircle.classList.add('active');


function nextPage(){

}