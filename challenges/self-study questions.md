Describe the biggest difference between .forEach & .map.

* .forEach gives already provided info
* .map can change info



What is the difference between a function and a method?
method is a function that is a property of an object

What is closure?
functions look outward for context; 
if some variable isn’t defined in a function’s scope, the function will look outside the scope & search for a variable being referenced in the outer scope. 

Describe the four rules of the 'this' keyword.
1. window obj binding
the value of 'this' will be the window/console object when it is in the global scope

2. implicit binding
function called by preceding dot, the object before the . is this

3. new binding
when constructor function is used: specific instance of the object created & returned by that constructor function

4. explicit binding
'this' explicitly definded when call or apply method is used; override what constructor obj is set to by using .call & .apply


Why do we need super() in an extended class?
super() is used to tell a parent’s constructor to be concerned with the child’s attributes


const Rebecca = {
    name: 'Rebecca',
    lastName: 'Joyner',
    speak: function() {
        return `hello, my nbame is ${this.name} ${this.lastName}`           Banana.call(Raebecc)
    }
}

Rebecca.speak()

