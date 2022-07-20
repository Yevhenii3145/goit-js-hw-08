import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
const galleryAllMarkup = createGalleryAllMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryAllMarkup);

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryAllMarkup(galleryItems) {
  return galleryItems.reduce((acc, { preview, original, description }) => {
    return (
      acc +
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
    );
  }, '');
}
