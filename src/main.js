import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  loader.style.display = 'block';

  const inputValue = event.currentTarget.querySelector('.form-input').value;

  fetchRequest(inputValue)
    .then(data => {
      loader.style.display = 'none';
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            close: false,
        });
      }

      return data;
    })

    .then(data => {
      gallery.innerHTML = ('beforeend', createMarkup(data.hits));

      const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
      searchForm.reset();
    })

    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        close: false,
      });
    });
}