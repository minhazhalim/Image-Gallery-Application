function imageGallery(){
     const highLight = document.querySelector('.gallery-highlight');
     const previews = document.querySelectorAll('img');
     previews.forEach(preview => {
          preview.addEventListener('click',function(){
               const smallSource = this.src;
               const bigSource = smallSource.replace('small','big');
               previews.forEach(preview => {
                    preview.classList.remove('room-active');
               });
               highLight.src = bigSource;
               preview.classList.add('room-active');
          });
     });
}
imageGallery();