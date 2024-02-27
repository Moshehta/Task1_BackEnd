const fs = require("fs")
const readData = (id) => {

    const allData = loadData()

    const obj = allData.find((obj)=>{
       return  obj.id == id 
    })

    if (obj) {
      console.log(`|   ${obj.id.toString().padEnd(6)}|   ${obj.fname.padEnd(14)}|   ${obj.lname.padEnd(13)}|   ${obj.age.toString().padEnd(7)}|   ${obj.city.padEnd(10)}|`);
    } else {
      console.log("id not found")
    }
   
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
  readData: readData
};