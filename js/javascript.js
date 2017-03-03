

//slideshow home button
function home() {
  window.location.href = 'index.html';

}

$(document).ready(function(){

    $("#mh").hide();
    $(".title").hide();
    $(".searchbar").hide();
    $("#slideshow").hide();
    $(".lheader").show();
    $("#cpage").hide();


    $(".link").click(function() {
      $("#mh").show();
      $(".mainContent").show();
      $(".title").show();
      $(".searchbar").show();
      $("#slideshow").show();

      $(".sidebars").show();
      $(".lheader").hide(1000);
    });
	
	$(".pricing-menu").click(function() {
      $("#ppage").show();
           $("#cpage").hide();

     $("#mh").hide();
      $(".lheader").hide(1000);
    });
	
	$(".home-tab").click(function() {
		 $("#ppage").hide();
         $("#cpage").hide();

		$("#mh").show();

	});
	
	$(".contact-tab").click(function() {
     $("#ppage").hide();
         $("#cpage").show();

    $("#mh").hide();

  });

  });

$(document).ready(function() {
  // Add smooth scrolling to all links
  $(".scrollbackup").on('click', function() {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});

function validateForm() {

  var w = document.forms["form"]["name"].value;
  var x = document.forms["form"]["sname"].value;
  var y = document.forms["form"]["email"].value;
  var z = document.forms["form"]["message"].value;

  if (x == "" || w == "" || y == "" || Z == "") {
    alert("All Fields Must Be Filled Out");
    return false;
  }

}

//Attempted USE OF JSON
function myFunction() {

  var nameval = document.getElementById("name").value;
  var snameval = document.getElementById("sname").value;

  // var obj{};
  // obj['name'] = nameval;
  // obj['surname'] = surname;

  // var x = obj.name;
  // var y = obj.surname;

  document.getElementById("demo").innerHTML = alert("Thank You " + nameval + " " + snameval + " For Your Message Please Close The Contact Form");

}

//timestamp
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
  }; // add zero in front of numbers < 10
  return i;
}


function swapStyleSheet(sheet) {

  document.getElementById("light").setAttribute("href", sheet);

}

function goBack() {
    window.history.back();
}

// Get the modal
var modal = document.getElementById("frankyModal");
var modal2 = document.getElementById("jeremyModal");
var modal3 = document.getElementById("peterModal");
var modal4 = document.getElementById("daveModal");

// Get the image that opens the modal
var image = document.getElementById("franky");
var image2 = document.getElementById("jeremy");
var image3 = document.getElementById("peter");
var image4 = document.getElementById("dave");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
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

// span.onclick = function() {
//         modal2.style.display = "none"; //hides modal 
//         modal3.style.display = "none"; //hides modal
//         modal4.style.display = "none"; //hides modal
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal || event.target == modal2 || event.target == modal3 || event.target == modal4) {
        modal.style.display = "none"; //hides modal
        modal2.style.display = "none"; //hides modal 
        modal3.style.display = "none"; //hides modal
        modal4.style.display = "none"; //hides modal
    }
}

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
