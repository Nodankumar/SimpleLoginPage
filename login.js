function validate(){
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;

  if(username=='Grogu_dev@gmail.com' && password=='Grogu_dev'){
    location.href='../HomePage.html';
  }
  else{
    location.href='loginPage.html';
    alert('Enter wrong credentials..')
  }

}
