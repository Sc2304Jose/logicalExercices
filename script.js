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

function CutCharacter(chain,numberCharacter){
return chain.substring(0,numberCharacter);

}

//console.log(CutCharacter("Hola mundo",6));

function SplitChain(chain){
    return chain.split(" ");
}

//console.log(SplitChain("hola mundo"));


function forchain(chain,number){
    for (number;number>0;number--){
        console.log(chain);        
    }   
}
//forchain("iuju",4);