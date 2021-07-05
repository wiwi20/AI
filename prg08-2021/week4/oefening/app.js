import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/mushrooms.csv"
const trainingLabel = "class"
const ignoredColumns = [""]

// inladen csv data
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => {
            console.log(results)
            console.log(results.data)
            trainModel(results.data)
         } 
         // train het model met deze data
    })
}

//
// MACHINE LEARNING - Bouw de Decision Tree
//
function trainModel(data) {
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())

    predict(decisionTree)

function predict(tree){
    let paddestoel = {
        cap_shape: "x",
        cap_surface: "s",
        cap_color:"n",
        bruises:"t",
        odor:"l",
        gill_attachment:"f",
        gill_spacing:"c",
        gill_size:"n",
        gill_color:"k",
        stalk_shape:"e",
        stalk_root:"c",
        stalk_surface_above_ring:"s",
        stalk_surface_below_ring:"s",
        stalk_color_above_ring:"w",
        stalk_color_below_ring:"w",
        veil_type:"p",
        veil_color:"w",
        ring_number:"o",
        ring_type:"p",
        spore_print_color:"n",
        population:"n",
        habitat:"g"
    }
    let prediction = tree.predict(paddestoel)
    let response = document.getElementById("class")
    if (prediction == "p"){
        response.innerHTML = 'Deze paddenstoel heeft class p'
    }else{
        response.innerHTML = 'Deze paddenstoel heeft class e'
    }
    testPassenger(tree)
}

    function testPassenger(passenger) {
        let amountCorrect = 0;
        for (let i = 0; i < testData.length; i++) {
    
        // kopie van passenger maken, zonder het label
        let passengerWithoutLabel = Object.assign({}, testData[i])
        delete passengerWithoutLabel.class

        // prediction
        let prediction = passenger.predict(passengerWithoutLabel)
       
        // vergelijk de prediction met het echte label
            if(prediction == testData[i].class){
                amountCorrect += 1;
            }
        }
        let accuracy = amountCorrect / testData.length
        document.getElementById("accuracy").innerHTML = ` Accuracy :   ${accuracy.toFixed(2)} %`
        console.log(`Accuracy : ${accuracy}`)
    }
}   
   
loadData() 