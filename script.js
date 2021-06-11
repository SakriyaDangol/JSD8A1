// number loop that shows on prompt
var number = prompt('Enter a number :')

// when a certain number is given, it keeps looping until it is equal to the number
for (let i=1; i<=number; i++){
    alert(i);
}

// array loop thats shows on the page
var array = ['apple', 'banana', 'carrot', 'daisy'];
var run = prompt('Type "Commense" :');

// this loop only run's when you type "Commense" in the prompt
if(run == 'Commense'){
    for (let i=0; i<array.length; i++){
        document.write('This is array loop ' + ' = ' + array[i] + '<br>');
    }
} else {
// this statement is executed when wrong input is given
    alert('Type "Commense" you idiot!!');
}