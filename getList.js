const {getStatusImageByStatus} = require("./base");
const {getUsers} = require("./base");

async function getHtmlUsers() {
    let users;
    await getUsers().then((value) => {users = value});
    let result = '';
    await users.forEach(async (user) => {
        let userName = user.userName;
        let grp = user.grp;
        let tg = user.tg;
        let skills = user.skills;
        let personalInfo = user.personalInfo;
        let statusImgSrc = user.statusImageSrc;
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
                  <p class="group">${grp}</p>
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
    }, {});

    return result;
}

module.exports.getHtmlUsers = getHtmlUsers;