const months = [31,28,31,30,31,30,31,31,30,31,30,31];
let blogs = [];

function addBlog() {
    let name = document.getElementById('name').value;

    let startDate = new Date(document.getElementById('start-date').value);
    let endDate = new Date(document.getElementById('end-date').value);
    let durationMonth,durationYear,durationDate;
    let oneDate = {
        date : startDate.getDate(),
        month : startDate.getMonth()+1,
        years : startDate.getFullYear()
    }
    let twoDate = {
        date : endDate.getDate(),
        month : endDate.getMonth()+1,
        years : endDate.getFullYear()
    }
    
    durationYear = twoDate.years - oneDate.years;
    
    if (twoDate.month >= oneDate.month) {
        durationMonth = twoDate.month - oneDate.month;
    } else {
        durationYear--;
        durationMonth = 12 + twoDate.month - oneDate.month;
    }

    if (twoDate.date >= oneDate.date) {
        durationDate = twoDate.date - oneDate.date;
    } else {
        durationMonth--;
        let days = months[twoDate.month - 2];
        durationDate = days + twoDate.date - oneDate.date;
    }

    let description = document.getElementById('description').value;
    let checkboxes = document.querySelectorAll('.check');
    let image = document.getElementById('upload_input').value;

    let blog = {
        name : name,
        durationDate : durationDate,
        durationMonth : durationMonth,
        description : description,
        image : image,
    }
    blogs.push(blog)
    renderBlog()
}

function renderBlog() {
    let blogContainer = document.getElementById('contents')
    blogContainer.innerHTML = `
    <div class="list">
                <div class="image-blog">
                    <img src="image/imagelist1.jpg" alt="">
                </div>
                <h3>
                    <a href="" target="blank">Fullstuck Developer - 2022</a>
                </h3>
                <div class="duration-blog">
                    durasi : 3 bulan
                </div>
                <div class="content-list">
                    A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side.
                </div>
                <div class="ic-blog-list">
                    <i class="fa-brands fa-node-js"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-js-square"></i>
                    <i class="fa-brands fa-aws"></i>
                </div>
                <div class="btn-card-list">
                    <a href="" class="btn-edit">edit</a>
                    <a href="" class="btn-delete">delete</a>
                </div>
            </div>`

        for (let i = 0; i < blogs.length; i++) {
            blogContainer.innerHTML += `<div class="list">
            <div class="image-blog">
                <img src="${blogs[i].image}" alt="">
            </div>
            <h3>
                <a href="" target="blank">${blogs[i].name}</a>
            </h3>
            <div class="duration-blog">
                durasi : ${blogs[i].durationMonth} bulan ${blogs[i].durationDate} hari
            </div>
            <div class="content-list">
                ${blogs[i].description}
            </div>
            <div class="ic-blog-list">
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-js-square"></i>
                <i class="fa-brands fa-aws"></i>
            </div>
            <div class="btn-card-list">
                <a href="" class="btn-edit">edit</a>
                <a href="" class="btn-delete">delete</a>
            </div>
        </div>`
        }
}


// Checkbox
function changeIcon(arr) {
    let icon = [];
    for (let number of arr) {
        if (number === 1){
            icon.push(icJavas);
        } else if (number === 2) {
            icon.push(icJavas);
        } else if (number === 3) {
            icon.push(icJavas);
        }
    }
    console.log(icon)
}
function getValue(){
    let values = [];
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            values.push(parseInt(checkbox.value));
        }
    }
    console.log(values)
}
let checkboxes = document.querySelectorAll('.check');
document.addEventListener('change', getValue);

function iconJscript (){
    let javaScript = document.getElementById('ic-js');
    javaScript.innerHTML = '&#xf3b9';
}

function iconNjScript (){
    let nodeJs = document.getElementById('ic-js');
    nodeJs.innerHTML = '&#xf3d3';
}




