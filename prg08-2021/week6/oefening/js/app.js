let nn
let weatherdata = []
function loadData() {
    Papa.parse("./data/weather.csv", {
        download: true,
        header: true, 
        dynamicTyping: true,
        complete: (results) => cleanData(results.data)
    })
}

// TODO data kiezen en opschonen
function cleanData(data) {
    weatherdata = data

    weatherdata = weatherdata.map(day => ({
        MinTemp: day.MinTemp,
        MaxTemp: day.MaxTemp,
        RainTomorrow: day.RainTomorrow
    }))
    console.log(weatherdata)

    let cleanedData = weatherdata
    .filter(day => (day.MinTemp != null && day.MaxTemp != null))
    .filter(day => (!isNaN(day.MinTemp) && !isNaN(day.MaxTemp)))

    weatherdata = cleanedData
    console.log(weatherdata)
    // createNeuralNetwork(weatherdata)
}


// create neural network
function trainNeuralNetwork(data) {
    const nn = ml5.neuralNetwork({ task: 'classification', debug: true })

    for (let day of data) {
        const inputs = { MinTemp: day.MinTemp, MaxTemp: day.MaxTemp }
        const output = { RainTomorrow: day.RainTomorrow } 
        nn.addData(inputs, output)
    }

    nn.normalizeData()
    nn.train({ epochs: 32 }, () => finishedTraining())
}



// make a classification
function classify() {
    console.log("done training!")
    
    const input = { Evaporation: 13, Rainfall: 13 } // TODO moet kloppen met je cleaned data
    
    nn.classify(input, (error, result) => {
        console.log(result)
        console.log(`Rain Tomorrow: ${result[0].label}`)
    })
}

function finishedTraining() {
    const fakeDay = { Pressure: 7, PreviousRain: 10 }
    
    nn.classify(fakeDay, (error, result) => {
        console.log(result)
        console.log(`Rain Tomorrow: ${result[0].label}`)
    })
}
loadData()

