



var buttonPress = document.getElementById("blastoff")
// console.log (buttonPress)

var keep2 = []

//function getRandomValue(arr) {
   // 




  function getRandomCharacter(event){
    event.preventDefault()
    for (var i = 1; i < keep2.length ; i++){
        var result = keep2[Math.floor(Math.random() * keep2.length)];
         console.log(result)
        return result;
  

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
                keep2.push(data);
                /* console.log(data) */
                // $("table").append('<tr><td>' + ti + '</td></tr>');
            })
    }
}
console.log(keep2);


testApi();
testApi2();















buttonPress.addEventListener("click", getRandomCharacter);

