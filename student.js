export class Student {
    constructor(
        student_id = null, 
        student_name = null, 
        telegram_contact = null, 
        another_contact = [], 
        github = null, 
        about_me_info = null, 
        experience_info = null, 
        group_id = null, 
        profile_photo = null, 
        password_hash = null, 
        status = null, 
        about_me_info_short = null
    ) {
        this.student_id = student_id;
        this.student_name = student_name;
        this.telegram_contact = telegram_contact;
        this.another_contact = another_contact;
        this.github = github;
        this.about_me_info = about_me_info;
        this.experience_info = experience_info;
        this.group_id = group_id;
        this.profile_photo = profile_photo;
        this.password_hash = password_hash;
        this.status = status;
        this.about_me_info_short = about_me_info_short;
    }
}

/*class Status {
    constructor(status_type) {
        this.status_type = status_type;
    }
}

const status = new Status('active');
const student = new Student(1, 'John Doe', '@john_doe', ['email@example.com', 'phone_number'], 'github_username', 'About me info...', 'Experience info...', 123, 'bytea_data_here', 'password_hash_here', status, 'Short about me info');

console.log(student);*/
