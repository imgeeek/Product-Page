const colors = document.querySelectorAll('.colors span') ;
const image = document.querySelector('.left-column img') ;
const input = document.querySelector('.right-column .colors .quantity input');
const price = document.querySelector('.right-column .price') ;

    input.addEventListener('change',()=> {
        price.textContent = `AUD ${input.value * 50}` ;
    }) ;
colors[0].addEventListener('click',()=>{
  image.src="darkblue.png";
});
colors[1].addEventListener('click',()=>{
  image.src="green.png";
});
colors[2].addEventListener('click',()=>{
  image.src="purple.png";
});
colors[3].addEventListener('click',()=>{
  image.src="black.png";
});
