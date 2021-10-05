// pages have different load times, page 9 loads quickest (only two characters)
var key = 10;

function testApi() {
    for (var i = 1; i < 10; i++) {

        var queryUrl = "https://swapi.dev/api/people/?page=" + i;

        fetch(queryUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.results);
                key--;
                localStorage.setItem(key, JSON.stringify(data.results));
            })
    }
}

function testApi2() {
    for (var i = 1; i < 83; i++) {

        var queryUrl = "https://swapi.dev/api/people/" + i;

        fetch(queryUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                console.log(data);

            })
    }
}

testApi();
/* testApi2(); */