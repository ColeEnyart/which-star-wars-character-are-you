const $name = $(".name");
const $img = $(".card-img-top");
const $btn = $(".character");

$btn.on("click", () => {
    const randomNumber = Math.ceil(Math.random() * 83);
    $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`,
        (data) => {
            $name.text(data['name'])
            $img.attr("src", data['image'])
        });
    $img.show();
    $name.show();
    addCharacter();
});

var character = [];

function addCharacter() {
    const key = 'Character History';

    character.push($name.text());
    
    localStorage.setItem(key, JSON.stringify(character));
    console.log(character);
    
}

function displayCharacterHistory() {
    const key = 'Search History';
    var characterHistory = JSON.parse(localStorage.getItem(key) || "[]");
    console.log(characterHistory);
    var history = [];

    for (var i = 0; i < characterHistory.length; i++) {
        console.log(history);
        history.push('<p>' + characterHistory[i] + '</p>');
    }
    
    $('.pastCharacters').html(history);
}

$(document).ready(function () {
displayCharacterHistory();
})