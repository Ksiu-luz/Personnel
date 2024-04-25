
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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.selected-categories .search-input').focus();
});

document.querySelector('.custom-select').addEventListener('click', function (event) {
    // Проверяем, что клик был не по .selected-categories и не по .search-button
    if (!event.target.closest('.selected-categories') && !event.target.closest('.search-button')) {
        const optionsContainer = document.querySelector('.options-container');
        // Переключаем видимость .options-container
        if (optionsContainer.style.display === 'none') {
            optionsContainer.style.display = 'block';
        } else {
            optionsContainer.style.display = 'none';
        }
    }
});

document.getElementById('selectedCategories').addEventListener('click', function () {
    document.getElementById('optionsContainer').style.display = 'block';
});

document.getElementById('optionsContainer').addEventListener('click', function (event) {
    if (event.target.classList.contains('option')) {
        const selectedCategories = document.getElementById('selectedCategories');
        const option = event.target;
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.textContent = option.textContent;
        categoryDiv.addEventListener('click', function () {
            this.remove();
            option.style.display = 'block'; // Показываем опцию в списке опций
        });
        selectedCategories.appendChild(categoryDiv);
        option.style.display = 'none'; // Скрываем выбранную опцию в списке опций
    }
});

// Скрываем список опций при клике вне его
window.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-select')) {
        document.getElementById('optionsContainer').style.display = 'none';
    }
});


const profile1 = document.getElementById('profile1');
let entranceClick = function() {
    window.location.href='lk2.html';
}
profile1.addEventListener('click', entranceClick);