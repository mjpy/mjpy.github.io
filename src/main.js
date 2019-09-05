function scrollContent() {
    var content = document.getElementsByClassName("contact");
    content[0].scrollIntoView(false);
} 

function scrollHome() {
    var content = document.getElementsByClassName("header");
    content[0].scrollIntoView(true);
} 

function scrollPortfolio() {
    var content = document.getElementsByClassName("lake");
    content[0].scrollIntoView(true);
}

function menuChange() {
    if (window.scrollY > 500 && menu == 0) {
        showNav();
        menu = 1;
    }
    else if (window.scrollY <= 500 && menu == 1) {
        hideNav();
        menu = 0;
    }
}

function showNav() {
    console.log('Change!');
    document.getElementsByClassName("sidebar")[0].style.display = 'block';
}

function hideNav() {
    console.log('Hide!');
    document.getElementsByClassName("sidebar")[0].style.display = 'none';
}

function startApp() {
    if (currentPhone == 0) 
    document.getElementById('phoneScreen').innerHTML = "PostgreSQL<br>";
    else if (currentPhone == 1) 
    document.getElementById('phoneScreen').innerHTML += "Python<br>";
    else if (currentPhone == 2) 
    document.getElementById('phoneScreen').innerHTML += "html/css<br>";
    else if (currentPhone == 3) 
    document.getElementById('phoneScreen').innerHTML += "JavaScript<br>";
    else if (currentPhone == 4) 
    document.getElementById('phoneScreen').innerHTML += "Java/C++<br>";
    else {
        document.getElementById('phoneScreen').innerHTML = '<img src="img/soft.jpg">';
        currentPhone = -1;
    }
    currentPhone++;
}



var currentPhone = 0;
var menu = 0;
window.addEventListener('scroll', menuChange);


