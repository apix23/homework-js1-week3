/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

var chessboard ='';

//tengo que crear una matrix de n x n numeros dependiendo del valor pasado por el usuario 

//debo hacer que verifique si es par o no y dependiendo de esto mostrare un string o otro, la idea es tener un string que 
//los separe por espacios. para ello necesito una variable para llenarla de dichos valores

//""
function createChessboard(value) {
    var str = new Array(value + 1);
    
    for (let i = 0; i < value; i++) {

        if (i%2===0) {
            console.log(str.join(' #'));
            
        }
        else{
            console.log(str.join('# '));
            
        }
        
    }
}

createChessboard(16);


