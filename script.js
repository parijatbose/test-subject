document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        moveMascot(circle);
    });
});

function moveMascot(targetCircle) {
    const mascot = document.querySelector('.moving-mascot');

    // Calculate the target position
    const targetRect = targetCircle.getBoundingClientRect();
    const containerRect = document.querySelector('.container').getBoundingClientRect();

    // Calculate the mascot's new top and left positions relative to the container
    const targetTop = targetRect.top - containerRect.top;
    const targetLeft = targetRect.left - containerRect.left;

    // Update the mascot's position
    mascot.style.top = `${targetTop}px`;
    mascot.style.left = `${targetLeft}px`;
}

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
