const navbtn = document.getElementById('nav-toggle'),
    navBack = document.querySelector('#navback') ,
    form = document.getElementById('register-form') ,
    sing = document.getElementById('signup') ,
    username = document.querySelector('#username') ,
    email = document.querySelector('#email') ,
    password = document.querySelector('#password') ,
    password2 = document.querySelector('#password-confirm') ,
    scrollToTOp = $('.scrolltotop')  ;
    

   

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









// //get sign in form
// var signinFormContent = ` <i class="fas fa-times-circle fa-2x "></i>
// <div class="containerx">
//     <div class="signin-content">
//         <div class="signin-image">
//             <figure><img src="https://thumbs.dreamstime.com/b/dreamcatcher-against-background-colorful-splash-91495859.jpg" class="w-100" alt="sing up image"></figure>
//         </div>

//         <div class="signin-form">
//             <h2 class="form-title">Sign in</h2>
//             <form method="POST" class="register-form" id="login-form">
//                 <div class="form-group">
//                     <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
//                     <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
//                 </div>
//                 <div class="form-group">
//                     <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
//                     <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
//                 </div>
//                 <div class="form-group">
//                     <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
//                     <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
//                 </div>
//                 <div class="form-group form-button">
//                     <input type="submit" name="signin" id="signin" class="form-submit" value="Login" />
//                     <div class="social-login">
//                         <span class="social-label">Or Login with</span>
//                         <ul class="socials">
//                             <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook fab fa-facebook p-1"></i></a></li>
//                             <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter fab fa-twitter p-1"></i></a></li>
//                             <li><a href="#"><i class="display-flex-center zmdi zmdi-google fab fa-google p-1"></i></a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <p class="pt-2 text-center">Don't have account? <a href="./signup.html" class="text-decoration-none text-info">SingUp</a></p>
//             </form>
//         </div>
//     </div>
// </div>`
// $('#userIcon').on('click', function() {
//     $('.sign-in').html(signinFormContent).css({ "display": "block" })
//     $('.fa-times-circle').on("click", function() {
//         $('.sign-in').css({ "display": "none" })
//     })
// });
// $('.loginFromSignupPage').on('click', function() {
//     $('.sign-in').html(signinFormContent).css({ "display": "block" })
//     $('.fa-times-circle').on("click", function() {
//         $('.sign-in').css({ "display": "none" })
//     })
// });







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
