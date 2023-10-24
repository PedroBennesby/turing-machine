
export const v1 = (testNumbers, solution) => {
  console.log('bateu aqui')
  if (testNumbers.triangle === 1 && solution.triangle === 1) {
    return true
  } else if (testNumbers.triangle > 1 && solution.triangle > 1) {
    return true
  } else {
    return false
  }
}

export const v2 = (testNumbers, solution) => {
  if (testNumbers.triangle < 3 && solution.triangle < 3) {
    return true
  } else if (testNumbers.triangle == 3 && solution.triangle == 3) {
    return true
  } else if (testNumbers.triangle > 3 && solution.triangle > 3) {
    return true
  } else {
    return false
  }
}

export const v3 = (testNumbers, solution) => {
  if (testNumbers.square < 3 && solution.square < 3) {
    return true
  } else if (testNumbers.square == 3 && solution.square == 3) {
    return true
  } else if (testNumbers.square > 3 && solution.square > 3) {
    return true
  } else {
    return false
  }
}

export const v4 = (testNumbers, solution) => {
  if (testNumbers.square < 4 && solution.square < 4) {
    return true
  } else if (testNumbers.square == 4 && solution.square == 4) {
    return true
  } else if (testNumbers.square > 4 && solution.square > 4) {
    return true
  } else {
    return false
  }
}

export const v5 = (testNumbers, solution) => {
  if (testNumbers.triangle % 2 == 0 && solution.triangle % 2 == 0) {
    return true
  } else { return false }
}

export const v6 = (testNumbers, solution) => {
  if (testNumbers.square % 2 == 0 && solution.square % 2 == 0) {
    return true
  } else { return false }
}

export const v7 = (testNumbers, solution) => {
  if (testNumbers.circle % 2 == 0 && solution.triangle % 2 == 0) {
    return true
  } else { return false }
}

export const v8 = (testNumbers, solution) => {

  const countOnes = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '1') {
        count++;
      }
    }
    return count;
  }

  const testString = testNumbers.triangle.toString() + testNumbers.square.toString() + testNumbers.circle.toString();
  const solutionString = solution.triangle.toString() + solution.square.toString() + solution.circle.toString();

  const testCount = countOnes(testString);
  const solutionCount = countOnes(solutionString);

  return testCount === solutionCount;
}

export const v9 = (testNumbers, solution) => {

  const countOnes = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '3') {
        count++;
      }
    }
    return count;
  }

  const testString = testNumbers.triangle.toString() + testNumbers.square.toString() + testNumbers.circle.toString();
  const solutionString = solution.triangle.toString() + solution.square.toString() + solution.circle.toString();

  const testCount = countOnes(testString);
  const solutionCount = countOnes(solutionString);

  return testCount === solutionCount;
}

export const v10 = (testNumbers, solution) => {
  console.log('bateu aqui')
  const countOnes = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '4') {
        count++;
      }
    }
    return count;
  }

  const testString = testNumbers.triangle.toString() + testNumbers.square.toString() + testNumbers.circle.toString();
  const solutionString = solution.triangle.toString() + solution.square.toString() + solution.circle.toString();

  const testCount = countOnes(testString);
  const solutionCount = countOnes(solutionString);

  return testCount === solutionCount;
}

export const v11 = (testNumbers, solution) => {
  if (testNumbers.triangle < testNumbers.square && solution.triangle < solution.square) {
    return true
  } else if (testNumbers.triangle == testNumbers.square && solution.triangle == solution.square) {
    return true
  } else if (testNumbers.triangle > testNumbers.square && solution.triangle > solution.square) {
    return true
  } else {
    return false
  }
}

export const v12 = (testNumbers, solution) => {
  if (testNumbers.triangle < testNumbers.circle && solution.triangle < solution.circle) {
    return true
  } else if (testNumbers.triangle == testNumbers.circle && solution.triangle == solution.circle) {
    return true
  } else if (testNumbers.triangle > testNumbers.circle && solution.triangle > solution.circle) {
    return true
  } else {
    return false
  }
}

export const v13 = (testNumbers, solution) => {
  if (testNumbers.square < testNumbers.circle && solution.square < solution.circle) {
    return true
  } else if (testNumbers.square == testNumbers.circle && solution.square == solution.circle) {
    return true
  } else if (testNumbers.square > testNumbers.circle && solution.square > solution.circle) {
    return true
  } else {
    return false
  }
}

export const v14 = (testNumbers, solution) => {
  if (testNumbers.triangle < testNumbers.square && testNumbers.triangle < testNumbers.circle && solution.triangle < solution.square && solution.triangle < solution.circle) {
    return true
  } else if (testNumbers.square < testNumbers.triangle && testNumbers.square < testNumbers.circle && solution.square < solution.triangle && solution.square < solution.circle) {
    return true
  } else if (testNumbers.circle < testNumbers.triangle && testNumbers.circle < testNumbers.square && solution.circle < solution.triangle && solution.circle < solution.square) {
    return true
  }
}

export const v15 = (testNumbers, solution) => {
  if (testNumbers.triangle > testNumbers.square && testNumbers.triangle > testNumbers.circle && solution.triangle > solution.square && solution.triangle > solution.circle) {
    return true
  } else if (testNumbers.square > testNumbers.triangle && testNumbers.square > testNumbers.circle && solution.square > solution.triangle && solution.square > solution.circle) {
    return true
  } else if (testNumbers.circle > testNumbers.triangle && testNumbers.circle > testNumbers.square && solution.circle > solution.triangle && solution.circle > solution.square) {
    return true
  } else {
    false
  }
}

export const v16 = (testNumbers, solution) => {
  const testArray = [testNumbers.triangle, testNumbers.square, testNumbers.circle];
  const solutionArray = [solution.triangle, solution.square, solution.circle];

  const testEven = testArray.filter(num => num % 2 === 0).length;
  const testOdd = testArray.filter(num => num % 2 !== 0).length;
  const solutionEven = solutionArray.filter(num => num % 2 === 0).length;
  const solutionOdd = solutionArray.filter(num => num % 2 !== 0).length;

  if (testEven > testOdd && solutionEven > solutionOdd) {
    return true
  } else if (testOdd > testEven && solutionOdd > solutionEven) {
    return true
  } else {
    return false
  }
}

export const v17 = (testNumbers, solution) => {
  const testArray = [testNumbers.triangle, testNumbers.square, testNumbers.circle];
  const solutionArray = [solution.triangle, solution.square, solution.circle];
  const testEvenNumbers = testArray.filter(num => num % 2 === 0);
  const solutionEvenNumbers = solutionArray.filter(num => num % 2 === 0);

  if (testEvenNumbers.length == solutionEvenNumbers.length) {
    return true
  } else {
    return false
  }
}

export const v18 = (testNumbers, solution) => {
  const testNumbersSum = testNumbers.triangle + testNumbers.square + testNumbers.circle;
  const solutionSum = solution.triangle + solution.square + solution.circle;

  if (testNumbersSum % 2 == 0 && solutionSum % 2 == 0) {
    return true
  } else if (testNumbersSum % 2 !== 0 && solutionSum % 2 !== 0) {
    return true
  } else {
    return false
  }
}

export const v19 = (testNumbers, solution) => {
  const testNumbersSum = testNumbers.triangle + testNumbers.square;
  const solutionSum = solution.triangle + solution.square;

  if (testNumbersSum < 6 && solutionSum < 6) {
    return true
  } else if (testNumbersSum == 6 && solutionSum == 6) {
    return true
  } else if (testNumbersSum > 6 && solutionSum > 6) {
    return true
  } else {
    return false
  }
}

export const v20 = (testNumbers, solution) => {
  const testString = testNumbers.triangle.toString() + testNumbers.square.toString() + testNumbers.circle.toString();
  const solutionString = solution.triangle.toString() + solution.square.toString() + solution.circle.toString();

  const hasRepeatedNumber = /(.)\1/.test(testString);

  const hasRepeatedNumber2 = /(.)\1/.test(solutionString);

  if (hasRepeatedNumber === hasRepeatedNumber2) {
    return true
  } else {
    return false
  }
}


export const functionList = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20]