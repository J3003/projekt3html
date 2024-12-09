var slider = 1;

window.onload = function () {
    slideradd();
    sliderremove();
    slidercheck();
}


function slideradd() {
    slider += 1;
    slidercheck();
}

function sliderremove() {
    slider -= 1;
    slidercheck()

    if (slider < 1) {
        slider += 6;
        slidercheck();
        console.log('mindre end 1');
    }
}


function slidercheck() {
    var imageone = document.getElementById("imageone");
    var imagetwo = document.getElementById("imagetwo");
    var imagethree = document.getElementById("imagethree");
    var imagefour = document.getElementById("imagefour");
    var imagefive = document.getElementById("imagefive");
    var imagesix = document.getElementById("imagesix");

    var sliderbuttonone = document.getElementById('sliderbuttonone');
    var sliderbuttontwo = document.getElementById('sliderbuttontwo');
    var sliderbuttonthree = document.getElementById('sliderbuttonthree');
    var sliderbuttonfour = document.getElementById('sliderbuttonfour');
    var sliderbuttonfive = document.getElementById('sliderbuttonfive');
    var sliderbuttonsix = document.getElementById('sliderbuttonsix');



    if (slider == 1) {
        imageone.classList.add('imageactive');
        imageone.classList.remove('imageinactive');

        sliderbuttonone.classList.add('sliderbutton__active')
    } else {
        imageone.classList.add('imageinactive');
        imageone.classList.remove('imageactive');

        sliderbuttonone.classList.remove('sliderbutton__active')
    }

    if (slider == 2) {
        imagetwo.classList.add('imageactive');
        imagetwo.classList.remove('imageinactive');

        sliderbuttontwo.classList.add('sliderbutton__active')
    } else {
        imagetwo.classList.add('imageinactive');
        imagetwo.classList.remove('imageactive');

        sliderbuttontwo.classList.remove('sliderbutton__active')
    }

    if (slider == 3) {
        imagethree.classList.add('imageactive');
        imagethree.classList.remove('imageinactive');

        sliderbuttonthree.classList.add('sliderbutton__active')
    } else {
        imagethree.classList.add('imageinactive');
        imagethree.classList.remove('imageactive');

        sliderbuttonthree.classList.remove('sliderbutton__active')
    }

    if (slider == 4) {
        imagefour.classList.add('imageactive');
        imagefour.classList.remove('imageinactive');

        sliderbuttonfour.classList.add('sliderbutton__active')
    } else {
        imagefour.classList.add('imageinactive');
        imagefour.classList.remove('imageactive');

        sliderbuttonfour.classList.remove('sliderbutton__active')
    }

    if (slider == 5) {
        imagefive.classList.add('imageactive');
        imagefive.classList.remove('imageinactive');

        sliderbuttonfive.classList.add('sliderbutton__active')
    } else {
        imagefive.classList.add('imageinactive');
        imagefive.classList.remove('imageactive');

        sliderbuttonfive.classList.remove('sliderbutton__active')
    }

    if (slider == 6) {
        console.log(6);
        imagesix.classList.add('imageactive');
        imagesix.classList.remove('imageinactive');

        sliderbuttonsix.classList.add('sliderbutton__active')
    } else {
        imagesix.classList.add('imageinactive');
        imagesix.classList.remove('imageactive');

        sliderbuttonsix.classList.remove('sliderbutton__active')
    }

    if (slider == 7) {
        slider = 1;
        console.log(7);
        slidercheck();
    }

}