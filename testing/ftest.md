## Functionality Testing

The following will cover the test procedures that took place to verify the requirements for functionality.

[Back](../README.md)

### Test 1

As you can see in the below image the home tab is not highlighted, leaving the user unaware of what page they are on. This reoccured on all pages.

![](ftest1.png)



The addition of `class="active"` with additional css styling to that class, was added to the following code in attempt to rectify the issue:

```html

<ul class="nav navbar-nav">
	<li class="active"><a href="javascript:void(0);" class="home-tab"><i class="fa fa-home fa-lg" aria-hidden="true"></i> Home</a></li>
	<li><a href="javascript:void(0);" class="portfolio-page"><i class="fa fa-picture-o fa-lg" aria-hidden="true"></i> Portfolio</a></li>
	<li><a href="javascript:void(0);" class="pricing-menu"><i class="fa fa-money fa-lg" aria-hidden="true"></i> Pricing</a></li>
	<li><a href="javascript:void(0);" class="contact-tab"><i class="fa fa-phone fa-lg"  aria-hidden="true"></i> Contact</a></li>
								</ul>
```

_ _ _


### Test 2

The above worked as you can now see from the below image the home tab is now highlighted in white, however the same class naming must be repeated on each page of the website.

![](ftest2.png)

[Back](../README.md)