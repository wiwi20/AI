import { VegaScatterplot } from "./libraries/vegascatterplot.js"

const options = { task: 'regression', debug: true }
const nn = ml5.neuralNetwork(options)
let cardata 
let plot

function loadData() {
    Papa.parse("./data/cars.csv", {
        download: true,
        header: true, // true maakt objecten, false maakt arrays
        dynamicTyping: true,
        complete: (results) => {
            console.log("Data: ",results.data)
            drawScatterPlot(results.data)
        }
    })
}
let trainButton = document.getElementById("train-model")
trainButton.onclick = function() {init()};

let saveButton = document.getElementById("save-model")
saveButton.onclick = function() {saveModel()};
saveButton.style.display = "none"

//
// teken de scatterplot voor de fake data
//

async function drawScatterPlot(data) {
    cardata = data

    plot = new VegaScatterplot()
    await plot.initialise("horsepower", "mpg", 600, 400, cardata)

    createNeuralNetwork()
}

//
// maak en train het neural network
//
async function createNeuralNetwork() {
    // maak neural network
    const options = { task: 'regression', debug: true }
    const nn = ml5.neuralNetwork(options)

    // voeg data toe aan neural network met addData
    cardata.sort(() => (Math.random() - 0.5))

    // een voor een de training data toevoegen aan het neural network
    for (let car of cardata) {
        nn.addData({ horsepower: car.horsepower }, { mpg: car.mpg })
    }

    // train neural network
    nn.normalizeData()
    nn.train({ epochs: 12 }, () => finishedTraining()) 
    
    function finishedTraining(){
        console.log("Finished training!")
        saveButton.style.display = "block"
    }
}

//
// predictions
//
async function finishedTraining() {
    document.querySelector('button').addEventListener('click', saveModel);
    // let testCar = { horsepower: 90 }

    let predictions = []
    for(let i = 0; i< 300; i++) {
        let prediction = await nn.predict([i])
        predictions.push({horsepower:1, mpg:prediction[0].value})
    }
}

async function saveModel(){
    console.log("model saved!")
    nn.save()
}

function init(){
    trainButton.style.display = "none"
    loadData()
}