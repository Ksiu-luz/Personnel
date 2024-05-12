import { users } from "./users";


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