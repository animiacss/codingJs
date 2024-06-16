//BMI Body Mass Index Challenge.
//Formula BMI = mass/height ** 2 
//marks test1
const marksMass1 = 95;
const marksHeight1 = 1.88;
//jonhs test1
const johnsMass1 = 85;
const johnsHeight1 = 1.76;

var marksBMITest1 = marksMass1 / (marksHeight1 * marksHeight1);
var johnsBMITest1 = johnsMass1 / (johnsHeight1 * johnsHeight1);
console.log(marksBMITest1, johnsBMITest1);
console.log(johnsBMITest1 < marksBMITest1);