// body functions

function alertSuperheroes_request() {
    /* var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertSuperheroes_request;
    httpRequest.open("GET", "superheroes.php");
    httpRequest.send(); */

    $.ajax("superheroes.php").done(alertSuperheroes_response).fail(
        function(result) { alert("Could not request superheroes!!"); }
    );
}
function alertSuperheroes_response(response) {
    alert(response);
}

function showSuperHeroes_request() {
    var search = "";
    if ($("#search-Filter")[0].reportValidity()) {
        search = $("#search-Filter").val();
    }
    else {
        return;
    }
    
    $.ajax("superheroes.php?query=" + search).done(showSuperHeroes_response).fail(
        function(result) { alert("Could not request superheroes !!"); }
    );
}
function showSuperHeroes_response(response) {
    $("#result").html(response);
}

// start on load using JQuery

$(document).ready(function() {
    $("#search-Btn").on("click", (event) => showSuperHeroes_request());
    $("#search-Filter").on("keydown", function(event) {
        if (event.key === "Enter") {
            showSuperHeroes_request();
        }
    });
})