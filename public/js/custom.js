//sticky navbar
let bodyScroll = document.querySelector('html,body');
let sticknav = document.querySelector('nav');
window.addEventListener('scroll' , function(){
    // console.log(sticknav);
    if(bodyScroll.scrollTop > 165){
        sticknav.style.display='block' ;
    }else{
        sticknav.style.display='none' ;
    }
  
});


let menuIcon = document.querySelector('.links .menu-icon');
let menu = document.querySelector('.header .menu');
let closeMenu = document.querySelector('.close-icon');
//open menu
menuIcon.addEventListener('click' , function(){
    //console.log(menu);
    menu.style.display= 'block';
});
//close menu
closeMenu.addEventListener('click' , function(){
    menu.style.display= 'none';
});
//start extra our-work
let extraImage = document.querySelectorAll('.extra');
let showMore = document.querySelector('.our-work .show-more');
let showLess = document.querySelector('.our-work .show-less');
let imageCount ;
//show extra image
showMore.addEventListener('click' , function(){
// console.log(showMore);
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display='block';
    }
    showMore.style.cssText = 'display:none';
    showLess.style.cssText = 'display:block; margin:2% auto;';
});

//hide extra Image 
showLess.addEventListener('click' , function(){
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display='none';
    }
    showMore.style.cssText = 'display:block; margin:2% auto; ';
    showLess.style.display = 'none';
})
//validation form
let subject = document.querySelector(".subject");
let email = document.querySelector(".email");
let textArea = document.querySelector(".text-area");

subject.addEventListener('blur' , function(){
     //console.log(this.value.length);
    if(this.value.length < 2 ){
        this.classList.add('border' , 'border-danger') ;
        this.classList.remove('border' , 'border-success') ;
        document.querySelector('.subject-helper').textContent = 'Please insert subject';
        document.querySelector('.subject-helper').classList.add('text-danger');
    }else{
        this.classList.add('border' , 'border-success') ;
        this.classList.remove('border' , 'border-danger') ;
        document.querySelector('.subject-helper').textContent = '';
    }
});

