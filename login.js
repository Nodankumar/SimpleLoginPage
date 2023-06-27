function validate(){
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;

  if(username=='Grogu_dev@gmail.com' && password=='Grogu_dev'){
    location.href='https://nodankumar.github.io/Flipkart-Clone/';
  }
  else{
    location.href='https://grogu-dev.github.io/SimpleLoginPage/';
    alert('Entered wrong credentials..')
  }

}
