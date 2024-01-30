function receivesAFunction(spy){
    spy()
    return "James Bond"
}

function returnsANamedFunction(){
    return receivesAFunction 
}

function returnsAnAnonymousFunction(){
    return function() {}
}