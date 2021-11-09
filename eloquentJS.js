// TRIANGLE WITH LOOP
const triangle = (n) => {
    for(let i = 0; i<= n; i++){
        // console.log(i);
        console.log('#'.repeat(i) + (' ').repeat(n-i));
    }
}
// triangle(5);

// FIZZ, BUZZ AND FIZZBUZZ
const fizzBuzz = (n) => {
    for(let i = 1 ; i <= n; i++){
        if(i%5 === 0 && i%3 === 0) {
            console.log('FizzBuzz');
        }else if (i%3 === 0) {
            console.log('Fizz');
        }else if (i%5 === 0) {
            console.log('Buzz');
        }else{
            console.log(i);
        }
}
}

// fizzBuzz(20);

//CHESSBOARD
const chessboard = (s) => {
    let board = '';

    for(let i = 0 ; i<s ; i++){
        for(let j = 0; j<s ; j++){
            board += (i%2) == (j%2) ? ' ' : '#';
        }
        board += '\n';
    }
    console.log(board);
}

// chessboard(8);

//MINIMUM
const min = (a,b) => {
    console.log(Math.min(a,b))
}

// min(50,55);

//RECURSION
const isEven = (n) => {
    console.log(n%2==0)
}

isEven(-2);