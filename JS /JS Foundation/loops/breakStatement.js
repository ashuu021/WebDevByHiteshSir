let nameList =["anshu","pari","anshika","abhi"];
let checkName = [];
for (let i = 0; i < nameList.length; i++) {
     if (nameList[i]==="anshika") {
        break;
     }
    checkName.push(nameList[i])
}
console.log(checkName);
