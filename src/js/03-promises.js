import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  form: document.querySelector('.form'),
  button: document.querySelector('button'),
  amount: document.querySelector('input[name="amount"]'),
  step: document.querySelector('input[name="step"]'),
  delay: document.querySelector('input[name="delay"]'),
};

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const handleSubmit = async event => {
  event.preventDefault();
  const { amount, step, delay } = ref;
  let numDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    try {
      const result = await createPromise(i, numDelay);
      Notify.success(
        `✅ Fulfilled promise ${result.position} in ${result.delay}ms`
      );
    } catch (error) {
      Notify.failure(
        `❌ Rejected promise ${error.position} in ${error.delay}ms`
      );
    }
    numDelay += Number(step.value);
  }
};

ref.form.addEventListener('submit', handleSubmit);
