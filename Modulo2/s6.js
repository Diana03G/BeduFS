// Reto 1

const Vec = function(x, y) {
    this.x = x;
    this.y = y;

    this.plus = function (vec) {
        return {x: x+vec.x, y: y-vec.y}
    }

    this.minus = function(vec) {
        return {x: x-vec.x, y: y-vec.y}
    }

    this.length = function() {
        return Math.sqrt(x*x + y*y)
    }
}

const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); //Vec {x: 3, y: 5}
console.log(vec1.minus(vec2)); //Vec {x: -1, y: -1}
console.log(vec1.length()); //2.23606797749979


//Reto 2

const Group = function(){
    //Code goes here...
}

const group = Group.from([1, 2, 3, 4, 5]);
console.log(group);  //Group { members: [1, 2, 3, ,4 ,5]}
console.log(group.has(5));   //true
console.log(group.has(10));  //false

group.add(10);
console.log(group.has(10)); //true

// Reto 3 
