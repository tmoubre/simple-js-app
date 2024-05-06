// let userList = [
//     {
//       name: 'Liz',
//       age: 20
//     },
//     {
//       name: 'John',
//       age: 30
//     },
//     {
//       name: 'Sammy',
//       age: 40
//     }
//   ];
// //   for(let i = 0; i < userList.length; i++) {
// //     console.log(userList[i].name + ' is ' + userList[i].age + ' years old.');
// //   }

//   function myLoopFunction(user) {
//     console.log(user.name + ' is ' + user.age + ' years old.');
//   }
//   userList.forEach(myLoopFunction);

?


let userlist =[
    {
        name: 'Troy',
        age: 57,
        children:['jordan']
},
{
    name: 'Todd',
    age: 58,
    children:['']
},
{
    name: 'Kathy',
    age: 78,
    children:['troy', 'brett', 'blaine']
}
];

//  for (let i=0; i<userlist.length; i++){
// //     console.log(userlist[i].name + ' is '+ userlist[i].age + 'years old')
// // }
// // userlist.forEach(function(a1){
// //     console.log(a1.name + ' is ' + a1.age + 'years old')
//  }
// userlist.forEach(item => console.log(item));
Object.keys(userlist).forEach(function(property){
    document.write(property + ':' + userlist[property] + '<br>');
});