 
  // Automatic Slideshow - change image every 3 seconds
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }


  
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    //grab content from  input
let feet = document.querySelector('#company');
let inches = document.querySelector('#phone');
let inche= document.querySelector('#location')

const results = document.querySelector('#results');
    e.preventDefault();

    company = parseInt(company.value);
    phone = parseInt(phone.value);
    location = parseInt(location.value);
         document.querySelector('#company').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#location').value = '';
    });
