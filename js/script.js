/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        findScore1(q1Input);
        var totalScore;
    });

});

function findScore1(answer) {
    console.log(answer);
}

function findScore2(answer){
    
}

function findScore3(answer){
    
}