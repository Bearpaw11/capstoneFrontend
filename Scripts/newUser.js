let signup = document.getElementById("signup");
signup.reset()
signup.addEventListener("submit", (e) => {
  e.preventDefault()
  
  console.log(e)
  
  //regex to check if a vailid email was entered
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target[0].value)){
    //check to see if password are equal
    if(e.target[2].value === e.target[3].value){
      alert("Thank you for registering " + e.target[2].value)
      //this is where you shuld send to data base and rediect
      location.href="../html/signin.html"
      e.target.reset();
    }
    else {
        e.target.reset();
        alert("Your passwords did not match")
      }
    }
    else{
      e.target.reset();
      alert("You did not enter a valid email")
    }
   
  //send request with info
})