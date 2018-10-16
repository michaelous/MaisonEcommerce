let sliderImages = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowLeft = document.querySelector("#arrow-left"),
  current = 0;

// reset
  function reset(){
    for(let i=0;i<sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
  };

// start Slide
  function startSlide(){
    reset();
    sliderImages[0].style.display = 'flex';
  };

// poprzedni Slide
  function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'flex';
    current--;
  };

// nastepny Slide
  function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'flex';
    current++;
  };


// lewy Arrow
  arrowLeft.addEventListener("click", function(){
    if(current == 0){
      current = 3;
    }
    slideLeft();
  });

// prawy Arrow
  arrowRight.addEventListener("click", function(){
    if(current == 2){
      current = -1;
    }
    slideRight();
  });


setInterval(function(){
  if(current == 2){
    current = -1;
  }
  slideRight();
}, 6000);
