// Budget Planner
function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    if (income && expenses) {
        const savings = income - expenses;
        document.getElementById('budgetResult').innerHTML = 
            savings > 0 ? `You can save $${savings.toFixed(2)} per month.` : `You are overspending by $${Math.abs(savings).toFixed(2)}.`;
    } else {
        document.getElementById('budgetResult').innerHTML = "Please enter valid amounts.";
    }
}

// Emergency Fund Calculator
function calculateEmergencyFund() {
    const expenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const months = parseFloat(document.getElementById('months').value);

    if (expenses && months) {
        const emergencyFund = expenses * months;
        document.getElementById('emergencyResult').innerHTML = `You need $${emergencyFund.toFixed(2)} in your emergency fund.`;
    } else {
        document.getElementById('emergencyResult').innerHTML = "Please enter valid amounts.";
    }
}

// Retirement Savings Estimator
function calculateRetirement() {
    const savings = parseFloat(document.getElementById('currentSavings').value);
    const contribution = parseFloat(document.getElementById('monthlyContribution').value);
    const years = parseFloat(document.getElementById('years').value);

    if (savings && contribution && years) {
        const futureSavings = savings + (contribution * 12 * years);
        document.getElementById('retirementResult').innerHTML = `Your estimated retirement savings will be $${futureSavings.toFixed(2)}.`;
    } else {
        document.getElementById('retirementResult').innerHTML = "Please enter valid amounts.";
    }
}

// Asset Allocation Modeler
function suggestAssetAllocation() {
    const age = parseFloat(document.getElementById('age').value);

    if (age) {
        const stockPercentage = 100 - age;
        const bondPercentage = age;

        document.getElementById('allocationResult').innerHTML = 
            `Suggested allocation: ${stockPercentage}% stocks, ${bondPercentage}% bonds.`;
    } else {
        document.getElementById('allocationResult').innerHTML = "Please enter your age.";
    }
}
