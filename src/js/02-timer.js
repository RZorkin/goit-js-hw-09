import flatpickr from 'flatpickr';
import { Report } from 'notiflix/build/notiflix-report-aio';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let offerTime;
let intervalId = null;
let isActive = false;

ref.start.disabled = true;

ref.start.addEventListener('click', () => {
  startTimer(offerTime);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    offerTime = selectedDates[0];
    if (selectedDates[0] < options.defaultDate) {
      ref.start.disabled = true;
      Report.failure('Fail', 'Please choose a date in the future');
    } else {
      ref.start.disabled = false;
    }
  },
};

const startTimer = offerTime => {
  ref.input.disabled = true;
  ref.start.disabled = true;
  isActive = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = offerTime - currentTime;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      isActive = false;
      Report.success('Success', 'Timer is over', 'Okay');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    ref.days.textContent = days;
    ref.hours.textContent = hours;
    ref.minutes.textContent = minutes;
    ref.seconds.textContent = seconds;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalId);
  isActive = false;
};

// Milliseconds per unit of time
const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');

  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');

  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');

  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
};

flatpickr(ref.input, options);
