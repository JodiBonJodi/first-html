function showAlert() {
    alert('You clicked the button');
}

function logHello () {
    console.log('hello');
    
}

const dog = {
    name: 'fido',
    color: 'brown',
    weight: 500,
};

console.log(dog.name);

dog.name = 'Spot';

console.log(dog.name);

if(dog.name === 'Rover') {
    console.log('My name is Rover');
} else if(dog.name === 'Spot') {
    console.log('my name is spot');
} else (
    console.log('who is rover')
);

for(let i = 0; i <= 10; i++) {
    console.log(i);	
}


const veggies = ['potato', 'carrot', 'turnip'];

for(let i = 0; i <= 2; i++) {
    console.log(veggies[i]);	
}

