const userList=[
    {
        id:1,
        name:"John",
        username:"John",
        age:20,
        nationality:"CANADA",
        friends:[
            {
                id:2,
                name:"Pedro",
                username:"PedroTech",
                age:20,
                nationality:"BRAZIL"
            },
            {
                id:5,
                name:"Kelly",
                username:"kelly2019",
                age:5,
                nationality:"CHILE"
            },

        ]
          },
    {
        id:2,
        name:"Pedro",
        username:"PedroTech",
        age:20,
        nationality:"BRAZIL"
    },
    {
        id:3,
        name:"Sarah",
        username:"cameron",
        age:25,
        nationality:"INDIA",
        friends:[
            {
                id:2,
                name:"Pedro",
                username:"PedroTech",
                age:20,
                nationality:"BRAZIL"
            },
        ]
    },
    {
        id:4,
        name:"Rafe",
        username:"rafe123",
        age:60,
        nationality:"GERMANY"
    },
    {
        id:5,
        name:"Kelly",
        username:"kelly2019",
        age:5,
        nationality:"CHILE"
    },

]

 const movieList=[
    {
        id:1,
        name:"Avengers Endgame",
        yearOfPublication:2019,
        isInTheaters:true

    },
    {
        id:1,
        name:"Interstellar",
        yearOfPublication:2007,
        isInTheaters:true

    },
    {
        id:3,
        name:"SuperBad",
        yearOfPublication:2009,
        isInTheaters:true

    },
    {
        id:4,
        name:"PedroTech The movie",
        yearOfPublication:2035,
        isInTheaters:false
        
    },

]

module.exports={userList,movieList};