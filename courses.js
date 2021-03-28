const fetchCourses = async () => {
    const response = await fetch('courses.json');
    return await response.json();
};

const listCourses = async () => {
    const courseObjects = await fetchCourses();
    let html = '';
    
    const courseHtmlString = (courseObj) => {
        html += '<tr><td><div class="course-cell">';

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

        html += '<a class="camo-link" href="#">' + courseObj.title + '</a></td></div>';
        html += '<td class="cloaking-ability">' + courseObj.type + '</td>';
        html += '<td class="cloaking-ability">' + courseObj.start + '</td>';
        html += '<td class="cloaking-ability">' + courseObj.length + '</td>';

        html += '</tr>';
    };

    courseObjects.forEach(courseHtmlString);
    
    document.getElementById('course-list').innerHTML += html;
}

window.onload = listCourses;

