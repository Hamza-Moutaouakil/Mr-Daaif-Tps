//  chemin relatif : reponses/script-01.js
// 

$("#ce div:first").css("color","red");

$("#ce").append($("#ce div:first").clone());

$("#ce").prepend($("#ce div:last"));

$("<div>").appendTo("#ce").text($("#ce div").length);


$("#ce div").each((ind, el) => $(el).prepend(ind+" "))