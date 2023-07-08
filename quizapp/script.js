let user = document.getElementById("username")
let pass = document.getElementById("password")
let loginBtn = document.getElementById("submitbtn")

localStorage.setItem("username", "admin")
localStorage.setItem("password" , "admin")


function onLoginButtonClick()
{
    let username = localStorage.getItem("username")
    let pass1 = localStorage.getItem("password")
    
    let userInput = user.value
    let passInput = pass.value
	console.log(user.value,pass.value, pass1, username)
    console.log(typeof(user.value))
	if(user.value === username && pass.value === pass1)
	{
		window.location.href="/practice.html";
		window.alert("Login successful")
    }
    else{
        window.alert("Login failed: Incorrect username or password")
    }``
}
loginBtn.addEventListener("click",onLoginButtonClick)


function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
	if(document.getElementById('correct3').checked)
		{	score++;
		}
  if(document.getElementById('correct4').checked)
		{	score++;
		}
  if(document.getElementById('correct5').checked)
		{	score++;
		}
 alert("Your score is:"+score);
 
 localStorage.setItem("Your Score is: ", score);

}




 