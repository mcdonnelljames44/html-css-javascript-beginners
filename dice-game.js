function rollDice() {
    let goldcoins = 0;
    In this function, the faces are generat {
         const roll = Math.floor(Math.random() * 6) + 1;
         alert( 'you rolled  ' + roll + '.');
         if (roll === 1) {
             alert('Game over, no more rolls!');
             break;
        }
        if (roll < 5) {
            continue;
        }
        alert('congratulations, you win '+ roll + 'gold coins!');
        goldcoins += roll;
   }
   alert('congratulations, you win' + roll + ' gold coins!');
}
 