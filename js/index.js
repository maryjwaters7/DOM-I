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

//NAV BAR
let newNavArray = siteContent.nav;

let navLinks = document.querySelectorAll('nav a');
for (let i = 0; i < navLinks.length; i++) {
  const contents = Object.values(newNavArray)
  navLinks[i].textContent = contents[i];
  navLinks[i].style.color = 'green';//ADD NEW CONTENT COLOR CHANGE
}


//HEADING SECTION
const newCtaArray = siteContent.cta;
const ctaArrayContent = Object.values(newCtaArray);

const topH1 = document.querySelector('.cta h1')
topH1.textContent = ctaArrayContent[0];

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = ctaArrayContent[1];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//MAIN SECTION
const newMainArray = siteContent["main-content"];
const mainArrayContent = Object.values(newMainArray);

const mainSections = document.getElementsByClassName('text-content');

const features = mainSections[0];
const featuresH4 = features.querySelector('h4');
featuresH4.textContent = mainArrayContent[0];
const featuresText = features.querySelector('p');
featuresText.textContent = mainArrayContent[1];

const about = mainSections[1];
const aboutH4 = about.querySelector('h4');
aboutH4.textContent = mainArrayContent[2];
const aboutText = about.querySelector('p');
aboutText.textContent = mainArrayContent[3];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const services = mainSections[2];
const servicesH4 = services.querySelector('h4');
servicesH4.textContent = mainArrayContent[5];
const servicesText = services.querySelector('p');
servicesText.textContent = mainArrayContent[6];

const product = mainSections[3];
const productH4 = product.querySelector('h4');
productH4.textContent = mainArrayContent[7];
const productText = product.querySelector('p');
productText.textContent = mainArrayContent[8];

const vision = mainSections[4];
const visionH4 = vision.querySelector('h4');
visionH4.textContent = mainArrayContent[9];
const visionText = vision.querySelector('p');
visionText.textContent = mainArrayContent[10];


//CONTACT SECTION
const newContactArray = siteContent["contact"];
const contactArrayContent = Object.values(newContactArray);

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = contactArrayContent[0];
const contactP = document.querySelectorAll('.contact p');
for (let i = 0; i < contactP.length; i++) {
  contactP[i].textContent = contactArrayContent[i + 1]
}


//FOOTER SECTION
const newFooterArray = siteContent['footer'];
const footerArrayContent = Object.values(newFooterArray);

const footerP = document.querySelector('footer p');
footerP.textContent = footerArrayContent[0];
