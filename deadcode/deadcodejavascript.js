	// $(document).ready(function() {
		// 	$('.custom-cls').click(function() {
		// 		if ($('this').hasClass('btn-default')) {
		// 			$('this').removeClass('btn-default');

		// 		} else {

		// 		}
		// 	});
		// });

	//fixes nav bar using jquery
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 80) {
//         $('.mainHeader').css('top', $(window).scrollTop());
//     }
// }
// );

  // function Loadgooglemaps() {
  //   var LatLong = new google.maps.LatLng(52.6294673,-1.1380354);
  //   var Options = {
  //     zoom: 10,
  //     center: LatLong,
  //     disableDefaultUI: true,
  //     panControl: true,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       style: google.maps.ZoomControlStyle.DEFAULT
  //     },

  //     mapTypeControl: true,
  //     mapTypeControlOptions: {
  //       style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
  //     },
  //     streetViewControl: true,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
  //   var map = new google.maps.Map(document.getElementById("Googlemaps"), Options);
  //   var markericon = new google.maps.Marker({
  //     position: LatLong,
  //     map: map,
  //     title:"le1 9bh"
  //   });
  //   var infowindow = new google.maps.InfoWindow({
  //     content: "De Montfort University"
  //     });
  //     google.maps.event.addListener(markericon, "click", function() {
  //       infowindow.open(map, markericon);
  //     });


  //     var today = new Date();
  // var h = today.getHours();
  // var m = today.getMinutes();
  // var s = today.getSeconds();
  // m = checkTime(m);
  // s = checkTime(s);
  // document.getElementById('livetimes').innerHTML =
  //   h + ":" + m + ":" + s;
  // var t = setTimeout(time, 500);
  // }


  // function checkToggle (){

//   if(document.getElementById("val").value=="ON"){
//     swapStyleSheet("../light.css")
//     }

//   else if(document.getElementById("val").value=="OFF"){
//     swapStyleSheet("stylesheet.css")
//   }
// }

// var f = document.getElementById("name").value;
// var s = document.getElementById("sname").value;

// var myObj, x, y;

// myObj = { "name": f, "sname": s};

// x = myObj.name;
// y = myObj.sname;

// document.getElementById("htwo2").innerHTML = "Contact Us " + x + " " + y;


// function time() {
//     var date = new Date();
//     var time= date.toLocaleTimeString();
//     document.getElementById("time").innerHTML = time;
// }

// var info = [
//   {
//     "message": document.getElementById('message').placeholder
//   }
// ];

// function addJSON() {
//     var nameval = document.getElementById('name').value;
//     var messageval = document.getElementById('message').placeholder;
//     var newmessage = messageval + " " + nameval;
//     var newObject = {
//         "message": newmessage
//     };
//     info.push(newObject);
// }

// $(document).ready(function(){
//     $("#H").click(function(){
//         $("#animation").fadeTo("slow", 0);
//     });
// });

// var nameval = document.getElementById('name').value;

// var obj = JSON.parse({ "name": document.getElementById('name').value });
// document.getElementById("demo").innerHTML = "Hello " + obj.name;


// function myFunction() {

//     var nameval = document.getElementById("name").innerHTML;

//     document.getElementById("demo").innerHTML = ;
// }

// function landing(){
//     window.location.href='Landing.html';

// }

//Function To Display Popup
function div_show() {
  //window.location.href='Home.html'
  document.getElementById('popupdiv').style.display = "block";
}

// function home_show() {
// //window.location.href='Home.html'
// document.getElementById('lheader').style.display = "none";
// document.getElementById('homepage').style.display = "block";

// }

//Function to Hide Popup
function div_hide() {
  document.getElementById('popupdiv').style.display = "none";
}

// Validating Empty Field
// function check_empty() {
// if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
// alert("Fill All Fields !");
// } 
// else {
// document.getElementById('form').submit();
// alert("Form Submitted Successfully...");
//}
//}

    // $(".port").click(function()
    // {

    //     $(".mainHeader").hide(700);
    //     $(".mainContent").hide(700);
    //      $(".title").hide(700);
    //      $(".searchbar").hide(700);
    //     $("#slideshow").hide(700);
    //     $("#slider").hide();

    //     $(".sidebars").hide();
    //     $("#slider").show(800);


    // }
    // );

//    $("#home").click(function() {
//
//      $("#mh").show(200);
//      $(".mainContent").show(1500);
//      $(".title").show(900);
//      $(".searchbar").show(100);
//      $("#slideshow").show(1100);
//
//      $(".sidebars").show(2000);
//      $(".lheader").hide();
//
//
//    });

//    $("#land").click(function() {
//
//      $(".mainHeader").hide();
//      $(".mainContent").hide();
//      $(".title").hide();
//      $(".searchbar").hide();
//      $("#slideshow").hide();
//
//      $(".sidebars").hide();
//      $(".lheader").show(800);
//    });

 $(".detail").hide()
    $(".arrowup").hide()

    $(".arrow").click(function() {
      $(".detail").show(500);
      $(".arrowup").show(500);
      $(".arrow").hide();

      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function() {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if

    })

    $(".arrowup").click(function() {
        $(".detail").hide(500);
        $(".arrow").show(500);
        $(".arrowup").hide();

      }

    );

    $(".detail2").hide()
    $(".arrowup2").hide()

    $(".arrow2").click(function() {
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function() {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
      $(".detail2").show(500);
      $(".arrowup2").show(500);
      $(".arrow2").hide();


    })

    $(".arrowup2").click(function() {
        $(".detail2").hide(500);
        $(".arrow2").show(500);
        $(".arrowup2").hide();
      }

    );

    $(".detail3").hide()
    $(".arrowup3").hide()

    $(".arrow3").click(function() {

      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function() {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
      $(".detail3").show(500);
      $(".arrowup3").show(500);
      $(".arrow3").hide();

    })

    $(".arrowup3").click(function() {
        $(".detail3").hide(500);
        $(".arrow3").show(500);
        $(".arrowup3").hide();
      }

    );

    // $('#link').click(function(event) {
//      event.preventDefault();
//    $.scrollTo($('.title'), 1000);
// });


var nrImg = 3; //the number of img , I only have 3 
var IntSeconds = 4; //the seconds between the imgs

// Portfolio
function Load() {
  nrShown = 0; //the img visible
  Vect = new Array(nrImg + 10);
  Vect[0] = document.getElementById("Img1");
  Vect[0].style.visibility = "visible";

  document.getElementById("S" + 0).style.visibility = "visible";

  for (var i = 1; i < nrImg; i++) {
    Vect[i] = document.getElementById("Img" + (i + 1));
    document.getElementById("S" + i).style.visibility = "visible";
  }

  document.getElementById("S" + 0).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
  document.getElementById("SP" + nrShown).style.visibility = "visible";

  mytime = setInterval(Timer, IntSeconds * 1000);
}

function Timer() {
  nrShown++;
  if (nrShown == nrImg)
    nrShown = 0;
  Effect();
}
//next img
function next() {
  nrShown++;
  if (nrShown == nrImg)
    nrShown = 0;
  Effect();

  clearInterval(mytime);
  mytime = setInterval(Timer, IntSeconds * 1000);
}



// // Home
// var images = ["images/tech2.png", "images/tech3.jpg", "images/tech1.jpg"];
// // var caption = ["caption for slide1", "caption for slide2"];

// var imageNumber = 0;
// var imageLength = images.length - 1;

// function changeImage(x) {
//   imageNumber += x;
//   //restarts array
//   if (imageNumber > imageLength) {
//     imageNumber = 0;
//   }

//   if (imageNumber < 0) {
//     imageNumber = imageLength;
//   }

//   document.getElementById(".slideshow").src = images[imageNumber];
//   // document.getElementById("caption").innetHTML = caption[imageNumber];

//   return false;
// }

// function autoRun() {
//   setInterval("changeImage(1)", 5000);

// }


function prev() {
  nrShown--;
  if (nrShown == -1)
    nrShown = nrImg - 1;
  Effect();

  clearInterval(mytime);
  mytime = setInterval(Timer, IntSeconds * 1000);
}
//here changes the img + effect
function Effect() {
  for (var i = 0; i < nrImg; i++) {
    Vect[i].style.opacity = "0"; //to add the fade effect
    Vect[i].style.visibility = "hidden";

    document.getElementById("S" + i).style.backgroundColor = "rgba(0, 0, 0, 0.70)";
    document.getElementById("SP" + i).style.visibility = "hidden";
  }
  Vect[nrShown].style.opacity = "1";
  Vect[nrShown].style.visibility = "visible";
  document.getElementById("S" + nrShown).style.backgroundColor = "rgba(255, 255, 255, 0.90)";
  document.getElementById("SP" + nrShown).style.visibility = "visible";
}