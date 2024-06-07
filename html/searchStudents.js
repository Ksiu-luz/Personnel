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