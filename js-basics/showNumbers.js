function showNumbers(limit){
    if (typeof limit !== 'number'){
        console.log('NaN');
    }
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i + ': ' + message)
    }
}

showNumbers(1000)