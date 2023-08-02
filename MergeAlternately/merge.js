var merge = function (word1,word2){
    let result="";
    let range = Math.max(word1.length,word2.length); // Math.mac gives maximum value. If word one has 6 characters and word 2 has 7 it will make range 7
    for (let i= 0; i<range; i++) { // this sets i at 0 then range at 7 due to Math.Max function
        for(i<word1.length)
            result+= word1[i];// takes the first letter of the word and merge it with word2
        for(i<word2.length) 
            result+=word2[i];
    }
    return result;
};
console.log(merge(word1="abc",word2="pqr"))
