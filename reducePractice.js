1. function extractValue(arr, key){
    return arr.reduce(function(accum,nextVal){
        accum.push(next[key]);
        return accum;
    }, []);
}

2. function vowleCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(accum, next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(accum[lowerCased]){
                accum[lowerCased]++;
            }else{
                arr[lowerCased] = 1;
            }
        }
        return accum;
    }, {});
}

3. function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, next, index){
        accum[index][key] = value;
        return accum;
    }, arr);
}

4. function partition(arr, callback){
    return arr.reduce(function(accum, next){
        if(callback(next)){
            accum[0].push(next);
        }else{
            accum[1].push(next);
        }
        return accum;
    }, [[],[]]);
}