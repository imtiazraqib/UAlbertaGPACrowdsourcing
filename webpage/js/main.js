window.onload = function() {
    init()
};

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/11FzPr71WSyy6JclrSpzUxV0IbuntnMRuPsFjWzlAZPY/pubhtml';

function init() {
    Tabletop.init({
        key: public_spreadsheet_url,
        callback: function(data, tabletop) {
            console.log(data)
        },
        simpleSheet: true
    })
}
window.addEventListener('DOMContentLoaded', init)

function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td scope='col' class='text-center faculty'>" + data[i].Faculty + "</td>");
        tr.append("<td scope='col' class='text-center dept'>" + data[i].Department + "</td>");

        $('table').append(tr);
    }
    console.log(data);
}