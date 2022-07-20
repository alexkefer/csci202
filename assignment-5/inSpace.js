$.getJSON("astros.json", function(data) {
    var number = data['number'];
    var craft1 = null;
    var craft2 = null;
    var aboardISS = 0;
    var aboardTiangong = 0;
    $('#totalPeople').append(number);

    data['people'].forEach(function (d) {
        if (d['craft'] == "ISS") {
            if (d['nat'] == 'USA') {
                $('#astroHomies').append('<li>' + '<img src="icons/USA-flag.png"></img>');
            }
            if (d['nat'] == 'RUS') {
                    $('#astroHomies').append('<li>' + '<img src="icons/Russia-flag.png"></img>');
            }
            if (d['nat'] == 'ITA') {
                $('#astroHomies').append('<li>' + '<img src="icons/Italy-flag.png"></img>');
        }
            $('#astroHomies').append('<div id="names">'+ d['name'] + '</div></li>');
            aboardISS++;
            craft1 = d['craft'];
        }
        if (d['craft'] == "Tiangong") {
            if (d['craft'] == "Tiangong") {
                if (d['nat'] == 'CHN') {
                    $('#astroChina').append('<li>' + '<img src="icons/China-flag.png"></img>');
                }
            }
            $('#astroChina').append('<div id="names">' + d['name'] + '</div></li>');
            aboardTiangong++;
            craft2 = d['craft'];
        }
    })
    $('#craft1people').html(aboardISS);
    $('#craft2people').html(aboardTiangong);
    $('#craft1').append(craft1);
    $('#craft2').append(craft2);
});