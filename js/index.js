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

// Add IDs to elements in the DOM
const createID = (className, id) => {
  document.querySelector(className).setAttribute('id',id);
}

createID('nav','top-nav');
createID('.cta-text','ctaText');
createID('.contact','contact');
createID('footer','footer');

// Add content to elements using parents' IDs
const renderElements = (obj, id) => {
  let ListValues = Object.values(obj);
  let parentID = document.getElementById(id);
  for (i = 0; i < parentID.children.length; i++) {
    parentID.children[i].innerHTML = ListValues[i];
  }
}

renderElements(siteContent.nav,'top-nav');
renderElements(siteContent.cta,'ctaText');
renderElements(siteContent.contact,'contact');
renderElements(siteContent.footer,'footer');

// Add spacing to main heading
let heading = document.querySelector('h1');
heading.innerHTML = "DOM<br>Is<br>Awesome"

// Add new content to nav bar
let navBar = document.querySelector('nav');
let navItems = document.querySelectorAll('a');
navItems.forEach(item => item.style.color = 'green');
let node1 = document.createElement('a');
node1.textContent = "Gallery";
node1.style.color = "green";
let node2 = document.createElement('a');
node2.textContent = "Danger!";
navBar.appendChild(node1);
navBar.prepend(node2);
node2.style.color = "green";

// Add images to page
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src',siteContent['cta']['img-src']);
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src',siteContent['main-content']['middle-img-src']);


// Add main text content to page
let mainContent = siteContent['main-content'];
delete mainContent['middle-img-src'];

let mainContentValues = Object.values(mainContent);
let mainContentValuesHeadings = [];
let mainContentValuesContent = [];

for (i = 0; i < mainContentValues.length; i++) {
  if(i%2 === 0) {
    mainContentValuesHeadings.push(mainContentValues[i]);
  }
  else {
    mainContentValuesContent.push(mainContentValues[i]);
  }
}

for (i = 0; i < mainContentValuesHeadings.length; i++) {
  let h4 = document.querySelectorAll('h4');
  let p = document.querySelectorAll('p');
  h4[i].innerHTML = mainContentValuesHeadings[i];
  p[i].innerHTML = mainContentValuesContent[i];
}

// Add Event Listener to button to change page background color
let startButton = document.querySelector('button');

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const body = document.querySelector('body');

startButton.addEventListener('click', function () {
    body.style.background = getRandomColor();
});

let buttonText = ["Woah!","Cool!","Get Started","Hello!","Click here!","Click again!"]

startButton.addEventListener('click', () => {
  startButton.innerHTML = buttonText[Math.floor(Math.random() * 6)];
})






