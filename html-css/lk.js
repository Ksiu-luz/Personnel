document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('sideMenu').classList.toggle('open');
});
document.getElementById('menuClose').addEventListener('click', function () {
    document.getElementById('sideMenu').classList.toggle('open');
});

// это для мобилок
document.addEventListener('DOMContentLoaded', function () {
    var sideMenu = document.getElementById('sideMenu');
    var startX, endX;

    document.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', function (e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (endX - startX > 50) { // Если свайп вправо
            sideMenu.classList.add('open');
        } else if (startX - endX > 50) { // Если свайп влево
            sideMenu.classList.remove('open');
        }
    }
});

const contact = document.getElementById('contact');
let contactClick = function() {
    window.location.href='https://telegram.me/andrey_hov';
}
contact.addEventListener('click', contactClick);