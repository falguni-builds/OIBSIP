
function convtemp(){

    let temp = document.getElementById("temp").value;

    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");


    let c;
    let f;
    let k;

    if(temp === "" || isNaN(temp)){

        error.innerText =
            "Please enter a valid temperature!";

        resetResults();

        return;
    }


    if(unit === ""){

        error.innerText =
            "Please select a temperature unit!";

        resetResults();

        return;
    }


    temp = parseFloat(temp);
    if(unit === "c"){

        c = temp;

        f = (c * 9 / 5) + 32;

        k = c + 273.15;

    }


    else if(unit === "f"){

        f = temp;

        c = (f - 32) * 5 / 9;

        k = c + 273.15;

    }


    else if(unit === "k"){

        if(temp < 0){

            error.innerText =
                "Kelvin temperature cannot be below 0 K!";

            resetResults();

            return;
        }

        k = temp;

        c = k - 273.15;

        f = (c * 9 / 5) + 32;

    }


    error.innerText = "";

    document.getElementById("celsius").innerText =
        c.toFixed(2) + " °C";


    document.getElementById("fahrenheit").innerText =
        f.toFixed(2) + " °F";


    document.getElementById("kelvin").innerText =
        k.toFixed(2) + " K";

    showTemperatureStatus(c);
}

function showTemperatureStatus(celsius){

    let status =
        document.getElementById("status-text");


    if(celsius < 0){

        status.innerText =
            "❄️ Freezing Cold";

    }

    else if(celsius < 15){

        status.innerText =
            "🥶 Very Cold";

    }

    else if(celsius < 25){

        status.innerText =
            "🌤️ Pleasant";

    }

    else if(celsius < 35){

        status.innerText =
            "☀️ Warm";

    }

    else{

        status.innerText =
            "🔥 Very Hot";

    }

}
function addHistory(temp, unit, c, f, k){

    let historyList =
        document.getElementById("history-list");


    let unitName;


    if(unit === "c"){

        unitName = "°C";

    }

    else if(unit === "f"){

        unitName = "°F";

    }

    else{

        unitName = "K";

    }


    let listItem =
        document.createElement("li");


    listItem.innerText =
        `${temp} ${unitName} → 
        ${c.toFixed(2)} °C | 
        ${f.toFixed(2)} °F | 
        ${k.toFixed(2)} K`;


    historyList.prepend(listItem);

    if(historyList.children.length > 5){

        historyList.removeChild(
            historyList.lastChild
        );

    }

}

function resetConverter(){

    document.getElementById("temp").value = "";

    document.getElementById("unit").value = "";

    document.getElementById("error").innerText = "";

    resetResults();

    document.getElementById("status-text").innerText = "--";

    document.getElementById("history-list").innerHTML = "";

}

function resetResults(){

    document.getElementById("celsius").innerText =
        "-- °C";

    document.getElementById("fahrenheit").innerText =
        "-- °F";

    document.getElementById("kelvin").innerText =
        "-- K";

}