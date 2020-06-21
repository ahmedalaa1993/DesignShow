const navbtn = document.getElementById('nav-toggle'),
    navBack = document.querySelector('#navback') ,
    settingIcon = document.querySelector('.setting-icon')
    scrollToTOp = $('.scrolltotop')  ;
    


    // check if there's local storage color changing
    let mainColor = localStorage.getItem('color-option');
    let mainColor2 = localStorage.getItem('color-option2');

    if (mainColor !== null){
        // add color from local storage 
        document.documentElement.style.setProperty('--main-color-dark',mainColor)
        document.documentElement.style.setProperty('--main-color-light',mainColor2)
      
         // --remove active class from elemnts
         document.querySelectorAll('.colors-list li').forEach(element => {
            element.classList.remove('active-color')
            //add active class to active color element
            element.classList.add('active-color')
        });


    }
   

// navigation bar
navbtn.addEventListener('click', function() {

    navBack.classList.toggle('open');
    this.classList.toggle('open');
    document.querySelector('.navbar-navi').classList.toggle('open')
    console.log('hh')
})



// show intro circle
$(document).ready(function() {
    $('.heading-circle-sec').fadeIn(2000);
    
    setTimeout(() => {
        // fadIn circle 
        $('#intro').fadeIn(2000);
        $('.introheadingstyle').hide();
        setTimeout(() => {
            // fadIn logo            
                $('#logo-intro').show();
                $('.tlt').textillate({ in: { effect: 'fadeInUpBig' , delay: 90 } });                
                //fadi in btn 
                setTimeout(() => {
                    $('.intro-btn').show();
                    $('.intro-btn').addClass('animate__animated animate__zoomIn');
                }, 2200);
            }, 2000);          
        }, 8000);     
});



//   scrolling
$(window).scroll(function(){

    // button for scroll top 
    const scrollToTOp = $('.scrolltotop');

    if ($(window).scrollTop() >= 550){
        
        scrollToTOp.fadeIn(400)
    }else{
        scrollToTOp.fadeOut(400)

    }
});
scrollToTOp.click(function(){
    console.log('sad')
    $('html,body').animate({
        scrollTop : 0
    } , 1200);
});


//form search
document.querySelector('.search-icon').onclick = function(e) {
    e.preventDefault();
    document.querySelector('.form-search').classList.toggle('open');
}


//slider in work page by plugin owl-carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    })
});




//set array for project
localStorage.setItem("projects", JSON.stringify([{
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/homepage-template.jpg",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/bootstrap-starter-template-492x492.jpg",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    },
    {
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/agency-template.jpg",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/magazine-template.jpg",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/business-template.jpg",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/restaurant-template.jpg",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    }, {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/hotel-template.jpg",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://colorlib.com/wp/wp-content/uploads/sites/2/menztailor-free-template-388x306.jpg",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    }, {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9c4AIwXXINgJUMS39tddg92pKz-1-DePZ-x77ZQgneqWKHhpS&usqp=CAU",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    }
]));

//convert string data to array
var projects = JSON.parse(localStorage.getItem("projects"))
getProjects()

//get projects data
function getProjects() {

    var listProjects = '';
    for (let i of projects) {
        listProjects += `
        <div class="col-md-4 p-4 projectBox">
        <div class="card shadow h-100">
            <img src="${i.imageURL}" class="w-100 border-bottom border-light h-75" alt="">
            <div class="p-3">
                <h4>${i.projectTitle}</h4>
                <p>${i.date}</p>
            </div>
            <div class="p-3 d-flex justify-content-around border-top">
                <div class="">
                    <i class="far fa-eye"></i>
                    <span>${i.views}</span>
                </div class="">
                <div class="">   
                    <a href="#" class="text-decoration-none"><i class="fas fa-star text-warning"></i></a>
                    <span>${i.rating}</span>
                </div class="">
                <div class="">
                    <a href="#" class="text-decoration-none"><i class="fas fa-heart text-danger"></i></a>
                    <span id="projectsLikes">${i.likes}</span>
                </div class="">
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('projects-cards').innerHTML += listProjects 
}


// setting box
settingIcon.onclick= function(){
    document.querySelector('.setting-box').classList.toggle('open-setting');
    document.querySelector('.setting-icon i').classList.toggle('fa-spin');
    document.querySelector('.upload-icon').classList.toggle('d-none');
}

const colorLi = document.querySelectorAll('.colors-list li');
colorLi.forEach(li => {
    li.addEventListener('click', e => {
        //set color in root
        document.documentElement.style.setProperty('--main-color-dark',e.target.dataset.color)
        document.documentElement.style.setProperty('--main-color-light',e.target.dataset.color2)
        //set colors in local storage 
        localStorage.setItem('color-option',e.target.dataset.color)
        localStorage.setItem('color-option2',e.target.dataset.color2)
        // --remove active class from elemnts
        e.target.parentElement.querySelectorAll('.active-color').forEach(element => {
            element.classList.remove('active-color')
        });
        //add active class to active color element
        e.target.classList.add('active-color')


    })
});





