import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createImgCardsMarkup(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
       
          <a alt="self" class="gallery__item" href="${original}" >
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        
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

    let gallery = new SimpleLightbox('.gallery .gallery__item', { captions: true, captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
    gallery.on('show.simplelightbox', function () {
        
      
    });
    

    gallery.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}



  

 
