const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })


// // Example 1 for path params
// router.get('/students/:studentName', function(req, res){
//     // ':' denotes that the following part of route is a variable
//     // The value of this variable is what we are sending in the request url after /students
//     // This value is set in the form of an object inside req.params
//     // The object contain key value pairs
//     // key is the variable in the route
//     // value is whatever dynamic value sent in the request url
//     let myParams = req.params

//     // params attribute is fixed in a request object
//     // params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// // Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })
// //problem 1 
// router.get('/movies' , function(req ,res) { 
// let movies1 = ["Rang de Basanti" , "The Shining" , "Lord of the rings " , "Batman Begins"]
// console.log("The List Of The Movies",movies1)
// res.send("List of movies" + movies1)

// })
// // problem 2
// router.get('/movies/:indexNumber' , function(req,res){
//     const movie$arr = ["Rang De Basanti" , "The Shining" , "Lord of the rings" , "Batman Begins"]
//     const index = req.params.indexNumber
//     console.group("print movie name using index" , movie$arr)
//     res.send ("Movie name by Index" + movie$arr[index])
// })
// //problem 3
// router.get('/movies/:index',function(req,res){
//     const myParam=req.params
//     const moviesList=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    
//     const myIndex=myParam.index
//     if(myIndex>3 || myIndex<0){
//         res.send("Your index is invalid ")
    
//     }
//     else
//     {
//         res.send(moviesList[myIndex])
//     }
// })
// //problem 4
// router.get('/films',function(req,res){
//     const filmsObject=[ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        res.send(filmsObject)
       
// })
// module.exports = router;
// //problem 5
// router.get('/films/:filmId',function(req,res){
//     const myParam=req.params
//     const filmsObject=[ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

      
//        for(let i=0;i<filmsObject.length;i++){
//         const myId=myParam.filmId
//         if(i==myId-1 ){
//             res.send(filmsObject[i])
//             break;

//         }
//         else if(i==filmsObject.length-1){
//         res.send("no such movie with this id")
//        }
//        }
//     })

// let players =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ]
//        },
//        {
//            "name": "gopal",
//            "dob": "1/09/1995",
//            "gender": "male",
//            "city": "delhi",
//            "sports": [
//                "soccer"
//            ],
//        },
//        {
//            "name": "lokesh",
//            "dob": "1/1/1990",
//            "gender": "male",
//            "city": "mumbai",
//            "sports": [
//                "soccer"
//            ],
//        },
//    ]
 
//    router.post('/players', function (req, res) {
 
//        //LOGIC WILL COME HERE
//        let newPlayer = req.body
//        let playerExists=players.find(x =>x.name===newPlayer.name)
//        if(playerExists){
//        res.send('Player name already exists')
//        }
//        else{
   
//            players.push(newPlayer)
    
//            res.send({newPlayers:players})
//        }
           
//        });
 
       
  
// module.exports = router;

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC", 
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 router.post('/person' , function(req,res){
     const votingAge =req.query.votingAge
 
     const updatedPersons = []
     persons.forEach( (person)  =>{
         if (person.age > votingAge){
             person.votingStatus =true 
             updatedPersons.push(person)
         }
     })
     return res.send({updatedPersons: updatedPersons})
 
 })
 




module.exports = router;