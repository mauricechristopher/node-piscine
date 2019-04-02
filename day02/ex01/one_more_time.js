function validate(arr) {
    if (arr.length == 5)
    {
        if (arr[3].length != 4){
            console.log("Wrong format")
            return false;
        }
        if (!(arr[0] == "Lundi" || arr[0] == "Mardi" || arr[0] == "Mercredi" || arr[0] == "Jeudi" || arr[0] == "Vendredi" || arr[0] == "Samedi" || arr[0] == "Dimanche")) {
            console.log("Wrong format")
            return false;
        }
    }
    else {
        console.log("Wrong format")
    }
    setMonth(arr);
}

function setMonth(arr) {

    var month = arr[2];
    var monthnum = 0;

    if (month.toUpperCase == "JANVIER")
        monthnum = 0;
    if (month.toUpperCase == "FEVRIER")
        monthnum = 1;
    if (month.toUpperCase == "MARS")
        monthnum = 2;
    if (month.toUpperCase == "AVRIL")
        monthnum = 3;
    if (month.toUpperCase == "MAI")
        monthnum = 4;
    if (month.toUpperCase == "JUIN")
        monthnum = 5;
    if (month.toUpperCase == "JUILLET")
        monthnum = 6;
    if (month.toUpperCase == "AOUT")
        monthnum = 7;
    if (month.toUpperCase == "SEPTEMBRE")
        monthnum = 8;
    if (month.toUpperCase == "OCTOBRE")
        monthnum = 9;
    if (month.toUpperCase == "NOVEMBRE")
        monthnum = 10;
    if (month.toUpperCase == "DECEMBRE")
        monthnum = 11;
    
    init(arr, monthnum);
  }

function init(arr, monthnum) {

    var daynum = arr[1];
    let newarr = new Array;
    newarr = arr[4].split(':');

    if (daynum > 31 || daynum <= 0 || daynum.length > 2)
        return false;

    var year = arr[3];
    var hours = newarr[0];
    var minutes = newarr[1];

    if (hours < 24 && minutes < 60 && year >= 1970)
        getSeconds(daynum, monthnum, year, hours, minutes);
    else
        console.log("Wrong Format");
}

function getSeconds(daynum, monthnum, year, hours, minutes) {

    var seconds = new Date(year, monthnum, daynum, hours, minutes, 0).getTime() / 1000;  
    console.log("Seconds since January 1st, 1970: " + seconds);
}

function main () {
    var arr = new Array ();
    
    if (process.argv[2]) {
        let str = process.argv[2].split(' ');
        for (let x = 0; x < str.length; x++) {
            if (str[x])
                arr.push(str[x]);
        }
    validate(arr);
    }
}

main();