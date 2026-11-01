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

// start on load using JQuery

$(document).ready(function() {
    $("#search-Btn").on("click", (event) => alertSuperheroes_request());
})