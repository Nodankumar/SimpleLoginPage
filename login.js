function validate(){
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;

  if(username=='Grogu_dev@gmail.com' && password=='Grogu_dev'){
    window.location.href='https://grogu-dev.github.io/Flipkart-Clone/';
  }
  else{
    window.location.href='https://grogu-dev.github.io/SimpleLoginPage/);
    alert('Enter wrong credentials..')
  }

}
