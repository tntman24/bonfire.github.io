const passwords = ['bonfireTest1234', 'HopeThisWords', '1234']; //These are the passwords
alert('TEST');

function checkPassword() { // This is to check the password
  var inputPassword = localStorage.getItem('password'); //Gets Password Object
  if (passwords.include(inputPassword)) { //Checks if the passsword list contains the password ,and if not, runs this
    alert("Sorry, incorrect password, please try again");
    checkPassword();
  }
}