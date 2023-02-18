import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createImgCardsMarkup(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
            `
    }).join('');
   
      

}


const imgsMarkup = createImgCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgsMarkup);

gallery.addEventListener('click', onGalleryContainerClick)



function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    
  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${evt.target.dataset.source}">
`, {
  onShow: (instance) => {
    document.addEventListener('keydown', closeModalByEscape);
    },
  
    onClose: (instance) => {
      document.removeEventListener('keydown', closeModalByEscape);
    }
})

instance.show()

  function closeModalByEscape(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
}
}






