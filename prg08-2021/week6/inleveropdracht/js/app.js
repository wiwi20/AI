let nn
let animal

const classifier = ml5.imageClassifier('MobileNet', modelLoaded)
let synth = window.speechSynthesis
let inputField = document.querySelector("#inputfield")
let playButton = document.querySelector("#playbutton")

const image = document.getElementById('output')
const fileButton = document.querySelector("#file")
let resultText = document.getElementById('output-placeh')

function loadModel() {
    console.log('loadModel Loaded!')
}

function modelLoaded() {
    console.log('Model Loaded!')
    let animals = ["cat", "rabbit", "pig"]
    animal = animals[Math.floor(Math.random() * animals.length)]
    resultText.innerHTML = "Make a picture of a <b>" + animal
}

function classifyImage() {
    speak(`I think this photo shows a tennis ball!`)
}

fileButton.addEventListener("change", (event)=>loadFile(event))

function loadFile(event) {
    image.src = URL.createObjectURL(event.target.files[0])
}

image.addEventListener('load', () => userImageUploaded())

function userImageUploaded(){
    console.log("The image is now visible in the DOM")
    classifier.classify(document.getElementById('output'), (err, results) => {
        console.log(results)
        // document.getElementById('result').innerHTML = `This is a ${results[0].label}`
        // speak(`This is a ${results[0].label}`)
        if(results[0].label.includes(animal) || results[1].label.includes(animal)){
            speak(`Yes this is a ${animal}.`)
        } else {
            speak(`No its not correct.`)
        }
    })
}

// playButton.addEventListener("click", () => {
//     let text = inputField.value
//     speak(text)
// })

function speak(text) {
    if (synth.speaking) {
        console.log('still speaking...')
        return
    }
    if (text !== '') {
        let utterThis = new SpeechSynthesisUtterance(text)
        utterThis.lang = 'en-US'
        synth.speak(utterThis)
    }
}

loadModel()