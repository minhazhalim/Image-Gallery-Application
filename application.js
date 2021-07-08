const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;
imageIndexes.forEach((i) => {
     const image = document.createElement('img');
     image.src = `/images/cover__episode-${i}.jpg`;
     gallery.appendChild(image);
     image.classList.add('galleryImage');
     image.addEventListener('click',() => {
          popup.style.transform = 'translateY(0)';
          selectedImage.src = `/images/cover__episode-${i}.jpg`;
     });
});
popup.addEventListener('click',() => {
     popup.style.transform = 'translateY(-100%)';
     selectedImage.src = "";
});