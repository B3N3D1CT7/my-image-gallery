const images = document.querySelectorAll('img'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next'),
dots = document.querySelectorAll('.dot'),
startBtn = document.querySelector('.start'),
stopBtn = document.querySelector('.stop');

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[n].style.display = 'block';
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = `rgba(255, 255, 255, .5)`;
  }
  dots[n].style.backgroundColor = ` rgba(255, 255, 255, .8)`
}

nextBtn.addEventListener('click', () => {
  slideIndex += 1;
  if (slideIndex > 5) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
})

prevBtn.addEventListener('click', () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = 5;
  }
  showSlides(slideIndex);
})

function currentSlide(n) {
  showSlides(n);
}

let myInterval;
startBtn.addEventListener('click', () => {
  myInterval = setInterval(() => {
  slideIndex += 1;
  if (slideIndex > 5) {
    slideIndex = 0
  }
  showSlides(slideIndex);
  }, 3000)
})

stopBtn.addEventListener('click', () => {
  clearInterval(myInterval);
})
