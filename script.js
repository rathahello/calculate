var timer = () => {
    let day = new Date();
    var days = day.getDay();
    var dates = day.getDate();
    var months = day.getMonth();
    var years = day.getFullYear();

    var displayDays = " ";
    var displayDates = " ";
    var displayMonths = " ";
    var allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var allMonths = ['January', 'Febeuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Sebtember', 'October', 'November', 'Desember'];

    for (let i = 0; i < allDays.length; i++) {
        switch (days) {
            case i:
                displayDays = allDays[i];
                break;
        }
    }
    switch (dates) {
        case 1:
        case 21:
        case 31:
            displayDates = "st";
            break;

        case 2:
        case 22:
            displayDates = "nd";
            break;

        case 3:
        case 23:
            displayDates = "rd";
            break;

        default:
            displayDates = "th";
    }
    for (let i = 0; i < allMonths.length; i++) {
        switch (months) {
            case i:
                displayMonths = allMonths[i];
                break;
        }
    }
    switch (days) {
        case 1:
            document.querySelector("h2").innerHTML = "Aerobic Time!";
            break;

        case 3:
            document.querySelector("h2").innerHTML = "Sport Time";
            break;

        case 5:
            document.querySelector("h2").innerHTML = "Movie Time!";
            break;

        case 0:
        case 6:
            document.querySelector("h2").innerHTML = "Nice Weekend!";
            break;
        default:
            document.querySelector("h2").innerHTML = "Normal day!";
    }
    document.querySelector('h1').innerHTML = displayDays + "/" + dates + "<sup>" + displayDates + "</sup>" + "/" + displayMonths + "/" + years;
}
var changeColors = () => {
    let colors = document.querySelector("h1");
    if (colors.style.color == "green") {
        colors.style.color = "orange";
    } else {
        colors.style.color = "green";
    }
}
var change = () => {
    let color = document.querySelector("h2");
    if (color.style.color == "red") {
        color.style.color = "Blue";
    } else {
        color.style.color = "red";
    }
}
timer();
setInterval(changeColors, 1000);
setInterval(change, 1000);

//time 
var timer = () => {
    var days = new Date();
    var hours = (days.getHours() % 12).toString();
    var minute = days.getMinutes().toString();
    var second = days.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    if (days.getHours() < 12) {
        document.querySelector('h3').innerHTML = hours + ":" + minute + ":" + second + " " + "AM";
    } else {
        document.querySelector('h3').innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
    }
    if (days.getHours() === 12) {
        document.querySelector('h3').innerHTML = days.getHours() + ":" + minute + ":" + second + " " + "AM";
    }
    document.body.style.background = "#" + hours + minute + second;
    if (second == 29) {
        window.open('https://www.w3schools.com/js/');
    }
}
setInterval(timer, 1000);
