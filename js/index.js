//event 1

let funBusH1 = document.querySelector('.logo-heading');
let funner = function(e) {
    e.stopPropagation();
    if (e.target.innerHTML === 'Fun Bus') {
        e.target.innerHTML = 'The Funnest Bus!'
    }
    else {
        e.target.innerHTML = 'Fun Bus';
    }
}
funBusH1.addEventListener('click', funner);

//event 2

let busImage = document.querySelector('.intro img');
let addBorder = function(e) {
    if (e.target.style.borderBottom === '') {
        e.target.style.borderBottom = '2px dashed #C0C0C0'; 
    }
    else {
        e.target.style.borderBottom = '';
    }
}
busImage.addEventListener('mouseenter', addBorder);

//event 3

let headers = document.querySelectorAll('h2');
let changeToBlue = function(e) {
    if (e.target.style.color === '') {
        e.target.style.color = 'blue';
    }
    else {
        e.target.style.color = '';
    }
}
headers.forEach(function(item) {
    item.addEventListener('copy', changeToBlue
)});

//event 4

let adventureJpg = document.querySelector('.content-section img');
let disappear = function(e) {
    if (e.target.style.display === '') {
        e.target.style.display = 'none';
    }
    else {
        e.target.style.display = '';
    }
}
adventureJpg.addEventListener('mouseup', disappear)

//event 5

let inverse = document.querySelector('.inverse-content');
let inverseInverse = function(e) {
    if (e.target.style.flexDirection === '') {
        e.target.style.flexDirection = 'row-reverse';
    }
    else {
        e.target.style.flexDirection = '';
    }
}
inverse.addEventListener('contextmenu', inverseInverse);

//event 6

let funJpg = document.querySelector('.inverse-content img');
let addFullBorder = function(e) {
    if (e.target.style.border === '') {
        e.target.style.border = '2px dashed #C0C0C0'; 
    }
    else {
        e.target.style.border = '';
    }
}
funJpg.addEventListener('drag', addFullBorder);

//event 7

let destinationJpg = document.querySelector('.content-destination img');
let switchImg = function(e) {
    destinationJpg.src = 'img/fun-bus.jpg';
}
window.addEventListener('resize', switchImg);

//event 8

let loadedAlert = function() {
    alert('Are you ready for the FUN BUS!??!?!');
}
busImage.addEventListener('load', loadedAlert);

//event 9

let navContainer = document.querySelector('.nav-container');
let changeBackground = function() {
    navContainer.parentNode.style.background = 'powderblue';
}
window.addEventListener('scroll', changeBackground);

//event 10

let footerP2 = document.createElement('p');
footerP2.innerHTML = 'All rights reserved!';
let addFooterText = function () {
    document.querySelector('footer').prepend(footerP2);
}
window.addEventListener('beforeprint', addFooterText)

//adding prevent default to nav links

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function (item) {
    item.addEventListener("click", function(e){
        e.preventDefault()
    })
});

//nesting similar event for header and added stopPropagation to funner function under first event

let changeToBrownBackground = function (e) {
    e.target.parentNode.style.background = '#FFEBCD';
}
navContainer.addEventListener('click', changeToBrownBackground);

