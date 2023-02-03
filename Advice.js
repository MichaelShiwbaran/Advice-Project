const url = "https://api.adviceslip.com/advice";

fetch(url) 
   .then(response => {
   if (!response.ok) {
      throw new Error("Bad response");
    }
    return response.json();
   })
   .then(data => 
     $("#advice").text(data.slip.advice)
   )
   .catch(err => 
     console.error(err)
   );
   
let isShown = false;

function rel(){
  let request = new XMLHttpRequest();
  let url = "https://api.adviceslip.com/advice";

  request.open("GET", url, true);

  request.onload = function() {

  let data = JSON.parse(this.response); 
  //let advice = document.getElementById('advice');
  
  if (request.status >= 200 && request.status < 400) {
    $("#advice").text(data["slip"].advice);

    //advice.textContent = data["slip"].advice;
  }
  };
  request.send();
}

function showAdvice(){
  if (isShown == false){
    $("#advice").show();
    isShown = true;
  } else {
    $("#advice").hide();
    isShown = false;
  }
}