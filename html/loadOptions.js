let keyWord = '';

// должно из базы подгружаться
let options = [
    {value:"CSS", label:"CSS"},
    {value:"C#", label:"C#"},
    {value:"C++", label:"C++"},
    {value:"Python", label:"Python"},
    {value:"JavaScript", label:"JavaScript"},
    {value:"SQL", label:"SQL"},
    {value:"Docker", label:"Docker"},
    {value:"Unity", label:"Unity"},
    {value:"Design", label:"Design"},
    {value:"Оратор", label:"Оратор"},
    {value:"HTML", label:"HTML"}
];

function searching(value) {
    keyWord = value;
    loadOptions();
};

function loadOptions() {
    let e = document.querySelector('#selectedCategories #optionsContainer');

    e.innerHTML = '';

    let filterWord = keyWord == '' ? options:options.filter((option) => 
        option.label.trim().toLowerCase().startsWith(keyWord.trim().toLowerCase()));

   filterWord.forEach((option) => {
        let el = document.createElement('div');
        el.classList.add("option");
        el.innerHTML = option.label;

        el.addEventListener('click', () => {
            document.querySelector('#selectedCategories input').value = '';
        })

        e.appendChild(el);
    });

};

loadOptions();

// показывает список опций при клике на поиск
document.getElementById('selectedCategories').addEventListener('click', function () {
    document.getElementById('optionsContainer').style.display = 'block';
});

// добавление опций в строку поиска
document.getElementById('optionsContainer').addEventListener('click', function (event) {
    if (event.target.classList.contains('option')) {
        const selectedCategories = document.getElementById('selectedCategories');
        const option = event.target;
        const categoryDiv = document.createElement('div');

        categoryDiv.classList.add('category');
        categoryDiv.textContent = option.textContent;

        categoryDiv.addEventListener('click', function () {
            this.remove();
            option.style.display = 'block'; 
        });

        selectedCategories.appendChild(categoryDiv);
        option.style.display = 'none'; 
    }
});

// скрывает список опций при клике вне его
document.addEventListener('click', function (event) {
    if (!event.target.closest('.custom-select')) {
        document.getElementById('optionsContainer').style.display = 'none';
    }
});