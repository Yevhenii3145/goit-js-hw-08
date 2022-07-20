import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

fillFormFromStorage();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formData.email === undefined || formData.message === undefined) {
    alert('fill in all fields');
    return;
  }
  console.log(localStorage.getItem('feedback-form-state'));
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillFormFromStorage() {
  const parsedFormData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (parsedFormData) {
    refs.input.value = parsedFormData.email;
    refs.textarea.value = parsedFormData.message;
  }
}
