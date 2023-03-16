// import flatpickr from 'flatpickr';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import 'flatpickr/dist/flatpickr.min.css';

// let offerTime;

// const ref = {
//   input: document.querySelector('#datetime-picker'),
//   start: document.querySelector('[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// ref.start.setAttribute('disabled', '');
// ref.start.addEventListener('click', () => {
//   timer.start(offerTime);
// });

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     offerTime = selectedDates[0];
//     if (selectedDates[0] < options.defaultDate) {
//       ref.start.setAttribute('disabled', '');
//       Report.failure('Fail', '"Please choose a date in the future');
//     } else {
//       ref.start.removeAttribute('disabled');
//     }
//   },
// };

// const timer = {
//   intervalId: null,
//   isActive: false,

//   start() {
//     const currentTime = Date.now();
//     ref.input.setAttribute('disabled', '');
//     ref.start.setAttribute('disabled', '');
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const { days, hours, minutes, seconds } = timer.convertMs(
//         offerTime - currentTime
//       );
//       if (currentTime >= offerTime) {
//         Report.success('Success', 'Timer is over', 'Okay');
//         this.stop();
//         return;
//       }
//       ref.days.textContent = days;
//       ref.hours.textContent = hours;
//       ref.minutes.textContent = minutes;
//       ref.seconds.textContent = seconds;
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//   },

//   pad(value) {
//     return String(value.toString().padStart(2, '0'));
//   },

//   convertMs(ms) {
//     // Milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // The rest of the days
//     const days = this.pad(Math.floor(ms / day));
//     // The rest of the days
//     const hours = this.pad(Math.floor((ms % day) / hour));
//     // The rest of the days
//     const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//     // The rest of the days
//     const seconds = this.pad(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   },
// };

// const fp = flatpickr(ref.input, options);
