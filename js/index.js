const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

////////////////////////////////////////
// A. POPULATE PAGE CONTENT FROM JSON //
////////////////////////////////////////

// populate nav link text 
let nav = document.querySelector('nav')
let navLinks = document.querySelectorAll("nav a");

navLinks[0].textContent = siteContent.nav['nav-item-1']
navLinks[1].textContent = siteContent.nav['nav-item-2']
navLinks[2].textContent = siteContent.nav['nav-item-3']
navLinks[3].textContent = siteContent.nav['nav-item-4']
navLinks[4].textContent = siteContent.nav['nav-item-5']
navLinks[5].textContent = siteContent.nav['nav-item-6']

// populate CTA section
// // define variables
let cta = document.querySelector('.cta')
let ctaText = document.querySelector('.cta-text')
let ctaH = document.querySelector('.cta-text h1')
let ctaButton = document.querySelector('.cta-text :last-child')
let ctaImg = document.querySelector('#cta-img')

// // match variables to content in JSON
ctaH.textContent = siteContent.cta['h1']
ctaButton.textContent = siteContent.cta['button']
ctaImg.src = siteContent.cta['img-src']

// populate main content section
// // define variables
let mainContent = document.querySelector('.main-content')
let topContent = document.querySelector('.top-content') 
let features = topContent.querySelector(':first-child')
//console.log('features ' + features)
let featuresH = features.querySelector('h4')
let featuresP = features.querySelector('p')
let about = topContent.querySelector('div:last-of-type')
// console.log('about ' + about)
let aboutH = about.querySelector('h4')
let aboutP = about.querySelector('p')
let middleImg = document.querySelector('#middle-img')
let bottomContent = document.querySelector('.bottom-content')
let services = bottomContent.querySelector(':first-child')
let servicesH = services.querySelector('h4')
let servicesP = services.querySelector('p')
let product = bottomContent.querySelector('div :nth-of-type(2)')
// console.log('product ' + product)
let productH = product.querySelector('h4')
let productP = product.querySelector('p')
let vision = bottomContent.querySelector('div:last-of-type')
let visionH = vision.querySelector('h4')
let visionP = vision.querySelector('p')

// // match variables to content in JSON
featuresH.textContent = siteContent['main-content']['features-h4']
featuresP.textContent = siteContent['main-content']['features-content']

aboutH.textContent = siteContent['main-content']['about-h4']
aboutP.textContent = siteContent['main-content']['about-content']

middleImg.src = siteContent['main-content']['middle-img-src']

servicesH.textContent = siteContent['main-content']['services-h4']
servicesP.textContent = siteContent['main-content']['services-content']

productH.textContent = siteContent['main-content']['product-h4']
productP.textContent = siteContent['main-content']['product-content']

visionH.textContent = siteContent['main-content']['vision-h4']
visionP.textContent = siteContent['main-content']['vision-content']

// populate contact section + footer
// // set variables

let contactH = document.querySelector('.contact h4')
let contactInfo = document.querySelectorAll('.contact p')
let contactAddr = contactInfo[0]
let contactPh = contactInfo[1]
let contactEm = contactInfo[2]
let copyright = document.querySelector('footer p')

// // match variables to content in JSON
contactH.textContent = siteContent.contact['contact-h4']
contactAddr.textContent = siteContent.contact['address']
contactPh.textContent = siteContent.contact['phone']
contactEm.textContent = siteContent.contact['email']
copyright.textContent = siteContent['footer']['copyright']


////////////////////////////////////////
// B. CHANGE STYLES & ADD NEW CONTENT //
////////////////////////////////////////

// change nav text to green
navLinks.forEach(element => {
  element.style.color = 'green'})


// Utilize .appendChild() and .prepend() to add two new items to the nav
let navBlog = document.createElement('a')
navBlog.textContent = 'BLOG'
navBlog.style.color = 'green'
let navDonate = document.createElement('a')
navDonate.innerHTML = 'DONATE'
navDonate.style.color = 'green'
nav.prepend(navBlog)
nav.appendChild(navDonate)

navBlog.setAttribute('href', 'https://www.livejournal.com')
navDonate.href = 'https://www.kickstarter.com'

// integrate a button that can update content on the site with a click of a button. You could build a similar data object with new values to help you test the click event.

let newButton = document.createElement('button')
newButton.textContent = 'Update Services'
newButton.onclick = function(){
  let newServices = prompt('What services should we offer?');
  servicesP.textContent = newServices;
}

ctaText.appendChild(newButton)

// the above added a new button below the CTA button that, when clicked, prompts the user to answer what services we should offer, and makes their answer the new content of the "Services" paragraph in the bottom-content section.