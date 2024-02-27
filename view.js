const fs = require("fs")
const  listData = () => {
    const Data = loadData()
    console.log("----------------------------------------------------------------------------------------");
    console.log("|   ID   |   First Name   |   Last Name   |   Age   |   City   |");
    console.log("----------------------------------------------------------------------------------------");

    // Print data rows
    Data.forEach((obj) => {
        console.log(`|   ${obj.id.toString().padEnd(6)}|   ${obj.fname.padEnd(14)}|   ${obj.lname.padEnd(13)}|   ${obj.age.toString().padEnd(7)}|   ${obj.city.padEnd(10)}|`);
    });


    // Print footer
    console.log("--------------------------------------------------");
}
const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data.json").toString()
        return  JSON.parse(DataJson)
    }
    catch {
        return []
    }
    
  }
  module.exports = {
    listData: listData
  };