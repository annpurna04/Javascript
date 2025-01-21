// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IFFE)
//(FUNCTION DEFINITION)(FUNCTON EXECUTION)

(function one(){ //named IIFE
    console.log(`DB Connected`);
    
})();   //use ; when first code is ending

(  (name) => {
    console.log(`DB Connected two ${name}`);
    
}  )('anu');