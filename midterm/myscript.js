var clicks = 1;
var cardBacks = [1,2,3,4,5];


document.addEventListener('DOMContentLoaded', function(){
    var modal = document.getElementById("Bannermodal");
    var Bannerimg = document.getElementById("banner_img");
    var modalImg = document.getElementById("img-modal");
    var cards = document.querySelectorAll('.card');

    [...cards].forEach((card) => {
        card.addEventListener('click', function () {
            
            var back = card.querySelector('.card__face--back');
            var randArr = shuffleArray(cardBacks);
            if(back.innerHTML == ""){
                var num = randArr.shift();
                back.innerHTML = '<a href="#' + num + '">' + num + "</a>";
            }
            
           
            if(!card.classList.contains('is-flipped')){
                card.classList.toggle('is-flipped');
            }
            
            
        });
    });

    
    
    Bannerimg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        document.documentElement.classList.add("modal-open");
     
    }
    
    
    
    var exit = document.getElementsByClassName("close")[0];
    exit.onclick = function(){
        modal.style.display = "none";
        document.documentElement.classList.remove("modal-open");
        
    }
    
});

function shuffleArray(array){
    var i = array.length;
    var j = 0;
    var temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}


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
    
}