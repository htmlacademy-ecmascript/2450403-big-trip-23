import TripPresenter from './trip-presenter.js';

const tripMain = document.querySelector('.trip-main');
const pageBodyContainer = document.querySelector('.page-body__container');

const tripPresenter = new TripPresenter({tripMain});
const tripSortAndContent = new TripPresenter({pageBodyContainer});

tripPresenter.init();
tripSortAndContent.init();
