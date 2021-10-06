const $name = $(".name");
const $img = $("img");
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
});
