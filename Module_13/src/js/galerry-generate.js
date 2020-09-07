import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import galleryCartTemplate from '../templates/gallery-cart-template.hbs';
import imageService from './services/apiService';
import * as basicLightbox from 'basiclightbox';

const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('#gallery'),
    btnLoad: document.querySelector('#button-load'),
    btnTop: document.querySelector('#button-top'),
};

const masonryInstance = new Masonry(refs.gallery, {
    columnWidth: '.gallery__sizer',
    itemSelector: '.gallery__item',
    percentPosition: true,
    gutter: 20,
    transitionDuratin: '0.2s',
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

const imgLoadInstance = imagesLoaded(refs.gallery);

imgLoadInstance.on('progress', () => {
    masonryInstance.layout();
});

refs.btnLoad.addEventListener('click', loadMoreBtnHandler);
refs.btnTop.addEventListener('click', toTopBtnHandler);
refs.gallery.addEventListener('click', openLargeImageHandler);
refs.form.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;
    imageService.currentQuery = searchQuery;
    clearGalleryList();
    imageService.resetPage();
    toGetImages();
    refs.btnLoad.classList.remove('visually-hidden');
    refs.btnTop.classList.remove('visually-hidden');
}

function toTopBtnHandler(event) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    event.currentTarget.blur();
}

function loadMoreBtnHandler() {
    toGetImages();
    event.currentTarget.blur();
}

function scrollToNewImages() {
    const heightOfScroll = window.innerHeight - 200;
    window.scrollBy({
        top: heightOfScroll,
        behavior: 'smooth',
    });
}

function openLargeImageHandler(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) return;

    const focusedLi = event.target.closest('li.gallery__item');
    const bigImageUrl = focusedLi.dataset.source;
    console.log(bigImageUrl);
    basicLightbox
        .create(
            `
		<img width="1400" height="900" src="${bigImageUrl}">
	`,
        )
        .show();
}

function toGetImages() {
    imageService.fethImages().then(images => {
        toGenMarkup(images);
    });
}

function toGenMarkup(images) {
    const markup = images.map(image => galleryCartTemplate(image));

    const proxyEl = document.createElement('ul');
    proxyEl.innerHTML = markup;
    const liArr = [];
    //Зделал топорно циклом потому что когда распыляю(const liArr = [...proxyEl.children]) добавляет в масив как колекцию HTML
    for (let i = 0; i < proxyEl.children.length; i += 1) {
        liArr.push(proxyEl.children[i]);
    }
    refs.gallery.append(...liArr);
    masonryInstance.appended(liArr);
    if (imageService.currentPage !== 2) scrollToNewImages();
}

function clearGalleryList() {
    masonryInstance.remove(refs.gallery.children);
    masonryInstance.layout();
}
