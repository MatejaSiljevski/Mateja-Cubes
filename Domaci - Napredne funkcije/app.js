// task 1

var Student = function(name, lastN, age, averageGrade){
    this.name = name
    this.lastN = lastN
    this.age = age
    this.averageGrade = averageGrade
}


//task 2


var FootballPlayer = function(name, age, goals, yellowCards){
    this.name = name
    this.age = age
    this.goals = goals
    this.yellowCards = yellowCards
}

var messi = new FootballPlayer('Lionel Messi', 33, 643, 86)
var Ronaldinho = new FootballPlayer('Ronaldo de Asis Moreira - Ronaldinho Gaucho', 40, 197, 50)
var Ronaldo = new FootballPlayer('Cristiano Ronaldo', 35, 750, 75)

console.log(messi)


//task 3

var players = [['Lionel Messi', 33, 643, 86], ['Ronaldo de Asis Moreira - Ronaldinho Gaucho', 40, 197, 50], ['Cristiano Ronaldo', 35, 750, 75]]
var PlayersPacked = []

for(var i = 0; i < players.length; i++){
PlayersPacked[PlayersPacked.length] = new FootballPlayer(players[i][0], players[i][1], players[i][2], players[i][3])
}

console.log(PlayersPacked)


//task 4

var NumbersGame = function(num1, num2, funkcija){
    this.num1 = num1
    this.num2 = num2
    this.funkcija = funkcija
}

var multiply = new NumbersGame (3, 5, function(){
    return 3 * 5
})

var divide = new NumbersGame(12, 6, function(){
    return 12 / 6
}) 

var add = new NumbersGame(50, 16, function(){
    return 50 + 15
})

var substract = new NumbersGame(300, 100, function(){
    return 300 - 100
})



console.log(`${multiply.funkcija()} ${divide.funkcija()} ${add.funkcija()} ${substract.funkcija()}`)


//task 5

function test() {
    console.log(a);
    console.log(foo());
    
    var a = 1;
    function foo() {
       return 2;
    }
 }

 test();


 var a = 1; 

 function someFunction(number) {
   function otherFunction(input) {
     return a;
   }
   
   a = 5;
   
   return otherFunction;
 }

 var firstResult = someFunction(9);
 var result = firstResult(2);


 console.log(result)

 var fullname = 'John Doe';
		var obj = {
		   fullname: 'Colin Ihrig',
		   prop: {
		      fullname: 'Aurelio De Rosa',
		      getFullname: function() {
		         return this.fullname;
		      }
		   }
		};

		console.log(obj.prop.getFullname());

		var test = obj.prop.getFullname;

		console.log(test());

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);








