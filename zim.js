const searchBox = document.getElementById('searchBox');
const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');
function updateGallery(category,searchTerm){
     galleryItems.forEach((item) => {
          const matchesCategory = category === 'all' || item.dataset.category === category;
          const matchesSearch = item.dataset.title.toLowerCase().includes(searchTerm);
          item.style.display = matchesCategory && matchesSearch ? 'inline-block' : 'none';
     });
}
filterButtons.forEach((button) => {
     button.addEventListener('click',() => {
          document.querySelector('.filter-button.active').classList.remove('active');
          button.classList.add('active');
          const filter = button.getAttribute('data-filter');
          updateGallery(filter,searchBox.value.toLowerCase());
     });
});
searchBox.addEventListener('input',() => {
     const filter = document.querySelector('.filter-button.active').getAttribute('data-filter');
     updateGallery(filter,searchBox.value.toLowerCase());
});