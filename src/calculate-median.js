function calculate_median(arr) {

    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 === 0) {
            newArray.push(arr[i]);
        }
    }

    return calculateNewArray(newArray);
}

function calculateNewArray(newArray) {

    if (newArray.length % 2 === 0) {

        return (newArray[newArray.length / 2 - 1] + newArray[newArray.length / 2]) / 2;
    }
    else {

        return newArray[parseInt(newArray.length / 2)];
    }
}

module.exports = calculate_median;
