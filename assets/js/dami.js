
var gageArray = [
    "https://www.denofgeek.com/wp-content/uploads/2021/06/star-wars-obi-wan-kenobi-set-photos-1.jpg?resize=768%2C432",
    "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864",
    "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/scbfnofizyyojllm_1620036335.jpeg"
];


var garyButtonPress = document.getElementById("instructor1")
var gageButtonPress = document.getElementById("instructor2")
    

var buttonPress = document.getElementById("blastoff")

var keep2 = []






    function getGageRando(gageArray) {
    for (var i = 1; i < gageArray.length; i++){}   
        var randomPic = Math.floor(Math.random() * gageArray.length); 
    //    image.setAttribute("src", gageArray[randomPic]);
        console.log(result)
        return result;

    }



  
  
  
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





gageButtonPress.addEventListener("click", getGageRando);
       




garyButtonPress.addEventListener("click", function(){
    
    
})


buttonPress.addEventListener("click", getRandomCharacter);

