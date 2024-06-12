function loadUsers(x) {
    const e = document.querySelector('.results');
    e.innerHTML = '';
    x.forEach((user) => {
        const userName = user.name;
        const group = user.gr;
        const tg = user.tg;
        const skills = user.skills;
        const personalInfo = user.personalInfo;
        const statusImgSrc =user.statusImgSrc;
        const statusAltText = user.statusAltText;
    
        const worksheet = document.createElement('section');
        worksheet.className = 'worksheet';
        const section = document.createElement('section');
        section.id = tg;
        section.onclick = function() {
        getPage(this.id);
        };
        section.classList.add('profile-info');

        const block = document.createElement('div');
        block.classList.add('block');

        const image = document.createElement('img');
        image.src = 'images/avatar.jpg';
        image.alt = 'Фото';
        image.classList.add('profile-img');

        const article = document.createElement('article');
        article.classList.add('user');

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');

        const heading = document.createElement('h1');
        heading.textContent = userName;

        const groupParagraph = document.createElement('p');
        groupParagraph.classList.add('group');
        groupParagraph.textContent = group;

        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('skills');
        skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.textContent = skill;
        skillsDiv.appendChild(skillDiv);
        });

        const personalParagraph = document.createElement('p');
        personalParagraph.classList.add('personal');
        personalParagraph.textContent = personalInfo;

        const statusImage = document.createElement('img');
        statusImage.src = statusImgSrc;
        statusImage.alt = statusAltText;
        statusImage.classList.add('status-img');
        statusImage.title = statusAltText;

        userDiv.appendChild(heading);
        userDiv.appendChild(groupParagraph);
        userDiv.appendChild(skillsDiv);

        infoDiv.appendChild(userDiv);
        infoDiv.appendChild(personalParagraph);

        article.appendChild(infoDiv);

        block.appendChild(image);
        block.appendChild(article);

        section.appendChild(block);
        section.appendChild(statusImage);

        worksheet.appendChild(section);

        e.appendChild(worksheet);
      });
  };


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search');
    const button = form.querySelector('.search-button');
    const filter = form.querySelector('.selects');
    const filterGroup = filter.querySelector('.select-group');
    const filterStatus = filter.querySelector('.select-status');
    let usersToShow = [];
    let users =[];

    function createUser(name, group, statusAltText, skills, statusImgSrc, tg, personalInfo) {
        let user = {
            name: name,
            gr: group,
            statusImgSrc: statusImgSrc,
            statusAltText: statusAltText,
            tg: tg,
            personalInfo: personalInfo,
            skills: skills
        };
        return user;
      }
      
    document.querySelectorAll('.worksheet').forEach((worksheet) => {
        const name = worksheet.querySelector('.user-info').querySelector('h1').textContent;
        const group = worksheet.querySelector('.user-info').querySelector('.group').textContent;
        const statusAltText = worksheet.querySelector('.status-img').getAttribute('title');
        const statusImgSrc = worksheet.querySelector('.status-img').getAttribute('src');
        const tg = worksheet.querySelector('.profile-info').getAttribute('id');
        const personalInfo= worksheet.querySelector('.personal').textContent;
        let skills = [];
        worksheet.querySelectorAll('.skill').forEach((s) => {
            skills.push(s.textContent);
        });
        users.push(createUser(name, group, statusAltText, skills, statusImgSrc, tg, personalInfo));
    });
   
    users.forEach((user)=>{
        console.log(user);
    });
    
    // фильтр по группам
    filterGroup.addEventListener('change', function() {
        let skillBlocks = document.querySelectorAll('.category');
        let skillsSearch = [];
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
                        (user.gr === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.gr === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group)
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
        let skillBlocks = document.querySelectorAll('.category');
        let skillsSearch = [];
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
                        (user.gr === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.gr === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group)
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
        let skillBlocks = document.querySelectorAll('.category');
        let skillsSearch = [];
        skillBlocks.forEach((block) => {
            skillsSearch.push(block.textContent);
        });
    

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
                        (user.gr === group && user.statusAltText === status && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group && user.statusAltText === status)
                    );
                }
            }
            else {
                if (skills.length > 0){
                    usersToShow = users.filter(user =>
                        (user.gr === group && skills.some(skill => user.skills.includes(skill)))
                    );
                }
                else{
                    usersToShow = users.filter(user =>
                        (user.gr === group)
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