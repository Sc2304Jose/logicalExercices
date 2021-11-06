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

const forChain2 =(chain=" ", long=undefined)=>{
if(!chain)return console.warn("chain is empty");
if(long===undefined)return console.warn("long is empty");
if(long===0) return console.error("long is 0");
if(Math.sign(long)==-1)return console.error("long is negative");

let chain2 = "";
for(let i=0;i<long;i++){
    chain2 += '\n' + chain;
}
return chain2;
}
//console.log(forChain2("Lola Perez", 4))

function Palindrome(chain){
    let chain2 = chain.split(" ").join("");
    let chain3 = chain2.split("").reverse().join("");
    return chain2 === chain3;
    return chain3;
}

//onsole.log(Palindrome("ada"))
/**
 * arrow fuction expressed for a reverse a word
 */
const palindrome2=(chain)=>{
  let chain2 = chain.split(" ").join("");
  let chain3 = chain2.split("").reverse().join("");
  console.log(chain3)
   return chain
}

//palindrome2("apepaa");


/**
 * arrow fuction for count words in a chain
 */

const includeword3 = (chain,word)=>{
    let contador=0;
    if (chain.includes(word)) contador++;
    return `The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence ${contador}`;
}

function includeword2(chain,word){
    let contador=0;
    if (chain.includes(word)) {
      contador+=1;
    }
    return contador;
    re
}

console.log(includeword3("chody is a beautiful cat, i love chody","chody"));

/**
 * delete word  in a chain
 */

