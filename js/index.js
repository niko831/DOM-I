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

const navTags = {
  navTag1: 'Services',
  navTag2: 'Product',
  navTag3: 'Vision',
  navTag4: 'Features',
  navTag5: 'About',
  navTag6: 'Contact'
}

const navLinks = document.querySelectorAll('nav a')

for (let i = 0; i < navLinks.length; i++){
  const navContents = Object.values(navTags)
  navLinks[i].textContent = navContents[i]
}

// const navLink7 = document.createElement('a');
// const navLink7Text = document.createTextNode('Employees');
// navLink7.appendChild(navLink7Text);
// document.querySelector('nav').appendChild(navLink7);

// const navLink8 = document.createElement('a');
// const navLink8Text = document.createTextNode('Pets');
// navLink8.appendChild(navLink8Text);
// document.querySelector('nav').appendChild(navLink8);

const navLink7 = document.createElement('a');
const navLink7Text = document.createTextNode('Home');
navLink7.appendChild(navLink7Text);

const navLink8 = document.createElement('a');
const navLink8Text = document.createTextNode('Employees');
navLink8.appendChild(navLink8Text);

document.querySelector('nav').prepend(navLink7);
document.querySelector('nav').append(navLink8);
