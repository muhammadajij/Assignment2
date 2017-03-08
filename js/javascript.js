<!-- Muhammad Ajij - P13230501 -->

// jQuery Funtion to show and hide aread of the website
$(document).ready(function(){

    $("#mh").hide();
    $(".title").hide();
    $(".searchbar").hide();
    $("#slideshow").hide();
    $(".lheader").show();
    $("#cpage").hide();
    $("#portfoliopage").hide();

    // When Enter site button clicked
    $(".link").click(function() {
      $("#mh").show();
      $(".mainContent").show();
      $(".title").show();
      $(".searchbar").show();
      $("#slideshow").show();

      $(".sidebars").show();
      $(".lheader").hide(1000);
    });
	 
  // When pricing nav button clicked
	$(".pricing-menu").click(function() {
      $("#ppage").show();
           $("#cpage").hide();
     $("#portfoliopage").hide();

     $("#mh").hide();
    });
	
  // When home nav button clicked
	$(".home-tab").click(function() {
		 $("#ppage").hide();
         $("#cpage").hide();
     $("#portfoliopage").hide();

		$("#mh").show();

	});
	
  //When contact nav button clicked
	$(".contact-tab").click(function() {
     $("#ppage").hide();
         $("#cpage").show();
     $("#portfoliopage").hide();

    $("#mh").hide();

  });

  //When portfolio nav button clicked
  $(".portfolio-page").click(function() {
     $("#ppage").hide();
     $("#cpage").hide();
     $("#mh").hide();
     $("#portfoliopage").show();


  });

  });

$(document).ready(function() {
  // Add smooth scrolling icon in footer
  $(".scrollbackup").on('click', function() {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });



});

var counter = 0;

// Checks to see if all fields have been filled out
function validateFormtwo() {
  counter = 0

  var w = document.forms["cform"]["name"].value;
  var s = document.forms["cform"]["sname"].value;
  var y = document.forms["cform"]["email"].value;
  var z = document.forms["cform"]["message"].value;

  if (s == "" || w == "" || y == "" || z == "") {
    alert("All Fields Must Be Filled Out");
    return false;
  }

  else {
    counter = 1;
  }

}

//Attempted USE OF JSON to return name when contact form is sent
function myFunction() {

  if (counter == 1){

  var nameval = document.getElementById("name").value;
  var snameval = document.getElementById("sname").value;

  // var obj{};
  // obj['name'] = nameval;
  // obj['surname'] = surname;

  // var x = obj.name;
  // var y = obj.surname;

  document.getElementById("demo").innerHTML = alert("Thank You " + nameval + " " + snameval + " For Your Message");
  
  }
}

// Checks to see if an email has been entered
function validateForm() {
    counter = 0;
    var x = document.forms["cform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Please Enter A valid Email Address");
        return false;
    }
    else {
      counter = 1;
    }
}

//Produces time stamp on landing page
function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('livetimes').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(time, 500);

}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }; // adds zero in front of numbers
  return i;
}

// Swaps stylesheets
function swapStyleSheet(sheet) {

  document.getElementById("light").setAttribute("href", sheet);

}

// Go back function
function goBack() {
    window.history.back();
}

// Get the modals
var modal = document.getElementById("frankyModal");
var modal2 = document.getElementById("jeremyModal");
var modal3 = document.getElementById("peterModal");
var modal4 = document.getElementById("daveModal");

// Get the image that opens the modal
var image = document.getElementById("franky");
var image2 = document.getElementById("jeremy");
var image3 = document.getElementById("peter");
var image4 = document.getElementById("dave");


// When the user clicks the button modal opens
image.onclick = function() {
    modal.style.display = "block"; //opens modal
}
image2.onclick = function() {
    modal2.style.display = "block"; //opens modal
}
image3.onclick = function() {
    modal3.style.display = "block"; //opens modal
}
image4.onclick = function() {
    modal4.style.display = "block"; //opens modal
}

// When the user clicks anywhere outside of the modal, modal closes
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4) {
        modal.style.display = "none"; //hides modal
        modal2.style.display = "none"; //hides modal 
        modal3.style.display = "none"; //hides modal
        modal4.style.display = "none"; //hides modal
    }
}

// Produces a map in contacts page
function initMap() {
        var latlang = {lat: 52.6294673, lng: -1.1380354};
        var map = new google.maps.Map(document.getElementById("Googlemaps"), {
          zoom: 15,
          center: {lat: 52.633200, lng: -1.147427}
        });

          var marker = new google.maps.Marker({
          position: latlang,
          map: map
        });
      }

// Opens modal for portfolio
function openModal() {
  document.getElementById("myport").style.display = "block"; //opens modal
  document.getElementById("fix").style.display = "none"; //hides searchbar
}

// Closes modal for portfolio
function closeModal() {
  document.getElementById("myport").style.display = "none"; //opens modal
  document.getElementById("fix").style.display = "block"; //opens searchbar
}

var slideIndex = 1;
showSlides(slideIndex);

//All used to change slide index's within portfolio
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Retrieves all images
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //opens specific image
  }
 
  slides[slideIndex-1].style.display = "block"; //closes specific image
}