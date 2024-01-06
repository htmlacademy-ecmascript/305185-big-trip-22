import FilterView from './view/filter-view.js';
import TripInfo from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { RenderPosition, render } from './render.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const pageMainElement = document.querySelector('.page-main');
const tripInfoElement = document.querySelector('.trip-main');
const eventsListElement = pageMainElement.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  container: eventsListElement,
});

render(new TripInfo(), tripInfoElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);

boardPresenter.init();
