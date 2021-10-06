



var buttonPress = document.getElementById("blastoff")
console.log (buttonPress)



//unction getRandomValue(arr) {
   // var result = arr[Math.floor(Math.random() * arr.length)];
  //  return result;
  




function getRandomCharacter(event){
    event.preventDefault()
    for (var i = 1; i < 2; i++)
        var requestPeopleURl = "https://swapi.dev/api/people/" + i;

        fetch(requestPeopleURl)
            .then(function (response){
                // return response.json()
                return response[Math.floor(Math.random()*arr.length)];
            })
            .then( function (data) {
                 console.log(data);
            })
             


}





buttonPress.addEventListener("click", getRandomCharacter);

    


