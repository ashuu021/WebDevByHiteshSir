function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success=true;
            if (success) {
                resolve("Data is fetched successfully.")
            }else{
                reject("Error in fetching data.")
            }
        }, 3000);

    })
};
fetchData()
.then((data)=>{
    console.log(data);
    
    return data.toLowerCase();})
.then((value)=>console.log(value)
)
.catch((error)=>console.log(error)
)

