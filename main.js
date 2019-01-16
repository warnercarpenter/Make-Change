const money = [
    hundred = {
        value: 100,
        name: "Hundred dollar bill",
        namePlural: "Hundred dollar bills"
    },
    fifty = {
        value: 50,
        name: "Fifty dollar bill",
        namePlural: "Fifty dollar bills"
    },
    twenty = {
        value: 20,
        name: "Twenty dollar bill",
        namePlural: "Twenty dollar bills"
    },
    ten = {
        value: 10,
        name: "Ten dollar bill",
        namePlural: "Ten dollar bills"
    },
    five = {
        value: 5,
        name: "Five dollar bill",
        namePlural: "Five dollar bills"
    },
    one = {
        value: 1,
        name: "One dollar bill",
        namePlural: "One dollar bills"
    },
    quarter = {
        value: .25,
        name: "Quarter",
        namePlural: "Quarters"
    },
    dime = {
        value: .1,
        name: "Dime",
        namePlural: "Dimes"
    },
    nickel = {
        value: .05,
        name: "Nickel",
        namePlural: "Nickels"
    },
    penny = {
        value: .01,
        name: "Penny",
        namePlural: "Pennies"
    },
]

const makeChangeSimple = () => {
    total = Math.floor((Math.random() * 1000) + 1)
    amountGiven = Number(window.prompt(`The total is ${total}. Enter the amount you will be paying me.`))
    console.log(amountGiven)
    if (amountGiven >= Number.MAX_SAFE_INTEGER) {
        window.alert("No one has that much money")
        return
    }
    if (isNaN(amountGiven) === true) {
        window.alert("wtf dude")
        return
    }
    if (amountGiven < total) {
        window.alert("Unsufficient funds")
        return
    }
    originalChange = (Math.abs(total - amountGiven)).toFixed(2)
    change = (Math.abs(total - amountGiven)).toFixed(2)
    
    let message = `The amount of change is ${originalChange}.\nYou will be given:`

    for (let i = 0; i < money.length; i++) {
        element = money[i]
        value = money[i].value
        name = money[i].name
        elementFloat = change / value
        elementAmount = parseInt(('' + (elementFloat * 100)) / 100);
        element.changeValue = elementAmount
        change = (change % element.value).toFixed(2)
        if ((isNaN(element.changeValue) === false) && (element.changeValue > 0)) {
            if (element.changeValue > 1) {
                (message = message.concat(`\n${money[i].changeValue} ${money[i].namePlural}`))
            } else {
            (message = message.concat(`\n${money[i].changeValue} ${money[i].name}`))
            }
        }
    }

    window.alert(message)
}

makeChangeSimple()