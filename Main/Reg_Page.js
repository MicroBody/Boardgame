document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform validation or further processing
  // You can send these values to a server for registration, or perform client-side validation

  // Clear the input fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});