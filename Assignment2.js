
var VoteCount = {"1": 0,"2":0, "3": 0, "4": 0,"5": 0,"6": 0,"7": 0,"8": 0}

function myFunction(id) {
    VoteCount[id]= VoteCount[id]+1;
    document.getElementById(id).innerHTML = VoteCount[id];

    alert("Your Vote is Succesfully Done !");
};