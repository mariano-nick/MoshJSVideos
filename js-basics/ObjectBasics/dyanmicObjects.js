
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {
    console.log('draw');
}

delete circle.color;
delete circle.draw;

console.log(circle);