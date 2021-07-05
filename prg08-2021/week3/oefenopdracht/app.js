console.log("hello")

const knn = new kNear(3)

knn.learn([9.2, 8.1, 2], "cat")
knn.learn([9.1, 9, 1.95], "cat")
knn.learn([9, 10, 2.1], "cat")

knn.learn([17, 15.5, 5], "dog")
knn.learn([20, 20, 6.2], "dog")
knn.learn([16.7, 16, 3.3], "dog")

let unknowAnimal = [11, 2, 1]
console.log(`Ik denk dat dit een ${knn.classify(unknowAnimal)}`)