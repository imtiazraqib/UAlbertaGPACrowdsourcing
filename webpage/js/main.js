window.onload = function() {
    init()
};

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1L7L3FaIk39x4cSTEQvE1XIgS48L3AP1IupJUZQXXKwM/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: showInfo,
        simpleSheet: true
    })
}

function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $("<tr role='row' class='odd'>");
        tr.append("<td scope='col' class='text-center faculty'>" + data[i].Department + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].CourseNumber + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].CourseGPAAverage + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].Term + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].Professor + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].ClassSize + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].Faculty + "</td>");
        tr.append("</tr>")
        $('table').append(tr);
    }
}
window.addEventListener('DOMContentLoaded', init)