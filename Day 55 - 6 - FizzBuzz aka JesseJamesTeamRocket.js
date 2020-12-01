// 1 - 100
// If divisible by 3 Print Jesse
// If divisible by 5 Print James
// If divisible by 3 & 5 Print Team Rocket
// Else print the number

for (var i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log("Team Rocket");
    } else if (i%3 == 0) {
        console.log("Jesse");
    } else if (i%5 == 0) {
        console.log("James");
    } else {
        console.log(i);
    }
}