const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// My code

// Nav -----
const nav1 = document.querySelector("header nav a:nth-child(1)");
const nav2 = document.querySelector("header nav a:nth-child(2)");
const nav3 = document.querySelector("header nav a:nth-child(3)");
const nav4 = document.querySelector("header nav a:nth-child(4)");
const nav5 = document.querySelector("header nav a:nth-child(5)");
const nav6 = document.querySelector("header nav a:nth-child(6)");

nav1.textContent = siteContent["nav"]["nav-item-1"];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav6.textContent = siteContent["nav"]["nav-item-6"];

// cta ----
const ctah1 = document.querySelector(".cta-text h1");
const ctaImg = document.querySelector("#cta-img");
const ctaButton = document.querySelector(".cta-text button");

ctah1.textContent = siteContent["cta"]["h1"];
ctaImg.src = siteContent["cta"]["img-src"];
ctaButton.textContent = siteContent["cta"]["button"];

// top-content -----
const topFeaturesH4 = document.querySelector(".top-content h4");
const topFeaturesP = document.querySelector(".top-content p");
const aboutH4 = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
const aboutP = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);

topFeaturesH4.textContent = siteContent["main-content"]["features-h4"];
topFeaturesP.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];

// Accent Image ----
const middleImg = document.querySelector("#middle-img");

middleImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content ----
const bottomServicesH4 = document.querySelector(
  ".bottom-content .text-content h4"
);
const bottomServicesP = document.querySelector(
  ".bottom-content .text-content p"
);
const bottomProductH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
const bottomProductP = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
const bottomVisionH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
const bottomVisionP = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);

bottomServicesH4.textContent = siteContent["main-content"]["services-h4"];
bottomServicesP.textContent = siteContent["main-content"]["services-content"];

bottomProductH4.textContent = siteContent["main-content"]["product-h4"];
bottomProductP.textContent = siteContent["main-content"]["product-content"];

bottomVisionH4.textContent = siteContent["main-content"]["vision-h4"];
bottomVisionP.textContent = siteContent["main-content"]["vision-content"];

// contact ----
const contactH4 = document.querySelector(".contact h4");
const address = document.querySelector(".contact p");
const phoneNum = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");

contactH4.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phoneNum.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

// footer ---
const footerContent = document.querySelector("footer p");

footerContent.textContent = siteContent["footer"]["copyright"];

// Appending and Prepending nav
const navBar = document.querySelector("nav");
const appendI = document.createElement("a");
const prependI = document.createElement("a");

appendI.href = "#";
appendI.textContent = "Append";
prependI.href = "#";
prependI.textContent = "Prepend";

navBar.appendChild(appendI);
navBar.prepend(prependI);

// color green
Array.from(document.querySelectorAll("nav a")).forEach(item => {
  item.style.color = "green";
});
