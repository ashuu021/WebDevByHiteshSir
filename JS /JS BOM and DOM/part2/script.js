//Example 1
document.getElementById("changeTextButton").addEventListener('click',function () {
    let para =document.getElementById("myParagraph");
    para.textContent="The para is changed"
});

//Example 2
document.getElementById("highlightFirstCity")
        .addEventListener("click",function () {
            let citiesList=document.getElementById("citiesList")
            // console.log(citiesList.firstElementChild);
         citiesList.firstElementChild.classList.add("highlight")   
        });

//Example 3
document.getElementById("changeOrder").addEventListener("click",function () {
    let coffeeList = document.getElementById("coffeeType");
    coffeeList.textContent="Espresso";
    coffeeList.style.backgroundColor="orange";
    coffeeList.style.padding="5px"
})

//Example 4
document.getElementById("addNewItem").addEventListener("click",function () {
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5

document.getElementById("removeLastTask").addEventListener("click",function () {
 let taskList = document.getElementById("taskList");
 taskList.firstElementChild.remove();
//  taskList.lastElementChild.remove();
});

// Example 6
document.getElementById("clickMeButton").addEventListener("click",function () {
    alert("Hello")
    
});

//Example 7
 document.getElementById("teaList").addEventListener("click",function (event) {
    if(event.target ){
        alert("You selected the "+event.target.textContent)
    }
 })
// Example 8
document.getElementById("feedbackForm").addEventListener("submit",function (event) {
    event.preventDefault();
    let feedback =document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent=`Feedback is ${feedback}`.toUpperCase()
});
//Example 9 
 document.addEventListener("DOMContentLoaded",function () {
    document
    .getElementById("domStatus").textContent="Dom is loaded..";

 });
//  Example 10
document.getElementById("toggleHighlight").addEventListener("click",function () {
    let discriptionText=document.getElementById("descriptionText");
    discriptionText.classList.toggle("highlight")
});