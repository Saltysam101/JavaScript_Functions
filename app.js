console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if (count < 0) {
        count *= -1
    }
    for (let i = 0; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

printOdds(-10)
    // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = "user", age = 15) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;


    if (age >= 16) {
        console.log(aboveSixteen)
    } else {
        console.log(belowSixteen)
    }
}

checkAge("Sam")

console.log("EXERCISE 3:\n==========\n");

function coordPlane(x, y) {
    if (x === 0 && y === 0) {
        console.log(`(${x}, ${y}}) is the origin`)
    } else if (x === 0 && Math.abs(y) > 0) {
        console.log(`(${x}, ${y}}) is on the y-axis`)
    } else if (y === 0 && Math.abs(x) > 0) {
        console.log(`(${x}, ${y}}) is on the x-axis`)
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}}) is in the first quandrant`)
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}}) is in the second quandrant`)
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}}) is in the third quandrant`)
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}}) is in the fourth quandrant`)
    }
}

coordPlane(5, 5)
coordPlane(-5, 5)
coordPlane(5, -5)
coordPlane(-5, -5)

console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a + b <= c || c + b <= a || a + c <= b) {
        console.log('Invalid triangle')
    } else if (a === b && b === c && a === c) {
        console.log('equalateral triangle')
    } else if (a != b && b != c && a != c) {
        console.log('scalene triangle')
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle')
    }
}

triangle(1, 1, 2)
triangle(1, 2, 2)
triangle(1, 1, 1)
triangle(2, 3, 4)

console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage) {
    let planLength = 30;
    let daysRemaining = planLength - day
    let avgDailyUsage = usage / day
    let theoreticalAvgUsage = planLimit / planLength
    let calcOverUsage = Math.abs(planLimit - (avgDailyUsage * daysRemaining + usage))
    let calcRemainingUsage = (planLimit - usage) / daysRemaining
    let message = `${day} days used, ${daysRemaining} days remaining
    Average daily use: ${theoreticalAvgUsage} GB/day`;
    console.log(message)

    let = planLimit / planLength;

    if (avgDailyUsage > theoreticalAvgUsage) {
        console.log(`You are EXCEEDING your average daily use (${avgDailyUsage}GB/day),
        continuing this high usage, you'll exceed your data plan by
        ${calcOverUsage.toFixed(2)} GB. To stay below you data plan, use no more than ${calcRemainingUsage} GB/day.`)
    } else if (avgDailyUsage === theoreticalAvgUsage) {
        console.log(`You are right on track with your daily usage ${avgDailyUsage}GB/day`)
    } else if (avgDailyUsage < theoreticalAvgUsage) {
        console.log(`You are below your average daily usage (${avgDailyUsage}GB/day). You are able to use ${calcRemainingUsage.toFixed(2)}GB/day.`)
    }
}

dataUsage(30, 8, 9)