$(document).ready(function(){
    window.addEventListener('scroll', function(){
        if(this.scrollY > document.documentElement.clientHeight * 0.1){
            document.getElementById('header').classList.add('orange-header');
            for(let i = 0; i < document.getElementsByName('header-item').length; i++){
                document.getElementsByName('header-item')[i].classList.remove('trans-nav-item');
            }
            
        }
        else{
            document.getElementById('header').classList.remove('orange-header');
            for(let i = 0; i < document.getElementsByName('header-item').length; i++){
                document.getElementsByName('header-item')[i].classList.add('trans-nav-item');
            }
        }
    })

    let burgerButton = document.getElementById('burger-button');
    let burgerWrapper = document.getElementById('burger-wrapper');
    burgerButton.addEventListener('click', function(){
        let burgerIsOpen;
        for(let i = 0; i < burgerWrapper.classList.length; i++){
            if(burgerWrapper.classList[i] == "ds-none"){
                burgerIsOpen = false;
                break;
            }
            else{
                burgerIsOpen = true;
            }
        }
        if(burgerIsOpen == false){
            burgerWrapper.classList.remove('ds-none');
            burgerButton.setAttribute('src', 'assets/images/close.png');
        }
        else{
            burgerWrapper.classList.add('ds-none');
            burgerButton.setAttribute('src', 'assets/images/menu.png');
        }
    })

    $('.about-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true
    })

    let statValueArr = document.querySelectorAll('.stat-value');
    let statCoord = document.querySelector('#statistics');
    window.addEventListener('scroll', function(){
        
        if (statCoord.offsetTop < this.scrollY + document.documentElement.clientHeight * 0.9) {
            
            for (let i = 0; i < statValueArr.length; i++) {
                statValueArr[i].innerHTML = statValueArr[i].getAttribute('final-value');
            }
        }
    })

    $('.scnd-about-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        pauseOnDotsHover:true,
        responsive: [
            {
              breakpoint: 1741.78,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 978.78,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    })

    let courseNavButtons = document.querySelectorAll('.courses-nav-item');
    let courseContOptions = document.querySelectorAll('.content-option');
    
    for(let i = 0; i < courseNavButtons.length; i++){
        
        courseNavButtons[i].addEventListener('click', function(e){
            let target = e.target;
            for(let i = 0; i < courseNavButtons.length; i++){
                for(let j = 0; j < courseNavButtons[i].classList.length; j++){
                    if(courseNavButtons[i].classList[j] == 'active-nav-item'){
                        courseNavButtons[i].classList.remove('active-nav-item');
                    }
                }
            }
            target.classList.add('active-nav-item')
            for(let i = 0; i < courseContOptions.length; i++){
                for(let j = 0; j < courseContOptions[i].classList.length; j++){
                    if(courseContOptions[i].classList[j] != 'ds-none'){
                        courseContOptions[i].classList.add('ds-none');
                    }
                }
            }
            document.querySelector('#' + target.id + "-cont").classList.remove('ds-none');
        })
    }

    let courseCostValueArr = document.querySelectorAll('.course-price');
    let courseCostCoord = document.querySelector('#courses');

    window.addEventListener('scroll', function(){
        if (courseCostCoord.offsetTop < this.scrollY + document.documentElement.clientHeight * 0.4) {
            for (let i = 0; i < courseCostValueArr.length; i++) {
                courseCostValueArr[i].innerHTML = courseCostValueArr[i].getAttribute('final-value');
            }
        }
    })

    $('.feedback-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnDotsHover:true,
        responsive: [
            {
              breakpoint: 1750.78,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 724.78,
                settings: {
                  slidesToShow: 1
                }
            }
        ]
    })

    $('.club-left-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true
    })
    $('.mobile-club-left-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true
    })

    $('.club-right-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true
    })
    $('.mobile-club-right-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnDotsHover:true
    })

    let questionArr = document.querySelectorAll('.faq-question-wrapper');
    let answerArr = document.querySelectorAll('.faq-answer-wrapper');
    let imageArr = document.querySelectorAll('.faq-image');
    for (let i = 0; i < questionArr.length; i++) {
        questionArr[i].addEventListener('click', function (e) {
            let answerIsVisible = true;
            let target = e.target;
            let answerTarget = answerArr[i];
            let imageTarget = imageArr[i];
            
            console.log(target, answerTarget, imageTarget, answerIsVisible);
            for(let j = 0; j < answerTarget.classList.length; j++){
                if(answerTarget.classList[j] == "ds-none"){
                    answerIsVisible = false;
                }
            }
            if(answerIsVisible == true){
                for(let j = 0; j < questionArr.length; j++){
                    answerArr[j].classList.add('ds-none');
                    questionArr[j].classList.remove('active-question');
                    imageArr[j].setAttribute('src', "assets/images/arrow-down.png");
                }
            }
            else{
                for(let j = 0; j < questionArr.length; j++){
                    answerArr[j].classList.add('ds-none');
                    questionArr[j].classList.remove('active-question');
                    imageArr[j].setAttribute('src', "assets/images/arrow-down.png");
                }
                questionArr[i].classList.add('active-question');
                answerTarget.classList.remove('ds-none');
                imageTarget.setAttribute('src', "assets/images/up-arrow.png");
            }
        })
    }
})