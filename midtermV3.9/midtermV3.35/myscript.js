var clicks = 1;
var cardBacks = [1, 2, 3, 4, 5];
var canflip = true;
var killscroll = null;
var is_falling = false;
var is_transitioning = false;
var is_playing = false;
document.addEventListener('DOMContentLoaded', function () {
    
    //loading();
    //flip_coin();
    //setInterval(flip_coin, 800);

    var modal = document.getElementsByClassName("modal");
    var Bannerimg = document.getElementById("banner_img");
    var modalImg = document.getElementById("img-modal");
    var cards = document.querySelectorAll('.card');
    var menuButton = document.getElementById("showmenu");
    var content_images = document.getElementsByClassName("enlarge");
    menuButton.onclick = showMenu;
    var stick = document.getElementById("stick");
    var end = document.getElementById("endpoint").offsetTop;
    var articles = document.getElementsByClassName("article");
    var birds = document.getElementsByClassName("bird");
    for(let b =0;b<birds.length;b++){
        birds[b].style.right = (articles[b].offsetWidth / 2 - 270 - screen.width/100) + "px";
        birds[b].style.top = (articles[b].offsetHeight - 930 - screen.height/ 100) + "px";
    }

    for(let i =0;i<articles.length;i++){
        articles[i].onmouseenter = entered;
        
    }
    $(window).on('scroll',function(){
        if(is_falling === false){
            is_falling = true;
            $('.maple').removeClass("hidden");
            $('.maple1').removeClass("hidden");
            clearTimeout(killscroll);
            killscroll = setTimeout(function(){
            $(".maple").addClass("fall");
            $('.maple1').addClass("fall");
            setTimeout(function(){
                $(".maple").addClass("hidden");
                $('.maple1').addClass("hidden");
                is_falling = false;
            },2000);
            }, 1000);
            $(".maple").removeClass("fall");
            $('.maple1').removeClass("fall");
           
        }
        
    });

    var animLi = document.getElementsByClassName("animateLi");
    for(let i =0;i<animLi.length;i++){
        animLi[i].id = i;
        animLi[i].onclick = (function(i) {
            return function() {
                var Menumodal = document.getElementById("Menumodal");
                Menumodal.style.display = "none";
                document.documentElement.classList.remove("modal-open");
    
                var targetElement = document.getElementById("article_" + (i + 1));  
            
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            };
        })(i);

    }
   
    
    
    window.addEventListener("scroll", () => {
        if (window.scrollY >= end - stick.offsetHeight) {
            stick.style.position = "absolute";
            stick.style.top = `${end - stick.offsetHeight + 55}px`;
        } else if (window.scrollY > 0) {
            stick.style.position = "fixed";
            stick.style.top = "55px";
        } else {
            stick.style.position = "absolute";
            stick.style.top = "55px";
        }
    });


/*
    [...cards].forEach((card) => {
        card.addEventListener('click', function () {

            var back = card.querySelector('.card__face--back');
            var ra = cardBacks;
            var randArr = shuffleArray(ra);
            if (back.innerText == "") {
                var num = randArr.shift();
                var newEle = document.createElement("a")
                newEle.href = "#" + num;
                newEle.innerHTML = num;
                back.appendChild(newEle);
                newEle.onclick = function () {
                    canflip = true;
                }
            }


            if (!card.classList.contains('is-flipped') && canflip) {
                card.classList.toggle('is-flipped');
                canflip = false;
            }


        });
    });*/

    /*
    $("#logo").on("click",float);
    */

    const logo = document.getElementById("logo");
    const bridge = document.getElementById("bridge");
    logo.addEventListener("mouseenter", () => {
        const logoWidth = logo.offsetWidth + 30;
        bridge.style.width = `${logoWidth}px`;
    });
    
    logo.addEventListener("mouseleave", () => {
        bridge.style.width = "0px";
    });

    Bannerimg.onclick = function () {
        modal_images(Bannerimg.src, "wide");
    }

    for (let i = 0; i < content_images.length; i++) {



        content_images[i].onclick = function () {
            modal_images(content_images[i].src, "slim");
        }
    }

    function modal_images(im, type) {
        modal[0].style.display = "block";
        modalImg.src = im;
    
        if (type == "slim") {
            modalImg.className = "modal-img-slim";
        } else if (type == "wide") {
            modalImg.className = "modal-img";
        }
        document.documentElement.classList.add("modal-open");
    }

    var exit = document.getElementsByClassName("close");
    for (let i = 0; i < exit.length; i++) {
        exit[i].onclick = function () {
            modal[i].style.display = "none";
            document.documentElement.classList.remove("modal-open");
        }
    }
    /*
    exit.onclick = function(){
        modal[0].style.display = "none";
        document.documentElement.classList.remove("modal-open");
        
    }*/
    $("#contact").click(function(){      
        bring("Contact");
    })

    $("blogs").click(function(){      
        bring("article_1");
    })
    var find_btn = document.getElementsByClassName("find");
    var topic = document.getElementsByClassName("title");
    for(let i =0;i<find_btn.length;i++){
        find_btn[i].href = "https://www.google.com/search?q=" + String(topic[i].innerText);
    }
    var img_btn = document.getElementsByClassName("image");
    
    for(let i =0;i<find_btn.length;i++){
        img_btn[i].onclick = function () {
            modal_images(content_images[i].src, "slim");
        }
    }
});

function bring(location){
    var target = document.getElementById(location);
    if(target){
        target.scrollIntoView({ behavior: 'smooth' });
    }
}


function showMenu() {
    var menuModal = document.getElementById("Menumodal");
    menuModal.style.display = "block";
    document.documentElement.classList.add("modal-open");
}
function float(){
    if(is_playing == false){
        is_playing = true;
        $(".object").addClass("show");
        $(".object").addClass("travel");
        setTimeout(function(){
        $(".object").removeClass("show");
        $(".object").removeClass("travel");
        is_playing = false;
        }, 3000);
    }
    
}


/*
function shuffleArray(array) {
    var i = array.length;
    var j = 0;
    var temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
*/
/*
function enlargeimg(){
    img = document.getElementById("img1");
    img.style.transform= "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
}

function resetSize(){
    img = document.getElementById("img1");
    img.style.transform= "scale(1)";
    img.style.transition = "transform 0.25s ease";
}

function resizeimg(id){
    clicks = clicks + 1;
    if(clicks %2 == 0 && clicks != 0){
        img = document.getElementById(id);
        img.style.width = "150%";
        img.style.height = "auto";
        img.style.transition = "width 0.5s ease";
        te = document.getElementById("text");
        te.style.visibility = "hidden";
        te.style.display = "none";
    }
    else{
        img = document.getElementById(id);
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.transition = "width 0.5s ease";
        te = document.getElementById("text");
        te.style.visibility = "visible";
        te.style.display = "block"
    }
    
}*/

function loading(){
    document.documentElement.classList.add("modal-open");
    var loading = document.getElementById("loader");
    loading.classList.add("fade");
    setTimeout(function() {
        loading.classList.add("hidden");
        loading.style.zIndex = "-2000";
        document.documentElement.classList.remove("modal-open");
      }, 3000);
}

function flip_coin(){
    var coin = document.getElementById("coin-inner");
    if(coin.classList.contains("is_flipped_2")){
        coin.classList.remove("is_flipped_2");
        coin.classList.add("is_flipped");
    }else{
        coin.classList.add("is_flipped_2");
        coin.classList.remove("is_flipped");
    }
}

function birdfly(){
    
    var birds = document.getElementsByClassName("bird");
    for(let i = 0;i<birds.length;i++){
        birds[i].classList.add("fly");
    }
}

function entered(){
    
    var articles = document.getElementsByClassName("article");
    var birds = document.getElementsByClassName("bird");
    for(let i = 0;i<birds.length;i++){
        if(birds[i].classList.contains("fly")){
            birds[i].classList.remove("fly");
        }
        
    }
    
    for(let i =0;i<articles.length;i++){
            articles[i].onmouseleave = birdfly;
    }
    

}

function fall(){
    var maple = document.getElementsByClassName("maple");
    for(let i=0;i<maple.length;i++){
        maple[i].classList.add("fall")
    }
}

