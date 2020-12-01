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



/*..........................................................Navigation ........................................................*/          


//nav  links
const navTags = {
  navTag1: 'Services',
  navTag2: 'Product',
  navTag3: 'Vision',
  navTag4: 'Features',
  navTag5: 'About',
  navTag6: 'Contact'
}

//selecting all the anchor tags
const navLinks = document.querySelectorAll('nav a')

//function to set link array to anchor tags
for (let i = 0; i < navLinks.length; i++){
  const navContents = Object.values(navTags)
  navLinks[i].textContent = navContents[i]
}

//creating element and attaching a text node to element
const navLink7 = document.createElement('a');
const navLink7Text = document.createTextNode('Home');
navLink7.appendChild(navLink7Text);

//creating element and attaching a text node to element
const navLink8 = document.createElement('a');
const navLink8Text = document.createTextNode('Employees');
navLink8.appendChild(navLink8Text);

//adding navLink7 to beginning of nav and navLink8 to end of nav
document.querySelector('nav').prepend(navLink7);
document.querySelector('nav').append(navLink8);


/*..............................................................Body..................................................................*/


//title
const ctaText = document.querySelector('h1');
ctaText.textContent = ('DOM' + '\n' + 'IS' + '\n' + 'AWESOME');

//pic next to title
document.getElementById('cta-img').setAttribute('src', 'img/header-img.png');

//button
const buttonText = document.querySelector('button');
buttonText.textContent = ('Get Started');

//features sec
const feat = document.body.children[0].children[2].children[0].children[0].children[0];
feat.textContent = ('Features')
feat.nextElementSibling.textContent = ('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

//about sec
const about = document.body.children[0].children[2].children[0].children[1].children[0];
about.textContent = ('About');
about.nextElementSibling.textContent = ('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
 
//mid page accent
const midPagePic = document.querySelector('.middle-img').setAttribute('src', 'img/mid-page-accent.jpg');

//serv sec
const serv = document.body.children[0].children[2].children[2].children[0].children[0];
serv.textContent = ('Services');
serv.nextElementSibling.textContent = ('Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

//product sec
const prod = document.body.children[0].children[2].children[2].children[1].children[0];
prod.textContent = ('Services');
prod.nextElementSibling.textContent = ('Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');

//vision sec
const vision = document.body.children[0].children[2].children[2].children[2].children[0];
vision.textContent = ('Vision');
vision.nextElementSibling.textContent = ('Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');


/*..............................................................Contact..................................................................*/


const cont = document.body.children[0].children[3].children[0];
cont.textContent = ('Content');
cont.nextElementSibling.textContent = ('123 Way 456 Street Somewhere, USA');
const number = document.body.children[0].children[3].children[2];
number.textContent = ('1 (888) 888-8888');
number.nextElementSibling.textContent = ('sales@greatidea.io');


/*..............................................................Footer..................................................................*/


const foot = document.body.children[0].children[4].children[0];
foot.textContent = ('Copyright Great Idea! 2018');












