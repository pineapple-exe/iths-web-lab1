const fetchCourses = async () => {
    const response = await fetch('courses.json');
    return await response.json();
};

const listCourses = async () => {
    courses = await fetchCourses();
    renderCourses();
}

const renderCourses = () => {
    let html = '';
    
    html += '<tr>';
    html += '<th>Kurs</th>';
    html += '<th class="cloaking-ability">Undervisningsform</th>';
    html += '<th class="cloaking-ability">Startdatum</th>';
    html += '<th class="cloaking-ability">Längd</th>';
    html += '<th></th>'
    html += '</tr>';
    
    const courseHtmlString = (courseObj) => {
        html += '<tr>';
        html += '<td><div class="course-cell">';
        html += '<a class="camo-link" href="#">' + courseObj.title + '</a>';

        if (courseObj.popular || courseObj.current)
        {
            html += '<div class="icon-box">';

            if (courseObj.current)
            {
                html += '<img class="current" src="/img/icon_present.png" alt="Clock icon"/>';
            }

            if (courseObj.popular)
            {
                html += '<img class="popular" src="/img/icon_flame.png" alt="Flame icon"/>';
            }

            html += '</div>';
        }
        html += '</div></td>';

        html += '<td class="cloaking-ability">' + courseObj.type + '</td>';
        html += '<td class="cloaking-ability">' + courseObj.start + '</td>';
        html += '<td class="cloaking-ability">' + courseObj.length + '</td>'; 
        html += '<td> <img data-id="' + courseObj.id + '" class="add-to-cart-icon" src="img/add-to-shopping-cart-light-64.png" onclick="addToCart(event)"/> </td>';

        html += '</tr>';
    };

    courses.forEach(courseHtmlString);
    
    document.getElementById('course-list').innerHTML = html;
}

window.onload = listCourses;

let courses = [];

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
        courses.push({
            "id": Math.max(...courses.map(c => c.id)) + 1,
            "courseNumber": number.value,
            "popular": false,
            "current": false,
            "title": title.value,
            "description": description.value,
            "type": "[Undervisningstyp]",
            "start": "[StartDatum]",
            "length": length.value
        });

        renderCourses();
        cancelCoursesDialogue();
    }
}

const cancelCoursesDialogue = () => {
    document.querySelectorAll('.error-message').forEach(err => err.innerHTML = '&nbsp;');
    document.querySelectorAll('input').forEach(input => input.value = '');

    document.getElementById('dialogueContainer').style = 'display: none';
    document.getElementById('mainPage').classList.remove('dialogue-visible');
}



