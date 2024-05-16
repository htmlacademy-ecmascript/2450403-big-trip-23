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

export { getRandomNum, getRandomArrayElement, getDifferenceDate };
