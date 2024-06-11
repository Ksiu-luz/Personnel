function loadUsers(x) {
    const e = document.querySelector('.results');
    e.innerHTML = '';
    x.forEach((user) => {
        const userName = user.name;
        const group = user.group;
        const tg = user.tg;
        const skills = user.skills;
        const personalInfo = user.personalInfo;
        const statusImgSrc =user.statusImageSrc;
        const statusAltText = user.statusAltText;
    
        const worksheet = document.createElement('section');
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
            group: group,
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
        const skillBlocks = document.querySelectorAll('.category');
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
        const skillBlocks = document.querySelectorAll('.category');
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
        const skillBlocks = document.querySelectorAll('.category');
        let skillsSearch = [];
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