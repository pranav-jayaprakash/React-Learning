import React from 'react'

function Destructuring() {

    const person = {name:'nandu',age:'23'};
    const {name,age}=person;
    console.log(name);
    console.log(age);

    const one = [1,2,3,4];
    const [first,second,third] = one;
    console.log(first);
    console.log(second);
    console.log(third);
  return (
    <div>
        
    </div>
  )
}

export default Destructuring