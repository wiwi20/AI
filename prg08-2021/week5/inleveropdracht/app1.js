let nn
function Pageload() {
    const options = { task: 'regression', debug: true }
    nn = ml5.neuralNetwork(options)

 const modelInfo = {
    model: './model/model.json',
    metadata: './model/model_meta.json',
    weights: './model/model.weights.bin',
  };
    nn.load(modelInfo) 
}

async function miles(){
console.log(nn.data)

 let input = Number(document.getElementById ("input").value)
 let horsepower = {horsepower: input}
 const results = await nn.predict(horsepower)

}
document.querySelector('button').addEventListener('click', miles);
Pageload()