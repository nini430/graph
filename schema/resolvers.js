const {userList,movieList} = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },
    movies:()=>{
        return movieList;
    },
    movie:(parent,args)=>{
        const name=args.name;
        const movie=_.find(movieList,{name})
        return movie;
    }
  },
  User:{
    favouriteMovies:()=>{
        return _.filter(movieList,(movie)=>movie.yearOfPublication>=2000&&movie.yearOfPublication<=2010)
    }
  },
  Mutation:{
    createUser:(parent,args)=>{
      const user=args.input;
      const lastId=userList[userList.length-1].id;
      user.id=lastId+1;
      userList.push(user);
      return user;

    },
    updateUsername:(parent,args)=>{
        const {newUsername,id}=args.input;
        let userUpdated;
        userList.forEach(user=>{
          if(user.id===+id) {
            user.username=newUsername;
            userUpdated=user;
          }
        })

        return userUpdated;


    },
    deleteUser:(parent,args)=>{
        const id=args.id;
        _.remove(userList,(user)=>user.id===Number(id));
        return null;
    }
  }
};

module.exports = { resolvers };
