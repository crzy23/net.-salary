//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax),
// NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


//functions to calculate PAYE

function calculatePAYE(grossSalary) {
    
    let paye = 0;
    if(grossSalary <= 24000) {
        paye = grossSalary * 0.1;

    }
else if (grossSalary <= 32333) {
    paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
}
else if (grossSalary <= 500000) {
    paye = (24000 * 0.1) + (82333 * 0.25) + ((grossSalary - 32333) * 0.3);
}
else if (grossSalary <= 800000) {
    paye = (24000 * 0.1) + (82333 * 0.25) + (467667 * 0.3) + ((grossSalary - 500000) * 0.325);
}
else {
    paye = (24000 * 0.1) + (82333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossSalary - 9600000) * 0.35);
}
return paye;
}

//functions to calculate NHIF deductions rates

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if(grossSalary <= 7999) return 300;
    else if(grossSalary <= 11999) return 400;
    else if(grossSalary <= 14999) return 500;
    else if(grossSalary <= 19999) return 600;
    else if(grossSalary <= 24999) return 750;
    else if(grossSalary <= 29999) return 850;
    else if(grossSalary <= 34999) return 900;
    else if(grossSalary <= 39999) return 950;
    else if(grossSalary <= 44999) return 1000;
    else if(grossSalary <= 49999) return 1100;
    else if(grossSalary <= 59999) return 1200;
    else if(grossSalary <= 69999) return 1300;
    else if(grossSalary <= 79999) return 1400;
    else if(grossSalary <= 89999) return 1500;
    else if(grossSalary <= 99999) return 1600;
    else return 1700;
      
}

//functions to calculate NSSF deductions based on rates

function calculateNSSF(grossSalary) {
    let tier1 = math.min(grossSalary, 7000) * 0.06;
    let tier2 = Math.max(grossSalary - 7000) * 0.06;
    return tier1 + tier2;
}
//net salary calculate

function  calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let netSalary = grossSalary - paye - nhif - nssf;
    return{
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary,
    };
}

console.log('grossSalary: ksh ${salaryDetails.grossSalary.toFixed(2)}');
console.log('PAYE: ksh ${salaryDetails.paye.toFixed(2)}');
console.log('NHIF deductions: ksh ${salaryDetails.paye.toFixed(2)}');
console.log('NSSF deductions: ksh ${salaryDetails.nssf.toFixed(2)}');
console.log('Net Salary; ksh 4{salaryDetails.netSalary.toFixed(2)}');
