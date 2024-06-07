const gettt = require("./base");

async function getUsers() {
    let users;
    await gettt.getUsers().then((value) => {users = value});
    let result = '';
    await users.forEach((user) => {
        let userName = user.userName;
        let group = user.group;
        let tg = user.tg;
        let skills = user.skills;
        let personalInfo = user.personalInfo;
        let statusImgSrc = getStatusImageByStatus(user.student_status);
        let statusAltText = user.statusAltText;

        result += `
        <section class="worksheet">
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
        </section>
      `;
    });

    return result;
};

const getStatusImageByStatus = (student_status) => {
    if (student_status === 'Готов вступить в команду') {
        return 'images/status/status1.svg';
    }
    if (student_status === 'В команде') {
        return 'images/status/status3.svg'
    }

    return 'images/status/status2.svg'
}

module.exports.getUsers = getUsers;