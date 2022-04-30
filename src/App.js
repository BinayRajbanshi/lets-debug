

function App() {
    // contract = 3yrs i.e(156weeks or 36month)
  // payment option = monthly or weekly
  // 10% of total will be paid at time of signing
  // remaining payment through installments
  // payment should be completed within 3yrs
  // weekly payment = 50 * payWeekly
  // monthly payment = 100 * payMonthly
  const formulatePayment = (choice, amount) => {
    const initialPayment = (0.1 * amount);
    const remainingTotal = amount - initialPayment;
    if (choice === 'weekly') {
    let weeklyAmountPayment = 0;
    let weekly = remainingTotal / weeklyAmountPayment;
    while (weekly > 156) {
    weeklyAmountPayment += 50;
    let weeks = remainingTotal / weeklyAmountPayment;
    if (weeks % 50 !== 0) {
    weekly = Math.ceil(weeks);
    }
    }
    console.log(`You will be paid ${weeklyAmountPayment} for
    ${weekly} weeks.`);
    }
    
    else if (choice === 'monthly') {
    let monthlyAmountPayment = 0;
    let monthly = remainingTotal / monthlyAmountPayment;
    while (monthly > 36) {
      monthlyAmountPayment += 100;
    let months = remainingTotal / monthlyAmountPayment;
    if (months % 100 !== 0) {
    monthly = Math.ceil(months);
    }
    }
    console.log(`You will be paid ${monthlyAmountPayment} for ${monthly} months.`);
    } 
    };




//   const formulatePayment = ( choice,amount) => {
//     const initialPayment = (0.1 * amount);
//     const remainingPayment = amount - initialPayment;
// // installments should not exceed the 3 yrs limit
//     const noOfWeeks = 156
//     const noOfMonths = 36
//     if(choice === 'weekly'){
//       let weeklyPayment = remainingPayment / noOfWeeks
//       weeklyPayment = weeklyPayment % 50
//       console.log(weeklyPayment)
//     }
//   }

//   // finding sum of multiples of 50 of given number
//   let multipleOf50 = (amount) => {
//     let sum = 0

//     let i;
//     for(i = 1 ; i < amount ; i++){
//       if(i%50===0){
//         sum = sum + i
//       }
//     }
//     return sum
//   }
  
  return (
    <div>
     <button onClick={()=>formulatePayment('weekly' , 123000)}>Weekly choise</button>
     <button onClick={()=>formulatePayment('monthly' , 123000)}>MOnthly choise</button>
    </div>
  );
}

export default App;
