var merge = function (word1,word2){
    let result="";
    for (let i=0;i<Math.max(word1.length,word2.length);i++){
        for(i<word1.length)
            result+= word1[i];
        for(i<word2.length) 
            result+=word2[i];
    }
    return result;
};
console.log(merge(word1="abc",word2="pqr"))