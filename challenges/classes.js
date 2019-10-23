// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// 

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class Cuboid {
  constructor(cuboidAttr){
  this.length = cuboidAttr.length;
  this.width = cuboidAttr.width;
  this.height = cuboidAttr.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  area(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

class Cube extends Cuboid{
  constructor(cubeAttr){
    super(cubeAttr);
    this.fun = cubeAttr.fun;
  }
  cubeVolume(){
    return (this.length ** 3);
  }
  cubeArea(){
    return 6 * (this.length ** 2);
  }
}

const cuboid = new Cuboid({
  length: 4, 
  width: 5,
  height: 5
})

const cube = new Cube({
  length: 7, 
  width: 7,
  height: 7,
  fun: 'More fun than stupid cuboids'
});

console.log(cube.cubeVolume()); // 343
console.log(cube.cubeArea()); // 294
console.log(cuboid.volume()); // 100
console.log(cuboid.area()); // 130