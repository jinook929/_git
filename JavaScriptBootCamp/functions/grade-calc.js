let gradeCalc = function(numOfCorrect, numOfQuestions) {
    let percent = numOfCorrect / numOfQuestions * 100
    let letter = ''

    if(percent >= 90) {
        letter = 'A'
        // let letter = 'A'
        // return `You got an ${letter} (${percent}%).`
    } else if(percent >= 80) {
        letter = 'B'
        // let letter = 'B'
        // return `You got a ${letter} (${percent}%).`
    } else if(percent >= 70) {
        letter = 'C'
        // let letter = 'C'
        // return `You got a ${letter} (${percent}%).`
    } else if(percent >= 60) {
        letter = 'D'
        // let letter = 'D'
        // return `You got a ${letter} (${percent}%).`
    } else {
        letter = 'F'
        // let letter = 'F'
        // return `You got an ${letter} (${percent}%).`
    }
    return `Your grade is '${letter}' (${percent}%).`
}

let grade = gradeCalc(43, 50)
console.log(grade)
