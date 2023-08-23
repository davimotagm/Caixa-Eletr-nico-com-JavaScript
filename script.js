const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
            number: "5160 4196 4843 3388",
            creditBalance: 1000,
            ensign: "American Express",
        },
    ],
};


function makeWithDrawal(objUser) {
    let responseWithDraw = prompt("Digite 1 para poupança ou 2 para crédito");

    if (responseWithDraw === "1" || responseWithDraw === "2") {
        let withdrawnAmount = parseInt(prompt("Valor que deseja sacar"));

        if (Number.isInteger(withdrawnAmount) && withdrawnAmount >= 5 && withdrawnAmount <= 500) {

            if (responseWithDraw === "1") {
                if (withdrawnAmount <= objUser.savingsBalance) {
                    objUser.savingsBalance -= withdrawnAmount;
                    return alert(`Withdrawal carried out. Savings Balance: ${objUser.savingsBalance}`);
                } else {
                    return alert("Balance unavailable");
                }
            } else {
                if (withdrawnAmount <= objUser.cardsInformation[0].creditBalance) {
                    objUser.cardsInformation[0].creditBalance -= withdrawnAmount;
                    return alert(`Withdrawal carried out. Savings Balance: ${objUser.cardsInformation[0].creditBalance}`);
                } else {
                    return alert("Balance unavailable");
                }
            }
        } else {
            return alert("This value is not allowed");
        }
    } else {
        return alert("This value is not allowed");
    }
}

function getBalance(user) {
    let responseBalance = prompt("Digite 1 para poupança ou 2 para crédito");

    if (responseBalance === '1' || responseBalance === '2') {
        let balance = 0
        if (responseBalance === "1") {
            balance = user.savingsBalance;
        } else {
            balance = user.cardsInformation[0].creditBalance;
        }
        return alert(`Saldo: ${balance.toLocaleString()}`);
    } else {
        return alert("This value is not allowed");
    }
}

function makeDeposit(user) {
    let valueForDeposit = parseInt(prompt("Valor que deseja depositar"));

    if (Number.isInteger(valueForDeposit) && valueForDeposit >= 5 && valueForDeposit <= 500) {
        user.savingsBalance += valueForDeposit;
        return alert(`Deposit made successfully. Savings Balance: ${user.savingsBalance}`);
    } else {
        return alert("This value is not allowed");
    }
}

function service() {
    let service = prompt("1. Saque; 2. Saldo; 3. Depósito");

    if (service === '1' || service === '2' || service === '3') {

        if (service === '1') {
            return makeWithDrawal(user);
        } else if (service === '2') {
            return getBalance(user);
        } else {
            return makeDeposit(user);
        }

    } else {
        return alert('Serviço inválido');
    }
}
service();