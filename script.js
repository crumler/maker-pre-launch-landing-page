const email = document.getElementById('email');
const emailField = document.querySelector('.email');
const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

function validateEmail(emailField) {
  if (emailField.value.match(mailFormat)) {
    alert("Thank you for signing up!")
  } else {
    alert("Oops!  That doesn't look like an email address")
  };
};