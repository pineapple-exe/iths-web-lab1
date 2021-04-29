const showCoursesDialogue = () => {
    document.getElementById('dialogueContainer').style = 'display: flex';
    document.getElementById('mainPage').className += 'dialogue-visible';
}

const resetErrorMessage = (id) => {
    document.getElementById(id).innerHTML = '&nbsp;';
}

const validateFields = ((number, title, description, length) => {
    const digitPattern = /\d+/;
    let status = true;

    if (number.value == "")
    {
        document.getElementById('courseNumber-error').innerHTML = 'Kursnummer får inte vara tomt.';
        status = false;
    }
    else if (number.value != number.value.match(digitPattern))
    {
        document.getElementById('courseNumber-error').innerHTML = 'Kursnummer måste vara ett tal.';
        status = false;
    }
    else
    {
        resetErrorMessage('courseNumber-error');
    }
    
    if (title.value == "")
    {
        document.getElementById('courseTitle-error').innerHTML = 'Kurstitel får inte vara tomt.';
        status = false;
    }
    else
    {
        resetErrorMessage('courseTitle-error');
    }

    if (description.value == "")
    {
        document.getElementById('courseDescription-error').innerHTML = 'Kursbeskrivning får inte vara tom.';
        status = false;
    }
    else
    {
        resetErrorMessage('courseDescription-error');
    }

    if (length.value == "")
    {
        document.getElementById('courseLength-error').innerHTML = 'Kurslängd får inte vara tom.';
        status = false;
    }
    else if (length.value != length.value.match(digitPattern))
    {
        document.getElementById('courseLength-error').innerHTML = 'Kurslängd måste vara ett tal.';
        status = false;
    }
    else
    {
        resetErrorMessage('courseLength-error');
    }
    
    return status;
})

const addCourse = () => {
    const number = document.getElementById('courseNumber');
    const title = document.getElementById('courseTitle');
    const description = document.getElementById('courseDescription');
    const length = document.getElementById('courseLength');

    if (validateFields(number, title, description, length))
    {
        courses.addCourse({
            "id": Math.max(...courses.courses.map(c => c.id)) + 1,
            "courseNumber": number.value,
            "popular": false,
            "current": false,
            "title": title.value,
            "description": description.value,
            "type": "[Undervisningstyp]",
            "start": "[StartDatum]",
            "length": length.value
        });

        cancelCoursesDialogue();
    }
}

const cancelCoursesDialogue = () => {
    document.querySelectorAll('.error-message').forEach(err => err.innerHTML = '&nbsp;');
    document.querySelectorAll('input').forEach(input => input.value = '');

    document.getElementById('dialogueContainer').style = 'display: none';
    document.getElementById('mainPage').classList.remove('dialogue-visible');
}