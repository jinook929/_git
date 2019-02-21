var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var h = d.getHours();
var ap;
if (h < 12) {
    ap = "AM";
} else {
    ap = "PM";
    h =h - 12;
};

document.write(
    d.getFullYear() + '/' + ("0" + (d.getMonth() + 1)).slice(-2) + '/' + ("0" + d.getDate()).slice(-2) +' ' //date(YYYY/MM/DD)
    + ("0" + h).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) //time(HH:MM:SS)
    + ap + " " + n //am&pm, day of week(name)
    );
