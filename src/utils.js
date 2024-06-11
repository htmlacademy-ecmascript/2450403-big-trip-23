import { FilterTypes } from './const.js';

export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getDifferenceDate (from, to) {
  let result = '';

  const diifInDays = to.diff(from, 'day');
  const diffInHours = to.diff(from, 'hour') % 24;
  const diffInMinutes = to.diff(from, 'minute') % 60;

  if (diifInDays > 0) {
    result += `${diifInDays}D `;
  }

  if (diffInHours > 0) {
    result += `${diffInHours}H `;
  }

  if (diffInMinutes > 0) {
    result += `${diffInMinutes}M`;
  }
  return result.trim();
}

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const getFilterByPeriod = (trips) => {
  const currentDate = new Date();

  return {
    [FilterTypes.EVERYTHING]: trips.length,
    [FilterTypes.PAST]: trips.filter((trip) => new Date(trip.dateTo).getTime() < currentDate.getTime()).length,
    [FilterTypes.PRESENT]: trips.filter((trip) => new Date(trip.dateFrom).getTime() <= currentDate.getTime() && new Date(trip.dateTo).getTime() >= currentDate.getTime()).length,
    [FilterTypes.FUTURE]: trips.filter((trip) => new Date(trip.dateFrom).getTime() > currentDate.getTime()).length,
  };
};
