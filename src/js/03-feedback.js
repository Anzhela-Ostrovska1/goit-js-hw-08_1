import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));
input.addEventListener('input', throttle(onTextareaInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateTexarea();

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput() {
  const formData = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTexarea() {
  const savedInfo = localStorage.getItem(STORAGE_KEY);
  const values = JSON.parse(savedInfo);
  if (values) {
    input.value = values.email;
    textarea.value = values.message;
  }
}
