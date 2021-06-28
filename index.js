
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(42 - pickUp);
}


function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}


function distanceTravelledInFeet(startPoint, endPoint) {
    return Math.abs(startPoint - endPoint) * 264;
}


function calculatesFarePrice(start, destination) {
    let rideDistance = Math.abs(destination - start) * 264;

    if (rideDistance  < 400) {
        return 0
    } 
    else if (rideDistance > 2500) {
        return 'cannot travel that far'
    } else if (rideDistance > 2000) {
        return 25
    } else if (rideDistance <= 2000) {
        return (rideDistance -400) * .02
    }
}
