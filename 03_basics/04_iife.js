//  Imefistely Invoked Function Expressions  (IIFE)

(function chai(){
    //  name IIFE
    console.log(`DB CONNCTED`);
})();

( (name) => {
    console.log(`DB CONNCTED TWO ${name}`);
} )(`kizm`)

