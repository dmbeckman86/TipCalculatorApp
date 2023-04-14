/* 
functions you must use
-----------------------------------------
calculateBill()
increasePeople()
decreasePeople()

*****These are all the DIV ID's you're gonna need access to ⬇️****
----------------------------------------------------------------------
#1 ID ➡️ 'billTotalInput' = User input for bill total
#2 ID ➡️ 'tipInput' = User input for tip
#3 ID ➡️ 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID ➡️ 'perPersonTotal' = Total dollar value owed per person
*/


const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    
    const bill = Number(billInput.value)

    const tipPercentage = Number(tipInput.value) / 100
  
    const tipAmount = bill * tipPercentage
  
    const total = tipAmount + bill
  
  const perPersonTotal = total / numberOfPeople
  
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}
  
const increasePeople = () => {

    // increment the amount of people
  numberOfPeople += 1
  
  numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new numberOfPeople
  calculateBill()
}
  
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1 ) {
    return
  }
    
    // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
  calculateBill()
}