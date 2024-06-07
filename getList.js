const gettt = require("./base");

async function getUsers() {
    let users;
    await gettt.getUsers().then((value) => {users = value});
    let result = '';
    await users.forEach((user) => {
        var userName = user.userName;
        var group = user.group;
        var tg = user.tg;
        var skills = user.skills;
        var personalInfo = user.personalInfo;
        var statusImgSrc = user.statusImgSrc;
        var statusAltText = user.statusAltText;

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

module.exports.getUsers = getUsers;