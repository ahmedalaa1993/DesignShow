const navbtn = document.getElementById('nav-toggle'),
    navBack = document.querySelector('#navback');



// navigation bar
navbtn.addEventListener('click', function() {


    navBack.classList.toggle('open');
    this.classList.toggle('open');
    document.querySelector('.navbar-navi').classList.toggle('open')
    console.log('hh')
})




$(document).ready(function() {

    $('.heading-circle-sec').fadeIn(2000);


    setTimeout(() => {

        // fadIn circle 
        $('#intro').fadeIn(2000);


        setTimeout(() => {

            // fadIn logo            
            $('#logo-intro').show();
            $('.tlt').textillate({ in: { effect: 'fadeInUpBig', delay: 90 } });

            //fadi in btn 
            setTimeout(() => {
                $('.intro-btn').show();
                $('.intro-btn').addClass('animate__animated animate__zoomIn');

            }, 2200);

        }, 2000);

    }, 8000);






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
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9c4AIwXXINgJUMS39tddg92pKz-1-DePZ-x77ZQgneqWKHhpS&usqp=CAU",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBVIZx1SxmFMk1V33pmBHCxpuNMeVl7v0aAix7PHfHJLoo3FXl&usqp=CAU",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9c4AIwXXINgJUMS39tddg92pKz-1-DePZ-x77ZQgneqWKHhpS&usqp=CAU",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBVIZx1SxmFMk1V33pmBHCxpuNMeVl7v0aAix7PHfHJLoo3FXl&usqp=CAU",
        projectTitle: "title",
        date: "10/09/2020",
        views: 580,
        rating: 220,
        likes: 98
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9c4AIwXXINgJUMS39tddg92pKz-1-DePZ-x77ZQgneqWKHhpS&usqp=CAU",
        projectTitle: "title",
        date: "20/11/2019",
        views: 200,
        rating: 200,
        likes: 32
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBVIZx1SxmFMk1V33pmBHCxpuNMeVl7v0aAix7PHfHJLoo3FXl&usqp=CAU",
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
    },
    {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBVIZx1SxmFMk1V33pmBHCxpuNMeVl7v0aAix7PHfHJLoo3FXl&usqp=CAU",
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
        <div class="col-md-4 p-4 blogBox moreBox">
        <div class="card shadow">
            <img src="${i.imageURL}" class="w-100" alt="">
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