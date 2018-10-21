function laugh() {
    var ticker = document.getElementById('ticker').value
    console.log(ticker)
    inHTML = "Your stock is <b>" + ticker + "</b>"
    document.getElementById('hiddenText').innerHTML = inHTML
}

function test() {
    jQuery.get("https://www.blackrock.com/tools/hackathon/performance", { "identifiers": "IXN" }, function (response) {
        // Do something with response
        console.log(response);
    });
}

function plswork() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://www.blackrock.com/tools/hackathon/performance?identifiers=ticker%3AAAPL&responseFields=lowReturn', true);

    // Send request
    request.send();
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        Console.log(data);
    }
}