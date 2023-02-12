1. function findUserByUsername(userArr, username){
    return userArr.find(function(user){
        return user.username === username;
    })
}

2. function removeUser(userArr, username){
    let found = userArr.findIndex(function(user){
        return user.username === username;
    })
    if(found === -1)
    return;
    return userArr.splice(found, 1)[0];
}