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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// populate header nav links
let navItems = Array.from(document.querySelectorAll('header nav a'));

navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// populate CTA content 
let ctah = document.querySelector('.cta .cta-text h1');
ctah.textContent = siteContent['cta']['h1'];

let ctab = document.querySelector('.cta .cta-text  button');
ctab.textContent = siteContent['cta']['button'];

let ctai = document.getElementById('cta-img');
ctai.src = siteContent["cta"]["img-src"];

// populate main content
let featuresh = document.querySelector('.main-content .top-content div:nth-child(1) h4');
featuresh.textContent = siteContent['main-content']['features-h4'];

let featuresp = document.querySelector('.main-content .top-content div:nth-child(1) p');
featuresp.textContent = siteContent['main-content']['features-content'];

let abouth = document.querySelector('.main-content .top-content div:nth-child(2) h4');
abouth.textContent = siteContent['main-content']['about-h4'];

let aboutp = document.querySelector('.main-content .top-content div:nth-child(2) p');
aboutp.textContent = siteContent['main-content']['about-content'];

// set middle image source
let midi = document.getElementById('middle-img');
midi.src = siteContent["main-content"]["middle-img-src"];

// populate bottom content
let servicesh = document.querySelector('.main-content .bottom-content div:nth-child(1) h4');
servicesh.textContent = siteContent['main-content']['services-h4'];

let servicesp = document.querySelector('.main-content .bottom-content div:nth-child(1) p');
servicesp.textContent = siteContent['main-content']['services-content'];

let producth = document.querySelector('.main-content .bottom-content div:nth-child(2) h4');
producth.textContent = siteContent['main-content']['product-h4'];

let productp = document.querySelector('.main-content .bottom-content div:nth-child(2) p');
productp.textContent = siteContent['main-content']['product-content'];

let visionh = document.querySelector('.main-content .bottom-content div:nth-child(3) h4');
visionh.textContent = siteContent['main-content']['vision-h4'];

let visionp = document.querySelector('.main-content .bottom-content div:nth-child(3) p');
visionp.textContent = siteContent['main-content']['vision-content'];

// populate contact section
let contacth = document.querySelector('.contact h4');
contacth.textContent = siteContent['contact']['contact-h4'];

let contacta = document.querySelector('.contact p:nth-of-type(1)');
contacta.textContent = siteContent['contact']['address'];

let contactp = document.querySelector('.contact p:nth-of-type(2)');
contactp.textContent = siteContent['contact']['phone'];

let contacte = document.querySelector('.contact p:nth-of-type(3)');
contacte.textContent = siteContent['contact']['email'];

// populate footer
let footerc = document.querySelector('footer p');
footerc.textContent = siteContent['footer']['copyright'];


/////////////////
// New Content //
/////////////////

// Change nav text color to green

navItems.forEach(element =>
  element.style.color = 'green'
);

// Add 2 more links to the nav using appendChild and prepend
let nav = document.querySelector('header nav');
let blogLink = document.createElement('a');
blogLink.href = "#";
blogLink.textContent = 'BLOG';
blogLink.style.color = 'green';
nav.appendChild(blogLink);

let donateLink = document.createElement('a');
donateLink.href = "#";
donateLink.textContent = 'DONATE';
donateLink.style.color = 'green';
nav.prepend(donateLink)