class BankAccount {

  constructor(owner, balance) {
      this.owner = 'String';
      this.balance = Dollars;

    }

    deposit( amount: Dollars )
    withdrawal( amount: Dollars )

}

class CheckingAccount extends BankAccount{
constructor(){
  this.insuffcientFundsFee : Dollars
}

processCheck( checkToProcess:Check)
withdrawal(amount:Dollars)

}

class SavingsAccount extends BankAccount{
constructor(){
  this.annualInterestRate : Percentage
}

depositMonthlyInterest()
withdrawal(amount:Dollars)

}
