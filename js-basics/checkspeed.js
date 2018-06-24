
// Speed limit = 70
// Every 5 km over, you get 1 point
// Math.floor(1.3) = 1
// if driver has more than 12 point, license suspended
function checkSpeed(speed){
    const speedLimit = 70;
    const pointThreshold = 5;

    if (typeof speed !== 'number'){
        return;
    }
    if (speed < speedLimit + pointThreshold){
        return 'Ok';
    }

    const pointsGiven = Math.floor((speed - speedLimit) / pointThreshold);

    if (pointsGiven >= 12){
        return 'License suspended';
    }

    return ('Points: ' + pointsGiven);
}

console.log(checkSpeed(130))