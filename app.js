


// todo app
strange = 0;
window.addEventListener('keydown', function (e) {
    document.getElementById("auto2").value = `${e.key}`
    if (document.getElementById("auto2").value == "Enter") {
        foo()
    }
}, false);
function foo() {
    strange++
    var list = document.getElementById("list");
    var value = document.createElement("li");
    var text = document.getElementById("auto1").value;
    var t = document.createTextNode(text)
    var delBtn = document.createElement("button");
    var editBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    var editText = document.createTextNode("EDIT");
    value.appendChild(t);
    delBtn.appendChild(delText);
    editBtn.appendChild(editText);

    //delItem(this)  is used to pass the element
    value.setAttribute("id", "sus")
    delBtn.setAttribute("onclick", "delItem(this)")
    delBtn.setAttribute("class", "but")
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class", "but")


    list.appendChild(value);
    value.appendChild(delBtn);
    value.appendChild(editBtn);
    document.getElementById("auto1").value = "";
}

function res() {
    document.getElementById("list").remove();
}


function delItem(e) {
    //e.parentNode is used to get the element's parent
    e.parentNode.remove();
    // .remove() function is used to remove or delete the element
}


function editItem(t) {
    var y = prompt("ENTER UPDATED TEXT", t.parentNode.firstChild.nodeValue)
    t.parentNode.firstChild.nodeValue = y
}

// append child is used when you have created an element of html from javascript & now if your are wantng to add text in it instead of inneerhtml or value;





//we use curly brackets when we are generating object

// var webCourse = {
//     t1 : "ali",
//     t2 : "ghous",
//     t3 : "basit"
// }
// console.log(webCourse)


// adding value in object
// webCourse.t4 = "nadia";
// console.log(webCourse)

// to check for a property in a particular element or array or object
// any variable + equals to + the name of which you want to ask + in + the name of the array or object
// var t = "t6" in webCourse;
// alert(t)


// var myQuestions = [
//     {

//         question: "WHAT IS YOUR NAME",
//         answer: {
//             a: "ali",
//             b: "ghous",
//             c: "basit"
//         },
//         correctAnswer: "c"
//     },
//     {

//         question: "WHAT IS YOUR AGE",
//         answer: {
//             a: "15",
//             b: "12",
//             c: "16"
//         },
//         correctAnswer: "b"
//     },
// ]