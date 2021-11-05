/**count numbers characters of chain text
 * function declared and function expresed 
 */
function CountLetters(chain) {
    var count = 0;
    for (var i = 0; i <= chain.length; i++) {
        count=i;
        if (chain[i] == ' ') {
            count++;
        }
    }
    return count;
}
//console.log(CountLetters("Hola Mundo"))

//cont CountLetters2=(chain="") =>(!chain) ?console.warn("chain is empty") :console.info(chain.length))


/**Fuctions cut Characther
 * function declared and function expresed
 */
function CutCharacter(chain,numberCharacter){
return chain.substring(0,numberCharacter);
}

//arow fuctions SplitChain.
const  SplitChain = (chain = "",long = undefined) =>
(!chain)
?console.warn("chain is empty")
:(long===undefined)
  ?console.warn("long undefined")
  :console.info(chain.substring(0,long))

//console.log(SplitChain("hola mundo",4));
//console.log(CutCharacter("Hola mundo",6));

function SplitChain1(chain){
    return chain.split(" ");
}

const chaintoArray =(chain=" ", separator=" ")=>
(!chain)
?console.warn("chain is empty")
:console.info(chain.split(separator))

//chaintoArray("hello.fucking.monsters",".")

// expres function




function forchain(chain,number){
    for (number;number>0;number--){
        console.log(chain);        
    }   
}
//forchain("iuju",4);

const forChain2 =(chain="", long=undefined)=>
(!chain)
?console.warn("chain is empty")
:(long===undefined)
  ?console.warn("long is undefined")
  :console.log(chain*long)




forChain2("iuju",4);