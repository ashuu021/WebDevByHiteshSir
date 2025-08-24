let nameList =["anshu","pari","anshika","abhi"];
let checkedName = [];
for (let i = 0; i < nameList.length; i++) {
     if (nameList[i]==="anshika") {
        continue;
     }
    checkedName.push(nameList[i])
}
console.log(checkedName);
