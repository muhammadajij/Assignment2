
# Front End Web Development - Assignment 2

The following will introduce the topic the website was built on, covering the designs that were constructed. Then the testing stategy will be covered and what was needed to achieve the objectives. Additional details will also be deliberated such as any webhosting deployment methods.

## Introduction

The website produced is a e-commerce website who would supply other comapnies support applications, for example tools to aid communication from one person to another without using the telephone. The idea came from CCTV systems and how they support big customers. If the customer happens to be a retail company and need help with their system, they would just open the application and send a support ticket. This application would only be available on the website created, aswell as the price plans, a portfolio and even a contact page, all availeble for current customers or new customers.

## Designs

Please click the below links to view details of the different constructred WireFrame designs of the website.

1. [Initial Designs](WireFrame-Sketches/Style-1/Style-1.md)
2. [Final Designs](WireFrame-Sketches/Style-2/Style-2.md)

## Example Source Code

The following will elaborate on one HTML feature used, one CSS feature used and also one Javascript feature used.

### HTML

```html
<div id="frankyModal" class="modal">
	  <div class="modal-content">
		<div class="modal-header">
			<h2>Franky Boyle</h2>
		</div>
        <div class="modal-body">
			<p>Some text in the Modal Body</p>
			<p>Some other text...</p>
	    </div>
</div>
```

This is an example of html code that generated a pop up modal box with specific information, it consists of a header and body, in addition a footer could also be implemented but was not needed for this feature of the website.



_ _ _


### CSS

```css
#ppage {
  display: none;
}

#portfoliopage {
  display: none;
}

#cpage {
  display: none;
}

#mh {
  display: none;
}
```
This is an example of css code allowing sections of the SPA website to be hidden, this led to only the landing page to be visible when loading the website.

_ _ _



### Javascript

```javascript
function swapStyleSheet(sheet) {

  document.getElementById("light").setAttribute("href", sheet);

}
```
This is an example of javascript code that allowed spontaneous change of stylesheets. It provides the user some form of customisability.




## Testing

The following will cover the features of the website that were constantly tested as well as providing results for each test constructed.

### Requirements

The details below indicate what must be acheieved by the website design and functionality. These are the requirements that will be verfied.

#### Functionality Testing

* Links work accordingly
* Website validate accordingly
* Error messages appear correctly

#### Usability Testing

* Website should be easy to use
* Main menu should be provided on each page
* Content should be logical and easy to understand

#### Compatibility Testing

* Functions on multiple browsers
* Functions on multiple operating systems
* Mobile browsing functions accordingly


_ _ _



### Results

The following is the results for each area tested, please click on "Result" to see each test in more detail:


| Functionality Testing | [Result](testing/ftest.md)|
| --------------------- |:---------------------------:|
|    Test 1  			|  Fail					  |
|    Test 2 			|  Pass						  |

| Usability Testing			   | [Result](testing/utest.md)	  |
| ---------------------------- |:---------------------------:|
|    Test 1                    |  Pass                       |


| Compatability Testing		   | [Result](testing/ctest.md)	|
| ---------------------------- |:---------------------------:|
|    Test 1                    |  Fail                      |
|    Test 2                    |  Pass                       |

## Deployment

In regards to deployement, the website is currently being hosted by 000Webhost. They are a free web hosting company and include free domain hosting, therefore allowing me to host my website on the following url:

[http://support-solutions-majij.webege.com](http://support-solutions-majij.webege.com
)

## References

### Tools

* [Sublime Text](https://www.sublimetext.com) - Used to code HTML, CSS & Javascript aspects of the website.
* [Pencil Project](http://pencil.evolus.vn) - Used to create the wireframe sketches of the website.
* [Haroopad](http://pad.haroopress.com/user.html) - Used to create the Readme file along side the Design files.

### Frameworks

* [Font Awesome CSS](http://fontawesome.io) - Used to add icons to the navigation bar and other aspects of the website.
* [jQuery CSS](https://jquery.com) - Used to hide and show certain parts of the website, as well as enabling a button to scroll back to the top of the website.
* [Bootstrap CSS & JS](http://getbootstrap.com) - Used to grid certain areas of the website, as well as making it responsive.
* [Google Maps API](https://developers.google.com/maps) - Used to produce Google Map within contact page.

### Websites

* [Simple Share Buttons](https://simplesharebuttons.com) - Used for facebook and twitter logos for landing page.
* [The Guardian](https://www.theguardian.com) - Used for staff avatar images for home page.
* [Marketers Blackbox](http://marketersblackbook.com/wp-content/uploads/2011/11/consulting.jpg) - Used for first slideshow picture on home page.
* [Sinoshines](http://www.sinoshines.com/uploadfile/image/2013031119320560.jpg) - Used for second slideshow picture on home page.
* [Icons Place](http://www.iconsplace.com) - Used for the website main icon image, in both black and white colour.
* [Markezing](https://markezing.com/wp-content/uploads/2015/10/people_and_technology-1400x570.jpg
) - Used for header image, different images for each web page.

## Author

**Muhammad Ajij - P13230501 - De Montfort University - P13230501@my365.dmu.ac.uk**


## Acknowledgments






