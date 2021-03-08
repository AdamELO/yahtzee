
export default function scoreInfFct(inf, results) {
    // three of a kind
    threeOfAKind(inf, results);
    // four of a kind
    fourOfAKind(inf, results);
    //full
    full(inf, results);
    // small straight
    smallStraight(inf, results);
    // large straight
    largeStraight(inf, results);
    //luck
    luck(inf, results);
    //yams
    yams(inf, results);
}



// three of kind fct
function threeOfAKind(inf, results) {
    // push all result in another array if there is three of a kind
    let threeOfAKind = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 2] === tempArray[i]) {
            threeOfAKind.push(tempArray[i]);
        }
    }

    // check if three of a kind array is nul if not multiply result by 3
    if (threeOfAKind.length !== 0) {
        let threeOfAKindResult = threeOfAKind[0] * 3;
        inf.filter(inf => inf.scoreName === 'threeOfAKind')[0].result = threeOfAKindResult;
    } else {
        inf.filter(inf => inf.scoreName === 'threeOfAKind')[0].result = 0;
    }
}
//four of kind fct
function fourOfAKind(inf, results) {
    // push all result in another array if there is four of a kind
    let fourOfAKind = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 3] === tempArray[i]) {
            fourOfAKind.push(tempArray[i]);
        }
    }

    // check if four of a kind array is nul if not multiply result by 4
    if (fourOfAKind.length !== 0) {
        let fourOfAKindResult = fourOfAKind[0] * 4;
        inf.filter(inf => inf.scoreName === 'fourOfAKind')[0].result = fourOfAKindResult;
    } else {
        inf.filter(inf => inf.scoreName === 'fourOfAKind')[0].result = 0;
    }
}
//Yams fct
function yams(inf, results) {
    // push all result in another array if there is yams
    let yams = [];
    const tempArray = [...results].sort()
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 4] === tempArray[i]) {
            yams.push(tempArray[i]);
        }
    }

    // check if yams array is nul if not + 50 pts
    if (yams.length !== 0) {
        inf.filter(inf => inf.scoreName === 'yams')[0].result = 50;
    } else {
        inf.filter(inf => inf.scoreName === 'yams')[0].result = 0;
    }
}
//full fct
function full(inf, results) {
    // push all result in another array if there is a full
    let full = [];
    //checking for three same dices
    const tempArray = [...results].sort();
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 2] === tempArray[i]) {
            full.push(tempArray[i]);
        }
    }
    //checking for two same dices
    const tempArray2 = [...results].sort();
    for (let i = 0; i < tempArray2.length; i++) {
        if (tempArray2[i + 1] === tempArray2[i]) {
            full.push(tempArray2[i]);
        }
    }
    //checking full and if there is a full : +25pts
    if (full.length === 4) {
        inf.filter(inf => inf.scoreName === 'full')[0].result = 25;
    } else {
        inf.filter(inf => inf.scoreName === 'full')[0].result = 0;
    }
}
// luck fct
function luck(inf, results) {
    // sum all results
    let luckResult = results.reduce((acc, result) => acc + result, 0);
    inf.filter(inf => inf.scoreName === 'luck')[0].result = luckResult;
}
// small straight fct
function smallStraight(inf, results) {
    // sorting and remove duplicates from results
    const resultNoDupesAndSorted = [...new Set(results)].sort();

    // check if results are consecutive numbers
    let straightSm = [];
    for (let i = 0; i < resultNoDupesAndSorted.length - 1; i++) {
        if (resultNoDupesAndSorted[i] === (resultNoDupesAndSorted[i + 1] - 1)) {
            straightSm.push(true);
        }
    }

    //check small straight
    if (straightSm.length >= 3) {
        inf.filter(inf => inf.scoreName === 'straightSm')[0].result = 30;
    } else {
        inf.filter(inf => inf.scoreName === 'straightSm')[0].result = 0;
    }
}
//large straight fct
function largeStraight(inf, results) {
    // sort and filter results to see if there is a large straight
    const resultNoDupesAndSorted = [...new Set(results)].sort();
    let largeStraight = resultNoDupesAndSorted.filter(result => result >= 2 && result <= 5);
    if (largeStraight.length === 4 && resultNoDupesAndSorted.length === 5) {
        inf.filter(inf => inf.scoreName === 'straightL')[0].result = 40;
    } else {
        inf.filter(inf => inf.scoreName === 'straightL')[0].result = 0;
    }
}
