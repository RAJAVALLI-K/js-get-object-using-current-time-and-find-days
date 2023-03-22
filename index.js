var welcome;
var date = new Date(), hour = date.getHours();
    if (hour < 10) {
        welcome = "Hi,Good Morning";
    } else if (hour < 13 && hour <= 15) {
        welcome = "Hi,Good Afternoon";
    } else if (hour < 16 && hour <= 18) {
        welcome = "Hi,Good Evening";
    }
    else {
        welcome = "Hi,Good Night";
    }
document.write("<h2>" + welcome);
// document.write("<br>" + hour + ":" + minute + ":" + second);
// console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
