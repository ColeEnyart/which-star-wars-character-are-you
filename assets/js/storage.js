var characterNameEl = $(".name");
var characterImgEl = $(".card-img-top");

function displaySearchHistory() {
    const key = 'Search History';
    var searchHistory = JSON.parse(localStorage.getItem(key) || "[]");
    var buttons = [];

    for (var i = 0; i < searchHistory.length; i++) {
        buttons.push('<button class="btn btn-secondary col-12 addedButton">' + searchHistory[i] + '</button>');
    }

    $('.searchHistory').html(buttons.join(""));
}