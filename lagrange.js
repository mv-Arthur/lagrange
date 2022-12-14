function createBasicPolynomial(xValues,i) {
    return (x) => {
        let divider = 1
        let result = 1
        for (let j = 0; j < xValues.length; j++) {
            if(j!==i) {
                result *= x-xValues[j]
                divider *= xValues[i] - xValues[j]
            }
        }
        return result / divider
    }
}


function createLagrangePolynomial(xValues,yValues) {
    const basicPolynomials = []
    for (let i = 0 ; i < xValues.length; i++) {
        basicPolynomials.push(createBasicPolynomial(xValues,i))
    }
    return (x) => {
        let result = 0
        for (let i = 0; i < yValues.length; i++) {
            result+=yValues[i] * basicPolynomials[i](x)
        }
        return result
    }
}

const xVal = []
const yVal = []


let $switch1 = true
let $switch2 = true

while($switch1) {
    const inputData = +prompt('вводите значения X по одному')
    $switch1 = inputData ? true : false
    if($switch1) {
        xVal.push(inputData)
    }
}

while($switch2) {
    const inputData = +prompt('вводите значения Y по одному')
    $switch2 = inputData ? true : false
    if($switch2) {
        yVal.push(inputData)
    }
}





const lagPol = createLagrangePolynomial(xVal,yVal)


console.log(lagPol(3))

document.write(lagPol(+prompt('введите аргумент функции, для которого требуется найти значение функции')))

for(let x = 0; x < xVal.length; x++) {
    console.log(xVal[x],lagPol(xVal[x]) )
}