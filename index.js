let i = 1;
let i_user = 1
function gameFunctionStone() {
    let stone = Math.random();
    if (stone < 0.3231313) {
        alert("Siz qoldingiz, kompyuter qog'ozni tanladi")
        let resultComputer = i++;
        document.querySelector(".span_comp").innerHTML = resultComputer;
    } else if (stone < 0.6902131022842184 && stone > 0.3231313){
        alert("Siz yutdingiz kompyuter qaychini tanladi")
        let resultPerson = i_user++;
        document.querySelector(".span_you").innerHTML = resultPerson;
    } else {
        alert("Nichya, kompyuter ham toshni tanladi")
    }
}

function gameFunctionScissors() {
    let scissors = Math.random();
    if (scissors < 0.3231313) {
        alert("Siz qoldingiz, kompyuter toshni tanladi")
        let resultComputer = i++;
        document.querySelector(".span_comp").innerHTML = resultComputer;
    } else if (scissors < 0.6902131022842184 && scissors > 0.3231313){
        alert("Siz yutdingiz, kompyuter qog'ozni tanladi")
        let resultPerson = i_user++;
        document.querySelector(".span_you").innerHTML = resultPerson;
    } else {
        alert("Nichya, kompyuter ham qaychini tanladi")
    }
}

function gameFunctionPaper() {
    let paper = Math.random();
    if (paper < 0.3231313) {
        alert("Siz qoldingiz, kompyuter qaychini tanladi")
        let resultComputer = i++;
        document.querySelector(".span_comp").innerHTML = resultComputer;
    } else if (paper < 0.6902131022842184 && paper > 0.3231313){
        alert("Siz yutdingiz, kompyuter toshni tanladi")
        let resultPerson = i_user++;
        document.querySelector(".span_you").innerHTML = resultPerson;
    } else {
        alert("Nichya, kompyuter ham qog'ozni tanladi")
    }
}