
function getRawProjects(user) {
    if ('projects' in user) {
        return '';
    }
    let result = '';
    for (const p of user.projects) {
        result += `
            <div class="proj">
            <h2 id="proj-name">${p.project_name}</h2>
            <span id="proj-role" class="proj-role">${p.role}</span>
            <span id="proj-descripton" class="proj-descripton">${p.description}</span>
            <button class="proj-button">посмотреть</button>
            </div>
        `;
    }
    return result;
}

module.exports.getRawProjects = getRawProjects;