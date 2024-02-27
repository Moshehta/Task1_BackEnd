const fs = require("fs")
const deleteData = (id) => {
    const Data = loadData()

    const dataToKeep = Data.filter((obj) => {
       return obj.id!= id 
      
    })
    console.log(dataToKeep)
    savaAllData(dataToKeep)
    
    console.log("Item Deleted")
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
 const savaAllData = (Data) => {
   const AllDataJson = JSON.stringify(Data)
   fs.writeFileSync("data.json" , AllDataJson )
}
 module.exports = {
   deleteData: deleteData
 };