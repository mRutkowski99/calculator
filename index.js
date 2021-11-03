const sign = document.querySelector('.sign')
const value = document.querySelector('.value')
const btnsContainer = document.querySelector('.buttons')
const themeSlider = document.querySelector('input')

let chosenBtns = [] 
let firstVal = 0
let secVal = 0
let chosenOperation = ''

//Reset calculator
const reset = () => {
    chosenBtns = []
    firstVal = 0
    secVal = 0
    chosenOperation = ''
    sign.innerText = ''
    value.innerText = '0'
}

//Default
reset() 
themeSlider.stepDown() //set default theme to 1

//Functions
//Clear value field and fill it with values of clicked buttons saved in the array
const updateScreen = () => {
    value.innerText = ''
    chosenBtns.forEach(btn => value.innerText += btn)
}

//Return content of array as number
const concatChosen = () => {
    return Number(chosenBtns.join(''))
}

//Display result, save result as first value and prepare for next calculations
const displayResult = result => {
    value.innerText = result
    sign.innerText = ''

    firstVal = result
    secVal = 0
    chosenOperation = ''

    chosenBtns = String(result).split('')
    console.log(chosenBtns);
    updateScreen()
}


//Clicking buttons
btnsContainer.addEventListener('click', e => {
    //check if btn was target of click event
    if (!e.target.classList.contains('btns')) return
    
    if (e.target.classList.contains('btn-digit')) {
        //Prevent from writing zeros at the beggining of value
        if (chosenBtns.length === 0 && e.target.innerText === '0') return
        
        //Update array with chosen values
        chosenBtns.push(e.target.innerText)
        updateScreen()

    } else if (e.target.classList.contains('btn-operation')) {
        //Store content of array as first value and chosen operation, display sign of operation
        firstVal = concatChosen()
        chosenBtns = []
        chosenOperation = e.target.innerText
        sign.innerText = chosenOperation

    } else if (e.target.classList.contains('btn-equals') && chosenOperation) {
        //Store content of array as second value and calculate result based on previously chosen operation
        secVal = concatChosen()
        chosenBtns = []
        switch (chosenOperation) {
            case '+':
                displayResult(firstVal + secVal)
                break;
            case '-':
                displayResult(firstVal - secVal)
                break;
            case 'x':
                displayResult(firstVal * secVal)
                break;
            case '/':
                displayResult(firstVal / secVal)
                break;
        }

    } else if (e.target.classList.contains('btn-del')) {
        //Delete last written number. If all value was deleted display 0
        if (value.innerText.length > 1) {
            chosenBtns.pop()
            updateScreen()
    
        } else if (value.innerText.length === 1 && value.innerText != 0) {
            chosenBtns.pop()
            value.innerText = '0'
        }

    } else {
        reset()
    }
})

//Changing color theme
themeSlider.addEventListener('change', e => {
    const theme = e.target.value

    if (theme == 1) {
        document.documentElement.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)')
        document.documentElement.style.setProperty('--keypad-bg', 'hsl(223, 31%, 20%)')
        document.documentElement.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)')
        document.documentElement.style.setProperty('--fn-key-bg', 'hsl(225, 21%, 49%)')
        document.documentElement.style.setProperty('--fn-key-shadow', 'hsl(224, 28%, 35%)')
        document.documentElement.style.setProperty('--equals-key-bg', 'hsl(6, 63%, 50%)')
        document.documentElement.style.setProperty('--equals-key-shadow', 'hsl(6, 70%, 34%)')
        document.documentElement.style.setProperty('--key-bg', 'hsl(30, 25%, 89%)')
        document.documentElement.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)')
        document.documentElement.style.setProperty('--key-color', 'hsl(221, 14%, 31%)')
        document.documentElement.style.setProperty('--fn-key-color', 'hsl(0, 0, 100%)')
        document.documentElement.style.setProperty('--equals-key-color', 'hsl(0, 0, 100%)')
        document.documentElement.style.setProperty('--text-color', 'hsl(0, 0, 100%)')

    } else if (theme == 2) {
        document.documentElement.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)')
        document.documentElement.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)')
        document.documentElement.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)')
        document.documentElement.style.setProperty('--fn-key-bg', 'hsl(185, 42%, 37%)')
        document.documentElement.style.setProperty('--fn-key-shadow', 'hsl(185, 58%, 25%)')
        document.documentElement.style.setProperty('--equals-key-bg', 'hsl(25, 98%, 40%)')
        document.documentElement.style.setProperty('--equals-key-shadow', 'hsl(25, 99%, 27%)')
        document.documentElement.style.setProperty('--key-bg', 'hsl(45, 7%, 89%)')
        document.documentElement.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)')
        document.documentElement.style.setProperty('--key-color', 'hsl(60, 10%, 19%)')
        document.documentElement.style.setProperty('--fn-key-color', 'hsl(0, 0, 100%)')
        document.documentElement.style.setProperty('--equals-key-color', 'hsl(0, 0, 100%)')
        document.documentElement.style.setProperty('--text-color', 'hsl(60, 10%, 19%)')

    } else {
        document.documentElement.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)')
        document.documentElement.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)')
        document.documentElement.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)')
        document.documentElement.style.setProperty('--fn-key-bg', 'hsl(281, 89%, 26%)')
        document.documentElement.style.setProperty('--fn-key-shadow', 'hsl(285, 91%, 52%)')
        document.documentElement.style.setProperty('--equals-key-bg', 'hsl(176, 100%, 44%)')
        document.documentElement.style.setProperty('--equals-key-shadow', 'hsl(177, 92%, 70%)')
        document.documentElement.style.setProperty('--key-bg', 'hsl(268, 47%, 21%)')
        document.documentElement.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)')
        document.documentElement.style.setProperty('--key-color', 'hsl(52, 100%, 62%)')
        document.documentElement.style.setProperty('--fn-key-color', 'hsl(0, 0, 100%)')
        document.documentElement.style.setProperty('--equals-key-color', 'hsl(198, 20%, 13%)')
        document.documentElement.style.setProperty('--text-color', 'hsl(52, 100%, 62%)')
    }
})