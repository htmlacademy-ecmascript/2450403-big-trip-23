function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getDifferenceDate (from, to) {
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

// function getRandomPhotos(arrayLength, photosAmount) {
//   const placeholderUrl = 'https://loremflickr.com/248/152?random=';
//   const photosArray = Array.from({ length: arrayLength}, () => `${placeholderUrl}&photo=${getRandomNum(photosAmount)}`);
//   return photosArray;
// }

// function convertDate(dateStr) {
//   const parts = dateStr.split(' ');
//   const dateParts = parts[0].split('/');
//   const timeParts = parts[1].split(':');

//   const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0], timeParts[0], timeParts[1]);
//   return date.toISOString();
// }

export { getRandomNum, getRandomArrayElement, getDifferenceDate };
