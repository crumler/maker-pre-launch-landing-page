const email = document.getElementById('email');
const emailField = document.querySelector('.email');
let regex = new RegExp(/^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i);
const success = document.getElementById('success');
const warning = document.getElementById('warn');

function validateEmail(emailField) {
  event.preventDefault();

  if (email.value.match(regex)) {
    success.style.display = 'block';
    warning.style.display = 'none';
  } else {
    warning.style.display = 'block';
    success.style.display = 'none';
  };
};