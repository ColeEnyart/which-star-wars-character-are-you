function testApi() {

    var queryUrl = "https://swapi.dev/api/people/";
    
    fetch(queryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        testPeople(data);
        getRandomValue(data);
    })
}

function getRandomValue(data){
    var result = data[Math.floor(Math.random() * data.results.length)];

    console.log(data.results.length);
    
    console.log(result);
  }

function testPeople (data) {
    var people = data.people;
    console.log(people);  
}

testApi();