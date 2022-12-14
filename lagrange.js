function createBasicPolynomial(xValues,i) {
    function basicPolynomial(x) {
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
    return basicPolynomial
}


function createLagrangePolynomial(xValues,yValues) {
    const basicPolynomials = []
    for (let i = 0 ; i < xValues.length; i++) {
        basicPolynomials.push(createBasicPolynomial(xValues,i))
    }
    function lagrangePolinomial(x) {
        let result = 0
        for (let i = 0; i < yValues.length; i++) {
            result+=yValues[i] * basicPolynomials[i](x)
        }
        return result
    }
    return lagrangePolinomial
}


const xVal = [-1,2,4]
const yVal = [9,1,6]

const lagPol = createLagrangePolynomial(xVal,yVal)

console.log(lagPol(3))

for(let x = 0; x < xVal.length; x++) {
    console.log(xVal[x],lagPol(xVal[x]) )
}