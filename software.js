function getElement(selection){
  const element = document.querySelector(selection);
  if(element) return element;
  throw new Error(`please check "${selection}" selector, no such element exists`);
}
function Gallery(element){
  this.element = element;
  this.list = [...element.querySelectorAll('.image')];
  this.modal = getElement('.modal');
  this.mainImage = getElement('.main-image');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeButton = getElement('.close-button');
  this.nextButton = getElement('.next-button');
  this.previousButton = getElement('.previous-button');
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.previousImage = this.previousImage.bind(this);
  this.chooseImage = this.chooseImage.bind(this);
  this.element.addEventListener('click',function(event){
    if(event.target.classList.contains('image')){
      this.openModal(event.target,this.list);
    }
  }.bind(this));
}
Gallery.prototype.setMainImage = function(selectedImage){
  this.mainImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};
Gallery.prototype.openModal = function(selectedImage,list){
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list.map(function(image){
    return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-image selected' : 'modal-image'}"/>`;
  }).join('');
  this.modal.classList.add('open');
  this.closeButton.addEventListener('click',this.closeModal);
  this.nextButton.addEventListener('click',this.nextImage);
  this.previousButton.addEventListener('click',this.previousImage);
  this.modalImages.addEventListener('click',this.chooseImage);
};
Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open');
  this.closeButton.removeEventListener('click',this.closeModal);
  this.nextButton.removeEventListener('click',this.nextImage);
  this.previousButton.removeEventListener('click',this.previousImage);
  this.modalImages.removeEventListener('click',this.chooseImage);
};
Gallery.prototype.nextImage = function(){
  const selected = this.modalImages.querySelector('.selected');
  const next = selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};
Gallery.prototype.previousImage = function(){
  const selected = this.modalImages.querySelector('.selected');
  const previous = selected.prevElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  previous.classList.add('selected');
  this.setMainImage(previous);
};
Gallery.prototype.chooseImage = function(event){
  if(event.target.classList.contains('modal-image')){
    const selected = this.modalImages.querySelector('.selected');
    selected.classList.remove('selected');
    this.setMainImage(event.target);
    event.target.classList.add('selected');
  }
};
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));