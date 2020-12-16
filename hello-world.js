function getName() {
    const userName = prompt('what is your name?');
    sayHello(userName);
} 
function sayHello(name) {
    alert('hello' +  name + '!');
} 