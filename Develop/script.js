let timeDisplayEl = $("#currentDay");

let now = parseInt(moment().format("HH"));
console.log(now);

let $9AM = $("#9AM");
let $10AM = $("#10AM");
let $11AM = $("#11AM");
let $12PM = $("#12PM");
let $1PM = $("#1PM");
let $2PM = $("#2PM");
let $3PM = $("#3PM");
let $4PM = $("#4PM");
let $5PM = $("#5PM");


function displayTime() {
    let today = moment().format('dddd, MMMM Do YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(today);
}

$("textarea").each(function() {
    let name = parseInt($(this).attr("name"));
    if (name < now) {
        $(this).addClass("bg-past");
    }

    if (name > now) {
        $(this).addClass("bg-future")
    }

    if (name === now) {
        $(this).addClass("bg-now")
    }
});

$("button").on("click", function() {
    localStorage.setItem("9AM", ($9AM.val()));
    localStorage.setItem("10AM", ($10AM.val()));
    localStorage.setItem("11AM", ($11AM.val()));
    localStorage.setItem("12PM", ($12PM.val()));
    localStorage.setItem("13PM", ($1PM.val()));
    localStorage.setItem("14PM", ($2PM.val()));
    localStorage.setItem("15PM", ($3PM.val()));
    localStorage.setItem("16PM", ($4PM.val()));
    localStorage.setItem("17PM", ($5PM.val()));

});

$("#9AM").append(localStorage.getItem("9AM"));
$("#10AM").append(localStorage.getItem("10AM"));
$("#11AM").append(localStorage.getItem("11AM"));
$("#12PM").append(localStorage.getItem("12PM"));
$("#1PM").append(localStorage.getItem("13PM"));
$("#2PM").append(localStorage.getItem("14PM"));
$("#3PM").append(localStorage.getItem("15PM"));
$("#4PM").append(localStorage.getItem("16PM"));
$("#5PM").append(localStorage.getItem("17PM"));

setInterval(displayTime, 1000);