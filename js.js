var ul = document.getElementsByTagName("ul")[0];
function Song(name, author, duration) {
    this.name = name;
    this.author = author;
    this.duration = duration;
    this.isPlayng = false;
}

var playlist = [
    new Song("Bohemian Rhapsody", "Queen", 4),
    new Song("Comfortably Numb", "Pink Floyd", 3.5),
    new Song(" Hotel California", "Eagles.", 5.2),
    new Song("Eagles.", "John Lennon", 3.8),
    new Song("Bohemian Rhapsody", "Queen", 4),
    new Song("Comfortably Numb", "Pink Floyd", 3.5),
    new Song("Eagles.", "John Lennon", 3.8),
    new Song("Bohemian Rhapsody", "Queen", 4),
    new Song("Comfortably Numb", "Pink Floyd", 3.5),

];

function makeList() {
    var list = "<ul>";
    for (var i = 0; i < playlist.length; i++) {
        list += "<li><i class='fas fa-music'></i> " + playlist[i].name + " ";
        list += playlist[i].author + " ";
        list += playlist[i].duration + " minutes ";

    }
    list += "</li>";
    return list;
}
var lista = makeList();

function render(p) {
    var el = document.getElementById("lista");
    el.innerHTML = p;
}
render(lista);
var el = document.getElementById("lista");
var tx = document.getElementById("tx");


var select;

el.addEventListener("click", function (e) {
    if (e.target.tagName = "LI") {
        var li = document.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove("selected");
        }
        select = e.target;
        e.target.classList.toggle("selected");
        tx.value = e.target.textContent;
    }
});

var play = document.getElementsByClassName("fa-2x far fa-play-circle")[0];
var next = document.getElementsByClassName("fa-2x fas fa-step-forward")[0];
var prev = document.getElementsByClassName("fa-2x fas fa-step-backward")[0];
var play = document.getElementsByClassName("fa-2x far fa-play-circle")[0];

next.addEventListener("click", function (e) {
    var li = document.getElementsByTagName("li");
    var sel;

    for (var i = 0; i < li.length; i++) {
        if (selectat = li[i].className === "selected") {
            sel = i;
            li[i].classList.remove("selected");
        }
    }
    if (sel + 1 < li.length) {
        li[sel + 1].className = "selected";
        tx.value = li[sel + 1].textContent;
    } else {
        li[0].className = "selected";
        tx.value = li[0].textContent;
    }


});

prev.addEventListener("click", function (e) {
    var li = document.getElementsByTagName("li");
    var sel;

    for (var i = 0; i < li.length; i++) {
        if (selectat = li[i].className === "selected") {
            sel = i;
            li[i].classList.remove("selected");
        }
    }
    if (sel - 1 >= 0) {
        li[sel - 1].className = "selected";
        tx.value = li[sel - 1].textContent;
    } else {
        li[li.length - 1].className = "selected";
        tx.value = li[li.length - 1].textContent;
    }

});

play.addEventListener("click", function () {
    var li = document.getElementsByTagName("li");
    var el = document.createElement("i");
    var sel;
    for (var i = 0; i < li.length; i++) {
        if (selectat = li[i].className === "selected") {
            sel = i;
        }

    }
    tx.value = li[sel].textContent + "is playing";

});




