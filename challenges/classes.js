// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {  ///classes are just special functions;;; class declaration of cuboidmaker;
    constructor(cube) {  ///constructor function = foundation of class;;; build the properies inside constructor body on this keyword
        this.length = cube.length; 
        this.width = cube.width;
        this.height = cube.height;
  }                    
                      
  volume() {      
      return this.length * this.width * this.height;
  }
    
  surfaceArea() {                                                
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }                                   
}


///classes are returned as objects

///new binding

const cuboid = new CuboidMaker({ 
    length: 4,                                                                                                                                                                                                                                                                           
    width: 5,                                                                                                                                                                                                                                      
    height: 5                     
});









// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100

console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.