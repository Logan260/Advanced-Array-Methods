//.forEach

1. function doubleVal(arr){
     let newArray = [];
     arr.forEach(function(val){
        newArray.push(val * 2);
    });
    return newArray;
 }

 2. function onlyEven(arr){
    let newArray = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArray.push(val);
        }
    });
    return newArray;
 }

 3. function firstAndLast(arr){
    let newArray = [];
    arr.forEach(function(val){
        newArray.push(val[0] + val[val.length-1]);
    });
    return newArray;
 }

 4. function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
 }

 5. function vowelcounter(str){
    let seperateArr = str.split('');
    let obj = {};
    const vowels = 'aeiou';

    seperateArr.forEach(function(letters){
        let lowerCasedLetters = letters.toLowerCase()
        if(vowels.indexOf(lowerCasedLetters) !== -1){
            if(obj[lowerCasedLetters]){
                obj[lowerCasedLetters]++;
            }else{
                obj[lowerCasedLetters] = 1
            }
        }
    });
    return obj;
    }

//.map

1. function doubleValMap(arr){
    return arr.map(function(val){
        return val * 2
    });
}

2. function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index
    });
}

3. function getKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
}

4. function getFullName(arr){
    return arr.map(function(val){
        return val.first + " " + val.last;
    });
}

//.filter

1. function filterVal(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

2. function find(arr, findValue){
    return arr.filter(function(val){
        return val === findValue;
    })[0];
}

3. function findInsideObj(arr, key, findValue){
    return arr.filter(function(val){
        return val[key] === findValue;
    })[0];
}

4. function removeVowels(str){
    const vowles = 'aeiou';
    return str
    .toLowerCase().split('')
    .filter(function(val){
        return vowles.indexOf(val) === -1;
    })
    .join('');
}

5. function doubleOddNums(arr){
    return arr
    .filter(function(val){
        return val % 2 !== 0;
    })
    .map(function(val){
        return val * 2;
    });
}























