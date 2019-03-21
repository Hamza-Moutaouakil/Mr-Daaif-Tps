/*class Test {
    constructor(data, json) {
        this.json = json;
        console.log(this.json.Button)
    }
}
function makeTable(l, c) {
    var table = document.createElement("table");
    table.classList.add("table");
    for (i = 0; i < l; i++) {
        var row = document.createElement("tr");
        for (j = 0; j < c; j++) {
            var colm = document.createElement("td");
            colm.innerHTML = "hiii";
            row.appendChild(colm);
        }
        table.appendChild(row);
    }
    return table;
}
function afficheTable() {
    var l = document.getElementById("numberL");
    var c = document.getElementById("numberC");
    var table = document.getElementById("table").innerHTML="";
    table.appendChild(makeTable(l.value, c.value));
}
document.getElementById("submit").addEventListener("click", () => {
    afficheTable();
});
*/
/*var tst = new Test("haloui",{
    data:"jampda",
    Button:"ButtonEvent",
    objArray:[
        ,
        {
            ,
        }
    ]
});*/

var element  = document.getElementById("content")
var data = [{
    pic :"http://lorempixel.com/300/300/people?1",
    name:"test",
    bio:"bio"
},{
    pic :"http://lorempixel.com/300/300/people?55",
    name:"test",
    bio:"bio"
},{
    pic :"http://lorempixel.com/300/300/people?2",
    name:"test",
    bio:"bio"
},{
    pic :"http://lorempixel.com/300/300/people?3",
    name:"test",
    bio:"bio"
},{
    pic :"http://lorempixel.com/300/300/people?4",
    name:"test",
    bio:"bio"
}]
function cloneData(data,element){
    data.forEach(function (val) {
       var cu = element.cloneNode(true);
        cu.style.display = ""
        cu.querySelector("img").setAttribute("src",val.pic)
        cu.querySelector("h1").innerHTML = val.name;
        cu.querySelector("p").innerHTML = val.bio
        document.getElementById("global").appendChild(cu);
    })
}
cloneData(data,element)


