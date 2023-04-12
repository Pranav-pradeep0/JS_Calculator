function displayData(n) {
    result.value+=n
}

function allClear() {
    result.value=""
}

function evalExpression() {
    result.value=eval(result.value)
}

// slice method - slice method is used to cut a part of a string, value is string index values of from where to slice to where from.

function backspace() {
    result.value=result.value.slice(0,-1)
}