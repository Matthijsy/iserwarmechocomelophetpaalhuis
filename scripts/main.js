// Get the current chocomel status of het paalhuis
// This is based on the current temprature
// degree celsius <= 10.00 means there should be chocomel
// Otherwise there is not

function get_chocomel_status(){
    $.get('https://data.buienradar.nl/2.0/feed/json', function (data, status) {
        var location_data = data['actual']['stationmeasurements'][40];
        console.log(location_data);
        if(location_data['temperature'] <= 10){
            $("body").css("background-color", "green");
            $("#big").text("JA");
            $("#small").text("Je moet er alleen wel ver voor fietsen");
        } else if(location_data['feeltemperature'] <= 10) {
            $("body").css("background-color", "orange");
            $("#big").text("Misschien");
            $("#small").text("Volgens de gevoelstemperatuur wel");
        } else {
            $("body").css("background-color", "red");
            $("#big").text("NEE");
            $("#small").text("Het is te warm voor chocomel");
        }
        // }
    })
}