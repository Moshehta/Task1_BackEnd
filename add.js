const fs = require("fs")
const addData = (id ,fname , lname , age , city) => {

    const Data = loadData()

    const duplicatedDate = Data.filter((obj) => {
      return obj.id === id 
    })

    if (duplicatedDate.length == 0) {
      Data.push({
          id : id,
          fname : fname,
          lname : lname,
          age : age,
          city : city
       })
 
       savaAllData(Data)
    } else {
      console.log("ERROR DUPLICATED ID")
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

const savaAllData = (Data) => {
    const AllDataJson = JSON.stringify(Data)
    fs.writeFileSync("data.json" , AllDataJson )
}
module.exports = {
  addData: addData
};