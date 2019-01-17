/* global $ */
var totalScore = 0;

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        findScore1(q1Input);
        
    });

});

function findScore1(answer) {
    if (answer ==="Winter"){
        totalScore = totalScore +1;
    } else if (answer==="Summer")
    totalScore = totalScore + 2;
}


function findScore2(answer) {
    if (answer ==="The Adventerous One"){
        totalScore = totalScore + 4;
    }
}

function findScore3(answer) {
    console.log(answer);
}