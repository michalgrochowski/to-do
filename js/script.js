/* TODO:
- clicking "x" also shoudl remove that item from localStorage - line 29 - in progress
*/

(function() {
/* Load items from localStorage if there are any */
window.addEventListener("DOMContentLoaded", function() {
    var myList = document.getElementById("list");
    for (var i = 0; i < localStorage.length; i++) {
        var item = document.createElement("li");
        var localKey = localStorage.getItem(localStorage.key(i));
        item.innerHTML = JSON.parse(localKey);
        if (item.innerHTML.indexOf("check") != -1) {
            item.className = "itemDone";
        } else {
            item.className = "item";
        }
        myList.appendChild(item);
    }

    var x = document.getElementsByClassName("closer"); // get all elements with "closer" class
    /* This function deletes parent element of clicked element - in this case a clicked element will be a "span" element with "closer" class, and it's parent is "li" element */
    function deleteItem() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        /*for (i = 0; i < x.length; i++) { //
            window.localStorage.removeItem(i); 
        }*/
    }

    /* this function allows to delete item from the list */
    for (i = 0; i < x.length; i++) { // simple loop that adds eventListener to all elements with "closer" class
        x[i].addEventListener("click", deleteItem); // on click function "deleteItem" is invoked
    }

    /* This function adds "li" element to the list with text value from input #newInput, and then adds a span with innertext "X" and class .closer */
    function addItem() {
        var myList = document.getElementById("list"); // get the main list ("ul")
        var newListItem = document.createElement("li"); //create a new "li" element
        var itemText = document.getElementById("newInput").value; // read the input value from #newInput
        var listText = document.createTextNode(itemText); // create text node with calue from input
        newListItem.appendChild(listText); // add text node to new "li" element
        newListItem.className = "";
        if (itemText === "") { // if input value is empty
            alert("Pole nie może być puste"); // show this alert
        } else { // if it's not empty
            var x = document.createElement("span"); // create a new "span" element
            x.innerText = "X"; // add inner text to "span" element
            x.className = "closer"; // add class to "span" element
            x.addEventListener("click", deleteItem, false);
            myList.appendChild(newListItem); // add created "li" element to "ul"
            newListItem.className = "item"; // add class to new "li" element
            newListItem.appendChild(x); // add a "span" to new "li" element
            itemText = document.getElementById("newInput"); // read current input value
            itemText.value = ""; // set current input value to null
        }
    }
  
    /* addButton reffers to the button used to add new elements to the list. After clicking it, function "addItem" is called */
    var addButton = document.getElementById("createNew"); // fetch the "createNew" button
    addButton.addEventListener("click", addItem); // add click event to "createNew" button and run function
    /* This function clears all added elements from the list */

    /* This script adds a method in which you can also add a new "li" item with "enter" keydown */
    var textAdd = document.getElementById("newInput"); // target input
    textAdd.addEventListener ("keypress", function (e) { // add event listener on "keypress"
        var key = e.which || e.keyCode; // which key is being used
        if (key === 13){ // if pressed key is "enter" (13)
        e.preventDefault(); // prevent default "enter" action
        addItem(); // addItem function is invoked
        }
    });

    function clearList(){
        var myList = document.getElementById("list"); // get the "ul" element
        myList.innerHTML = ""; // clear all it's children
        window.localStorage.clear();
    }
  
    /* deleteAll variable reffers the button used to clear all items. After clicking it, function "deleteAll" is called */
    var deleteAll = document.getElementById("deleteAll"); // fetch the "deleteAll" button
    deleteAll.addEventListener("click", clearList); // add click event to "deleteAll" button and run finction

    /* This code changes the class of clicked "li" element from "item" to "itemDone" using event delegation method */
    document.getElementById("list").addEventListener("click", function(e) {
        if (e.target && e.target.matches("li.item")) { // if event target matches an "li" item with "item" class
            e.target.className = "itemDone"; // change class to "itemDone"
            var check = document.createElement("i"); // create new "i" element
            check.className = "fa fa-check done"; // add class to "i" element
            e.target.appendChild(check); // add new "i" element to event target ("li")
        } else if (e.target && e.target.matches("li.itemDone")) {// if event target matches an "li" item with "itemDone" class
        e.target.className = "item"; // change class to "item"
            var done = e.target.getElementsByClassName("done"); // choose target with "done" class
            for (var i = 0; i < done.length; i++) {
            e.target.removeChild(done[i]); // remove "i" element with "done" class from target
            }
        }
    });

    /* Save all "li" items form the list to localStorage */
    var saveAll = document.getElementById("saveAll"); // get the "saveAll" button
    saveAll.addEventListener("click", function() { // add event listener to "saveAll" button
        window.localStorage.clear();
        var item = document.getElementsByTagName("li"); // get all vurrent "li" items
        for (var i = 0; i < item.length; i++) { //for every "li" item set a new localStorage item with corresponding key
            localStorage.setItem([i], JSON.stringify(item[i].innerHTML));
        }
    });
});
})();