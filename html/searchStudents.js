var users = [
  {
    userName: 'Ингиборга Дапкунайте',
    group: 'ФТ-203',
    skills: ['HTML', 'CSS'],
    personalInfo: 'Я интроверт, и немного стеснительный, так что если вы хотите устраивать еженедельные созвоны по проекту, будьте готовы, что я не включу камеру.',
    statusImgSrc: 'images/status/status2.svg',
    statusAltText: 'Не ищет команду'
  },
  {
    userName: 'Иван Иванов',
    group: 'ФТ-203',
    skills: ['SQL', 'C#'],
    personalInfo: 'Я интроверт',
    statusImgSrc: 'images/status/status1.svg',
    statusAltText: 'Ищет команду'
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

function loadUsers(x) {
  let e = document.querySelector('.results');

  e.innerHTML = '';

  x.forEach((user) => {
      var userName = user.userName;
      var group = user.group;
      var skills = user.skills;
      var personalInfo = user.personalInfo;
      var statusImgSrc =user.statusImgSrc;
      var statusAltText = user.statusAltText;
  
      var worksheet = document.createElement('section');
      worksheet.className = 'worksheet';
  
      worksheet.innerHTML = `
        <section onclick="window.location.href = 'login.js'" class="profile-info">
          <div class="block">
            <img src="images/avatar.jpg" alt="Фото" class="profile-img">
            <article class="user">
              <div class="info">
                <div class="user-info">
                  <h1>${userName}</h1>
                  <p class="group">${group}</p>
                  <div class="skills">
                    ${skills.map(skill => `<div class="skill">${skill}</div>`).join('')}
                  </div>
                </div>
                <p class="personal">${personalInfo}</p>
              </div>
            </article>
          </div>
          <img src="${statusImgSrc}" alt="${statusAltText}" class="status-img" title="${statusAltText}">
        </section>
      `;

        e.appendChild(worksheet);
    });

};

loadUsers(users);

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.search');
    var button = form.querySelector('.search-button');
  
    button.addEventListener('click', function(event) {
      event.preventDefault(); 
  
      var inp = document.querySelector('#selectedCategories input').value;
      var skillBlocks = document.querySelectorAll('.category');
      var skillsSearch = [];

      
        skillBlocks.forEach((block) => {
          skillsSearch.push(block.textContent);
        });

        var usersToShow = [];
        users.forEach((user) =>{
          if (skillsSearch.some(skill => user.skills.includes(skill))) {
            usersToShow.push(user);
          }
        });

        loadUsers(usersToShow);
      
    });
  });