function loadUsers(x) {
    let e = document.querySelector('.results');
    e.innerHTML = '';
    x.forEach((user) => {
        var userName = user.name;
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


document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.search');
    var button = form.querySelector('.search-button');
    var filter = form.querySelector('.selects');
    var filterGroup = filter.querySelector('.select-group');
    var filterStatus = filter.querySelector('.select-status');
    var usersToShow = [];
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
        let name = worksheet.querySelector('.user-info').querySelector('h1').textContent;
        let group = worksheet.querySelector('.user-info').querySelector('.group').textContent;
        let statusAltText = worksheet.querySelector('.status-img').getAttribute('title');
        let statusImgSrc = worksheet.querySelector('.status-img').getAttribute('src');
        let tg = worksheet.id;
        let personalInfo= worksheet.querySelector('.personal').textContent;
        let skills = [];
        worksheet.querySelectorAll('.skill').forEach((s) => {
            skills.push(s.textContent);
        });;
        users.push(createUser(name, group, statusAltText, skills, statusImgSrc, tg, personalInfo));
    });
   
    users.forEach((user)=>{
        console.log(user);
    });
    
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