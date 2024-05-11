var users = [
    {
        userName: 'Ингиборга Дапкунайте',
        tg: 'hello123',
        group: 'ФТ-203',
        skills: ['HTML', 'CSS'],
        personalInfo: 'Я интроверт, и немного стеснительный, так что если вы хотите устраивать еженедельные созвоны по проекту, будьте готовы, что я не включу камеру.',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду',
        work_experience: ['Тест-инженер', 'Разработчик'],
        projects: [
            {
            project_name: 'Сайт для подбора',
            role: 'Тестировщик',
            description: 'Всем привет!',
            },
            {
                project_name: 'Сайт',
                role: 'Разраб',
                description: 'Всем привет, эх!',
            },]
    },
    {
        userName: 'Иван Иванов',
        tg: 'hello456',
        group: 'ФТ-203',
        skills: ['SQL', 'C#'],
        personalInfo: 'Я интроверт',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Ищет команду',
        work_experience: ['Тестировщик', 'Кто-то еще'],
        projects: [{
            project_name: 'Сайт для подбора тоже',
            role: 'Разработчик',
            description: 'Всем привет, меня зовут так!',
        }
        ]
    },
    {
        userName: 'Петр Петров',
        group: 'ФТ-204',
        skills: ['C#', 'CSS'],
        personalInfo: 'Люблю прогу',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду'
    },
    {
        userName: 'Биба Биба',
        group: 'ФТ-201',
        skills: ['JavaScript', 'SQL'],
        personalInfo: 'Всем привет!',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Ищет команду'
    },
    {
        userName: 'Боба Боба',
        group: 'ФТ-202',
        skills: ['C#', 'Python'],
        personalInfo: 'Опа',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду'
    }
];

let tg = localStorage.getItem('tg');
user = users.filter(user =>
    (user.tg === tg)
)[0];
document.getElementById("user_name").innerHTML = user.userName;
console.log(user);


document.getElementById("tg").innerHTML = `Телеграм: ${user.tg}`;
document.getElementById("git").innerHTML = `GitHub: ${user.git}`;
document.getElementById("o_sebe").innerHTML = user.personalInfo;

var ul = document.getElementById("navyki");
for (const skill of user.skills) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(skill));
    ul.appendChild(li);
}

var ul = document.getElementById("opyt");
for (const work of user.work_experience) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(work));
    ul.appendChild(li);
};

const contact = document.getElementById('contact');
let contactClick = function() {
    window.location.href=`https://telegram.me/${tg}`;
}
contact.addEventListener('click', contactClick);


let projects = document.getElementById('projects');
projects.innerHTML = '';
for (const p of user.projects) {
    var proj = document.createElement('div');
    proj.className = 'proj';

    proj.innerHTML = `
    <h2 id="proj-name">${p.project_name}</h2>
    <span id="proj-role" class="proj-role">${p.role}</span>
    <span id="proj-descripton" class="proj-descripton">${p.description}</span>
    <button class="proj-button">посмотреть</button>
`;

    projects.appendChild(proj);
}