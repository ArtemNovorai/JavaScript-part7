var question = confirm('Do you want to try your luck and play this game?');
var question2;
var prop = 0;
var google;


    if (question == true) {
   
    for (var i = 1; i <= 3; i++) {
     
        var random = Math.round(Math.random() * 5);
       
        google = prompt('Enter the number from 0 to 5');

        if (i == 1 && google == random) {
            prop = prop + 10;
            question2 = confirm('Thanks for the game! Your win is 10$;. Do you want to try again ?');
            if (question2 == true) {
                i = 0;
            } else {
                alert('Thanks for the game! Your win is - ' + prop + '');
                break;
            }
        } else if (i == 2 && google == random) {
            prop = prop + 5;
            question2 = confirm('Thanks for the game! Your win is 5$;. Do you want to try again ?');
            if ( question2 == true ) {
                i = 0;
            } else {
                alert('Thanks for the game! Your win is - ' + prop + '$');
                break;
            }
        } else if (i == 3 && google == random) {
            prop = prop + 2;
           question2 = confirm('Thanks for the game! Your win is 2$. Do you want to try again ?');
            if ( question2 == true ) {
                i = 0;
            } else {
                alert('Thanks for the game! Your win is - ' + prop + '$');
                break;
            }
        } else if (i == 3 && google !== random) {
            question2 = confirm('You loose the game, do you want to try again ?');
            if (question2 == true) {
                i = 0;
            } else {
                alert('Thanks for the game! Your win is - ' + prop + '$');
                break;
            }
        } else {
            alert('You won 0$,come on again');
        }
    }
} else {
    alert('Today Jae-pot picks someone else!!Good luck!!');
}
