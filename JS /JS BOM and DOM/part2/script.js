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