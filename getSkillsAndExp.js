function getTextSkills(skills) {
    let result = '';
    for (const skill of skills) {
        result += `<li>${skill}</li>`;
    }
    return result;
}
function getTextExp(exps) {
    let result = '';
    for (const exp of exps) {
        result += `<li>${exp}</li>`;
    }
    return result;
}

module.exports.getTextSkills = getTextSkills;
module.exports.getTextExp = getTextExp;