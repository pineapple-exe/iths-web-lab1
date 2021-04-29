class CourseList {
    constructor() {
        this.courses = [];
    }

    getCourseById(id) {
        return this.courses.find(c => c.id === id);
    }

    async fetchCourses() {
        const response = await fetch('courses.json');
        return await response.json();
    }

    async listCourses() {
        this.courses = await this.fetchCourses();
        this.renderCourses();
    }
    
    addCourse(course) {
        this.courses.push(course);
        this.renderCourses();
    }

    renderCourses() {
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
            html += '<td> <img data-id="' + courseObj.id + '" class="add-to-cart-icon" src="img/add-to-shopping-cart-light-64.png" onclick="shoppingCart.addToCart(event)"/> </td>';
    
            html += '</tr>';
        };
    
        this.courses.forEach(courseHtmlString);
        
        document.getElementById('course-list').innerHTML = html;
    }
}

const courses = new CourseList();

const coursesOnLoad = () => {
    courses.listCourses();
}

window.onload = coursesOnLoad;





