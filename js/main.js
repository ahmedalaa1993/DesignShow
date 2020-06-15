const navbtn = document.getElementById('nav-toggle'),
      navBack = document.querySelector('#navback') 
      
       ;










// navigation bar
navbtn.addEventListener('click',function(){

    
    navBack.classList.toggle('open');
    this.classList.toggle('open');
    document.querySelector('.navbar-navi').classList.toggle('open')
    console.log('hh')
})

// fadIn circle 


$( document).ready( function(){
    console.log('heloo')
    $('.heading-circle').fadeIn(1800);}); 



//form search
document.querySelector('.search-icon').onclick = function(e){
    e.preventDefault();
    document.querySelector('.form-search').classList.toggle('open');
}

// fadIn circle 


$( document).ready( function(){
    console.log('heloo')
    $('.heading-circle').fadeIn(1800);}); 

