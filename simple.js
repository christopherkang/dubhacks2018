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