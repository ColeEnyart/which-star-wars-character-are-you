function testApi() {

    var queryUrl = "https://swapi.dev/api/people/75/";

    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        testPeople(data);
    })
}

function testPeople (data) {
    var people = data.people;
    console.log(people);


    /* var total_results = []


    console.log("Downloading the original search results");
    var response = "https://swapi.co/api/people/?search=a";
    var data = response.json();


    var total_results = total_results + data['results'];


    while (data['next'] != null) {

        console.log("Next page found, downloading", data['next']);
        response = data['next'];
        data = response.json();

        var total_results = total_results + data['results'];

    }
    console.log("We have", len(total_results), "total results"); */
}

testApi();
