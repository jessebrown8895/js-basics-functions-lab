// Each block in Manhattan is 264 feet long
// write code that takes in a pick up location for a passenger 
// and returns the number of blocks from its headquarters 

function distanceFromHqInBlocks(currentLocation){
    const headQuarters = 42 
    let numberOfBlocks
    if(currentLocation > headQuarters){
       numberOfBlocks = currentLocation - headQuarters
    } else{ 
       numberOfBlocks = headQuarters - currentLocation
    }
    return numberOfBlocks
    
}
//each block in Manhattan is 264ft long
function distanceFromHqInFeet(someValue){
    const distanceInBlcoks = distanceFromHqInBlocks(someValue)
    const numberInFeet = distanceInBlcoks * 264 
    return numberInFeet 

}

function distanceTravelledInFeet(currentLocation, locationTravelled){
    let numberOfBlocks
    if(currentLocation < locationTravelled){
        numberOfBlocks = locationTravelled - currentLocation 
    } else{
        numberOfBlocks = currentLocation - locationTravelled 
    }
    const distanceTravelledInFt = numberOfBlocks * 264 
    return distanceTravelledInFt
}

function calculatesFarePrice(start, destination){
    const totalDistanceInFt = distanceTravelledInFeet(start, destination)
    
    if(totalDistanceInFt <= 400){
        return 0 
    }else if(totalDistanceInFt > 400 && totalDistanceInFt <= 2000){
       const distancetravelled = totalDistanceInFt - 400 
       return distancetravelled * .02
    }
    else if(totalDistanceInFt > 2000 && totalDistanceInFt <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
        
}

