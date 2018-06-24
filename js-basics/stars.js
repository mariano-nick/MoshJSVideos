

showStars(10);

function showStars(rows){
    if (typeof rows === 'number'){
        for (let i = 0; i < rows; i++){
            console.log('*'.repeat(i));
        }
    }

    return;
}