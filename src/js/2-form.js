let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const getSavedData = JSON.parse(localStorage.getItem(localStorageKey));
if (getSavedData) {
  formData = { ...formData, ...getSavedData };
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (event.target.email.value === '' || event.target.message.value === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';

  form.reset();
});
