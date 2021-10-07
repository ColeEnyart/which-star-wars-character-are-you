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

    displayCharacterHistory();
}

function displayCharacterHistory() {
    const key = 'Character History';
    characterHistory = JSON.parse(localStorage.getItem(key) || "[]");
    var history = [];

    for (var i = 0; i < characterHistory.length; i++) {
        history.push('<p>' + characterHistory[i] + '</p>');
    }
    
    $('.pastCharacters').html(history);
}

displayCharacterHistory();
