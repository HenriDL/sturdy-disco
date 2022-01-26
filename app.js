//jshint esversion:6

const mongoose = require('mongoose')
// Connection URI
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Why no name?']
  },
  rating: {
    type:Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  //name: "Apple",
  rating: 10,
  review: "Just peachy."
});

// fruit.save()

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

//person.save()

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me."
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture."
});

// Fruit.insertMany([kiwi,orange,banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('All fruits were saved to the database successfully!')
//   };
// });

Fruit.find(function(err, fruits) {
  if (err){
    console.log(err);
  }else{
    
    fruits.forEach(function(fruit){
      console.log(fruit.name)
    });
  };
});

Fruit.updateOne({_id:"61e9883df5248ebe0f732afb"}, {name: "Peach"}, function(err){
  if(err){
    console.log(err)
  }else{
   
    console.log("Fruit successfully updated!")
  }
});