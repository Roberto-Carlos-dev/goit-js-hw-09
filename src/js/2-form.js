const STORAGE_KEY = 'feedback-form-state';//ключ, під яким зберігаються дані в localStorage.
const form = document.querySelector('.feedback-form');//посилання на саму форму

// Початковий стан
let formData = {  //створюю об'єкт, який відображає стан полів 
  email: '',
  message: '',
};

// Заповнення форми зі сховища при завантаженні
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
});

// Обробник input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim(); // без пробілів
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник submit
form.addEventListener('submit', event => {
    event.preventDefault(); // не перезавантажує сторінку
    
  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form submitted:', formData);

  // Очищення
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
