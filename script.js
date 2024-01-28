const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const shareLbl = document.querySelector('#share-label');
const shareLblActive = document.querySelector('#share-label-active');

const shareIcon = document.querySelector('#share-icon');
const ShareIconActive = document.querySelector('#share-icon-active');

function showMobile (){
    container.classList.add('hide');
    wrapper.classList.remove('hide');
}

function hideMobile (){
    wrapper.classList.add('hide');
    container.classList.remove('hide');
}

function showHideDesktop (){
    if (wrapper.classList.contains('hide')){
        wrapper.classList.remove('hide');
        shareIcon.classList.remove('share-icon');
        shareIcon.classList.add('share-icon-active');
        shareLbl.classList.remove('share-label');
        shareLbl.classList.add('active__label');
    } else {
        wrapper.classList.add('hide');
        shareLbl.classList.add('share-label');
        shareIcon.classList.remove('share-icon-active');
        shareIcon.classList.add('share-icon');
        shareLbl.classList.remove('active__label');
        shareLbl.classList.add('share-label');
    }
}

function hideDesktop (event){
    if (!event.target.classList.contains('not')){
        wrapper.classList.add('hide');
    }
}

if (window.matchMedia("(min-width: 1024px)").matches) {
    shareLbl.addEventListener('click', showHideDesktop);
    document.body.addEventListener('click', hideDesktop);
} else {
    shareLbl.addEventListener('click', showMobile);
    shareLblActive.addEventListener('click', hideMobile);
}

window.onresize = function(){ location.reload();}