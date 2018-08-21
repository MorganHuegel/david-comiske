'use strict';

const imageOne = document.getElementById('slide img-one');
const imageTwo = document.getElementById('slide img-two');
const imageThree = document.getElementById('slide img-three');
const slideshowContainer = document.getElementsByClassName('photos container')[0];
const leftButton = document.getElementsByClassName('slideshow left')[0];
const rightButton = document.getElementsByClassName('slideshow right')[0];

const slideshowImages = [imageOne, imageTwo, imageThree];


let currentImageNum = 0;
let currentInterval;

const incrementCounter = function(){
  if(currentImageNum === slideshowImages.length - 1){ //At end of list
    currentImageNum = 0;
  } else {
    currentImageNum++; //goes to next picture
  }
};

const switchImages = function(fadeSpeed){
  $('input.slideshow').fadeOut(fadeSpeed);
  $(slideshowImages[currentImageNum]).fadeOut(fadeSpeed, function(){
    incrementCounter();
    $('input.slideshow').fadeIn(fadeSpeed);
    $(slideshowImages[currentImageNum]).fadeIn(fadeSpeed);
  });
};

const startInterval = function(){
  currentInterval = window.setInterval(function(){
    switchImages(500);
  }, 5000);
};


startInterval(); //Starts the interval when page loads



//stops slideshow when mouse hovers over container
slideshowContainer.onmouseenter = function(){
  window.clearInterval(currentInterval);
};

//restarts slideshow when mouse leaves container
slideshowContainer.onmouseleave = function(){
  startInterval();
};

//goes back one image when click on left arrow (Decrements Current image number)
leftButton.onclick = function(){
  $(slideshowImages[currentImageNum]).fadeOut(100, function(){
    if(currentImageNum === 0){
      currentImageNum = slideshowImages.length - 1;
    } else {
      currentImageNum--;
    }
    $(slideshowImages[currentImageNum]).fadeIn(100);
  });
};

//goes forward one image when click on right arrow
rightButton.onclick = function(){
  switchImages(100);
};

