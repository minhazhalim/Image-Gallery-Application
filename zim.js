const current = document.querySelector('#current');
const images = document.querySelector('.images');
const image = document.querySelectorAll('img');
image[0].style.opacity = 0.6;
images.addEventListener('click',imageClick);
function imageClick(event){
     image.forEach(picture => {
          picture.style.opacity = 1;
     });
     current.src = event.target.src;
     current.classList.add('fade-in');
     setTimeout(() => {
          current.classList.remove('fade-in');
     },300);
     event.target.style.opacity = 0.6;
}