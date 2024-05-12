var users = [
    {
        userName: 'Денис Рыбчинский',
        tg: '@denzelll',
        group: 'ФТ-203',
        skills: ['Python', 'C#', 'Unity', 'JavaScript'],
        personalInfo: 'Я интроверт, и немного стеснительный, так что если вы хотите устраивать еженедельные созвоны по проекту, будьте готовы, что я не включу камеру.)',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду',
        work_experience: ['Тест-инженер', 'Разработчик'],
        projects: [
            {
                project_name: 'SuperCat',
                role: 'Тестировщик',
                description: 'Игра про нового супергероя - Суперкота. Ему придётся пройти через немало испытаний на пути к справедливости!',
            },
            {
                project_name: 'IThinking',
                role: 'C# Разработчик',
                description: 'Сайт на котором студенты Матмеха могут коллективно решать задачки',
            },]
    },
    {
        userName: 'Сергей Бурьянов',
        tg: '@serzhinho285',
        group: 'ФТ-203',
        skills: ['SQL', 'C#', 'Python', 'Docker', 'Unity'],
        personalInfo: 'Хотел бы попасть в амбициозную команду, желательно разработчиком. Но и другие роли готов попробовать. Имеют опыт деплоя проектов, также могу развернуть БД на кластере',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: ['Разработчик', 'SQL Разработчик'],
        projects: [{
            project_name: 'Сайт для подбора наряда на сегодня',
            role: 'SQL Разработчик',
            description: 'Пишете в программу все свои наряду, и вуа-ля! Каждый день вам будет предлагаться наряд, не такой как вчера или позавчера. А также можно назначить своё настроение на сегодня и тогда наряд будет выбран с учетом вашего расположения духа',
        },
            {
                project_name: 'SuperMarat',
                role: 'Разработчик',
                description: 'Пройди все уровни и докажи, что наш Марат не хуже Марио',
            }
        ]
    },
    {
        userName: 'Алиса Погонина',
        tg: '@ryzhaya_n_a_samokate',
        group: 'ФТ-204',
        skills: ['Design', 'CSS', 'HTML', 'JavaScript'],
        personalInfo: 'Хочу в дальнейшем быть фронтом или дизайнером, поэтому рассматриваю только фронтерские или дизайнерские предложения',
        statusImgSrc: 'images/status/status3.svg',
        statusAltText: 'В команде',
        work_experience: ['Front-Разработчик', 'Дизайнер'],
        projects: [
            {
                project_name: 'YourFoodHelper',
                role: 'Front-Разработчик',
                description: 'Сайт по подбору вкусных блюд из продуктов имеющихся у тебя в холодильнике',
            },
            {
                project_name: 'Ships Wars',
                role: 'Дизайнер',
                description: 'Интерактивный морской бой с доп фишками',
            },]
    },
    {
        userName: 'Захар Тильнитский',
        tg: '@zaharinini96',
        group: 'ФТ-201',
        skills: ['JavaScript', 'С#', 'Python'],
        personalInfo: 'Всем привет! Я Захар Тильнитский! Мне 20 лет. Я учусь в ФИИТ УрФУ. Хотел бы присоединиться к интересному проекту, достоточно сложному. Чтобы его можно было занести в портфолио. Готов заниматься всем, но больше всего нравится программировать)))',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Ищет команду',
        work_experience: ['Тест-инженер', 'Разработчик'],
        projects: [
            {
                project_name: 'One Bottle Water',
                role: 'Разработчик',
                description: 'Приложение, в котором можно отмечать и отслеживать количество выпитой за день воды, для поддержания нормы',
            },
            {
                project_name: 'Who is egg?',
                role: 'Тест-инженер',
                description: 'Игра-головоломка, в которой надо отгадать кто яйцо',
            },]
    },
    {
        userName: 'Дима Рощин',
        tg: '@mitka79857',
        group: 'ФТ-202',
        skills: ['Design', 'Python', 'Docker', 'Unity'],
        personalInfo: 'Я Дима Рощин. Люблю прогать на питоне, но хочу стать дизайнером. Также увлекаюсь пауерлифтингом и футболом. Люблю отдохнуть в весёлой компании за бокальчиком пенного :)',
        statusImgSrc: 'images/status/status3.svg',
        statusAltText: 'В команде',
        work_experience: ['Разработчик', 'Дизайнер'],
        projects: [
            {
                project_name: 'Сайт для строительной компании',
                role: 'Дизайнер',
                description: 'Знакомые попросили помочь с сайтом',
            },
            {
                project_name: 'Cars',
                role: 'Разработчик',
                description: '2D гонки с препятствиями и уровнями',
            },]
    },
    {
        userName: 'Андрей Воинычев',
        tg: '@andrey_voi',
        group: 'ФТ-103',
        skills: ['C#', 'Python'],
        personalInfo: 'Хочу получить опыт работы в команде. Больше всего привлекает разработка на питоне. Также знаю шарпы, но их люблю меньше. Закончил художественную школу, могу нарисовать дизайн',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: [],
        projects: []
    },
    {
        userName: 'Никита Дербенёв',
        tg: '@derbent_nickitych',
        group: 'ФТ-103',
        skills: ['C#', 'Оратор'],
        personalInfo: 'Привет! Меня интересует какой-нибудь проект связанный с вебом. За этот год в бэке я более менее разобрался, а за фронт вообще не шарю. То есть хочу быть фронтом, но задачи должны быть не сложными, чтобы я смог разобраться. Ну или чтобы был напарник, который бы мне если что подсказал',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: [],
        projects: []
    },
    {
        userName: 'Алексей Смирнов',
        tg: '@nikaraguauao',
        group: 'ФТ-103',
        skills: ['C#', 'C++'],
        personalInfo: 'Заканчиваю первый курс ФИИТа. Больше тяготею к разработке на C#. В школе немного учили плюсы, но их не очень помню. Но если надо вспомню))))',
        statusImgSrc: 'images/status/status3.svg',
        statusAltText: 'В команде',
        work_experience: [],
        projects: []
    },
    {
        userName: 'Семён Рыков',
        tg: '@semen_rykovvv',
        group: 'ФТ-103',
        skills: ['C#', 'Python'],
        personalInfo: 'Прежде чем согласится войти в какую-то команду, хочу встретиться с ней и пообщаться. Мне важно чтобы люди, с которыми я работаю были близки мне по духу. Имейте ввиду',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду',
        work_experience: [],
        projects: []
    },
    {
        userName: 'Семён Толкачев',
        tg: '@tolk_o4ok',
        group: 'ФТ-103',
        skills: ['Python'],
        personalInfo: 'Закончил 2 школу города Верхняя Пышма. Сейчас заканчиваю первый курс ФИИТа. Кажется я ошибся, я не хочу работать в IT, хип-хоп моё призвание! Если будут команды по хип-хопу, зовите',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду',
        work_experience: [],
        projects: []
    },
    {
        userName: 'Евгений Петров',
        tg: 'petrov__evg',
        group: 'ФТ-303',
        skills: ['C++', 'Оратор', 'SQL', 'Python'],
        personalInfo: 'Стажировался в Тиньке на питоне. Неплохо знаю плюсы. Также на стажировке приходилось работать с БД на PSQL. В целом хочу на бэк в крутой проект. Мб стартап какой-нибудь',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: ['Разработчик'],
        projects: [
            {
                project_name: 'Сайт для выборов',
                role: 'Разработчик',
                description: 'На сайте можно проводить выборы',
            },
            {
                project_name: 'Карта матмеха',
                role: 'Разработчик',
                description: 'Интерактивная карта с аудиториями матмеха, где пользователи могут отмечать, что аудитория занята',
            },]
    },
    {
        userName: 'Дмитрий Ловчев',
        tg: 'dmitrij_lov',
        group: 'ФТ-304',
        skills: ['HTML', 'CSS', 'JavaScript', 'Design', 'Python'],
        personalInfo: 'Работаю фронтедером в Контуре. Ищу себе команду для курса Веб-приложения, который на 3ем курсе. Другие проекты пока не интересуют',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: ['Тест-инженер', 'Front-Разработчик'],
        projects: [
            {
                project_name: 'MatmexDelishesTop',
                role: 'Тест-инженер',
                description: 'приложение с оценками и отзывами еды, продающейся на Матмехе в автоматах',
            },
            {
                project_name: 'MusicVibe',
                role: 'Front-Разработчик',
                description: 'Сайт в котором матмех выбирает любимые композиции, чтобы включать их в коредоре на переменах',
            },]
    },
    {
        userName: 'Руслан Вахрушев',
        tg: '@ruslan_vah',
        group: 'ФТ-303',
        skills: ['HTML', 'CSS', 'JavaScript', 'Docker', 'Оратор'],
        personalInfo: 'Люблю выступать, поэтому могу презентовать продукт. В целом больше про фронт, разве что чуть-чуть на питоне могу что-нибудь написать',
        statusImgSrc: 'images/status/status2.svg',
        statusAltText: 'Не ищет команду',
        work_experience: ['Front-Разработчик'],
        projects: [
            {
                project_name: 'LookConstructor',
                role: 'Front-Разработчик',
                description: 'Сайт, котором можно собирать вещи с разных интернет магазинов, и смотреть как они вместе будут смотреться',
            },
            {
                project_name: 'Speed taxi',
                role: 'Front-Разработчик',
                description: 'Приложение, которое анализирует быстроту подачи и цену поездки в разных службах такси и вызывает в наилучшей службе',
            },]
    },
    {
        userName: 'Георгий Спиридонов',
        tg: '@gossa_spiridonov',
        group: 'ФТ-403',
        skills: ['Design', 'Unity', 'C#', 'Оратор', 'SQL', 'Python'],
        personalInfo: 'С# разраб в Контуре уже два года. Хорошо знаком с PSQL. Хотел бы залететь в мнтересный стартап в качестве разраба. Ну и по возможности в какие-то организационные моменты в стартапе тоже бы хотел быть вовлечен. Это мне интересно, думаю',
        statusImgSrc: 'images/status/status1.svg',
        statusAltText: 'Готов вступить в команду',
        work_experience: ['Дизайнер', 'Разработчик'],
        projects: [
            {
                project_name: 'Respectos.FIIT',
                role: 'Дизайнер',
                description: 'Небольшой проектик. Там можно было респекты фиитовским чувакам разадавать',
            },
            {
                project_name: 'ШколаДома',
                role: 'Разработчик',
                description: 'Онлайн платформа онлайн обучения для школьников',
            },]
    },
    {
        userName: 'Анастасия Степанова',
        tg: '@nastepanovva',
        group: 'ФТ-402',
        skills: ['HTML', 'CSS', 'Designer', 'JavaScript'],
        personalInfo: 'Фронтендер в точке. За плечами годы мучений в худ школе и, как итог, диплом об окончании с отличием. Так что могу дизайн нарисовать ',
        statusImgSrc: 'images/status/status3.svg',
        statusAltText: 'В команде',
        work_experience: ['Дизайнер', 'Front-Разработчик'],
        projects: [
            {
                project_name: 'ШколаДома',
                role: 'Front-Разработчик',
                description: 'Онлайн платформа онлайн обучения для школьников',
            },
            {
                project_name: 'Pingwin Will Win',
                role: 'Дизайнер',
                description: 'Игра про пингвиненка, который на льдинах плывет к маме',
            },]
    }
];


function loadUsers(x) {
  let e = document.querySelector('.results');

  e.innerHTML = '';

  x.forEach((user) => {
      var userName = user.userName;
      var group = user.group;
      var tg = user.tg;
      var skills = user.skills;
      var personalInfo = user.personalInfo;
      var statusImgSrc =user.statusImgSrc;
      var statusAltText = user.statusAltText;
  
      var worksheet = document.createElement('section');
      worksheet.className = 'worksheet';
  
      worksheet.innerHTML = `
        <section id=${tg} onclick="getPage(this.id)" class="profile-info">
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

function loadUser(user) {
  let e = document.querySelector('.results');

  e.innerHTML = '';

  
      var userName = user.userName;
      var group = user.group;
      var skills = user.skills;
      var personalInfo = user.personalInfo;
      var statusImgSrc =user.statusImgSrc;
      var statusAltText = user.statusAltText;
  
      var worksheet = document.createElement('section');
      worksheet.className = 'worksheet';
  
      worksheet.innerHTML = `
        <section onclick="window.open('login.html', '_blank')" class="profile-info">
          <div class="block" id=${userName}>
            <img src="images/avatar.jpg" alt="Фото" class="profile-img">
            <article class="user">
              <div class="info">
                <div class="user-info">
                  <h1 id="user_name">${userName}</h1>
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
    

};

loadUsers(users);


function getPage(tg) {
    localStorage.setItem('tg', tg);
    window.open('lk2.html')
}


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.search');
    var button = form.querySelector('.search-button');
    var filter = form.querySelector('.selects');
    var filterGroup = filter.querySelector('.select-group');
    var filterStatus = filter.querySelector('.select-status');
    var usersToShow = [];

    
    // фильтр по группам
    filterGroup.addEventListener('change', function() {
        var skillBlocks = document.querySelectorAll('.category');
        var skillsSearch = [];
        skillBlocks.forEach((block) => {
            skillsSearch.push(block.textContent);
        });
        localStorage.setItem('group', filterGroup.value.toString());
        localStorage.setItem('group', filterGroup.value.toString());
        localStorage.setItem('skills', skillsSearch);
        let group = localStorage.getItem('group');
        let status = localStorage.getItem('status');
        let skills = skillsSearch;
        if (group !== '0'){
            if (status !== '0'){
                if (skills.length !== 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group)
                    );
                }
            }
        }
        else {
            if (status !== '0'){
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users;
                }
            }
        }
      loadUsers(usersToShow);
    });
  
    // фильтр по статусу
    filterStatus.addEventListener('change', function() {
        var skillBlocks = document.querySelectorAll('.category');
        var skillsSearch = [];
        skillBlocks.forEach((block) => {
            skillsSearch.push(block.textContent);
        });
        localStorage.setItem('group', filterGroup.value.toString());
        localStorage.setItem('status', filterStatus.value.toString());
        localStorage.setItem('skills', skillsSearch);
        let group = localStorage.getItem('group');
        let status = localStorage.getItem('status');
        let skills = skillsSearch;
        if (group !== '0'){
            if (status !== '0'){
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group)
                    );
                }
            }
        }
        else {
            if (status !== '0'){
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users;
                }
            }
        }
        loadUsers(usersToShow);
    });
  
    // поиск по кнопке
    button.addEventListener('click', function(event) {
      event.preventDefault();
        var skillBlocks = document.querySelectorAll('.category');
        var skillsSearch = [];
        skillBlocks.forEach((block) => {
            skillsSearch.push(block.textContent);
        });
      // var inp = document.querySelector('#selectedCategories input').value;
      // var skillBlocks = document.querySelectorAll('.category');
      // var skillsSearch = [];
      // var final = [];
      // var names = [];
      //   localStorage.getItem('usersToShow');
      //
      //
      // // поиск по имени(в разработке)
      // names = users.filter(user =>
      //   (user.userName.trim().includes(inp))
      // );
      //
      //
      // // поиск по скилам
      // skillBlocks.forEach((block) => {
      //   skillsSearch.push(block.textContent);
      // });
      //
      // if (skillBlocks.length > 0) {
      //     usersToShow.forEach((user) => {
      //         if (skillsSearch.some(skill => user.skills.includes(skill))) {
      //             final.push(user);
      //         }
      //     });
      //     usersToShow = final;
      // }
      // else {
      //     usersToShow = users;
      // }
      //   localStorage.setItem('skills', skillsSearch);
      //
      // loadUsers(usersToShow);

        localStorage.setItem('group', filterGroup.value.toString());
        localStorage.setItem('status', filterStatus.value.toString());
        localStorage.setItem('skills', skillsSearch);
        let group = localStorage.getItem('group');
        let status = localStorage.getItem('status');
        let skills = skillsSearch;
        console.log(skills);
        if (group !== '0'){
            if (status !== '0'){
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.group === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.group === group)
                    );
                }
            }
        }
        else {
            if (status !== '0'){
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users;
                }
            }
        }
        loadUsers(usersToShow);
    });
  });