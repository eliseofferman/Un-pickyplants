import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb://localhost/green-thumb", { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connection to mongodb"))

const Plant = mongoose.model("Plant", {
  id: String,
  name: String,
  imageFileName: String,
  sunAmount: [{
    type: String
  }],
  waterAmount: [{
    type: String
  }],
  description: String,
  color: String,
  maintainence: String,
  location: String,
  nutrient: String,
  soil: String

})

app.get("/", (req, res) => {
  Plant.find().then(plants => {
    res.json(plants)
  })
})

app.post("/", (req, res) => {
  const plant = new Plant(req.body)

  plant.save()
    .then(() => { res.status(201).send("Plant created") })
    .catch(err => { res.status(400).send(err) })
})

app.get("/plants/:plantId", (req, res) => {
  Plant.findById(req.params.plantId).then(plant =>{
    res.json(plant)
  })
})


app.listen(8080, () =>
  console.log("Example app listening on port 8080!"))
