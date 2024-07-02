
const data = [
  { "day": "mon", "amount": 17.45 },
  { "day": "tue", "amount": 34.91 },
  { "day": "wed", "amount": 52.36 },
  { "day": "thu", "amount": 31.07 },
  { "day": "fri", "amount": 23.39 },
  { "day": "sat", "amount": 43.28 },
  { "day": "sun", "amount": 25.48 }
];

const today = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

const maxAmount = Math.max(...data.map(item => item.amount));

data.forEach((item, index) => {
  const bar = document.getElementById(`bar${index + 1}`);
  const height = (item.amount / maxAmount) * 100;
  bar.style.height = `${height}%`;
  bar.querySelector('p').textContent = item.day;

  if (item.day === today) {
    bar.classList.add('current-day');
  } else {
    bar.classList.remove('current-day');
  }

  const span = document.createElement('span');
  span.classList.add('amount');
  span.textContent = `$${item.amount.toFixed(2)}`;
  bar.appendChild(span);
});

