export class Loan { 
   public loanNumber: string;
   public loanAmount: number;
   public loanTerm: string;
   public originationDate: Date;
   public originationAccount: string;
   public firstName: string;
    public lastName: string;
   public status: string;
   constructor (loanNumber: string, loanAmount: number, loanTerm: string, originationDate: Date, firstName: string, lastName: string,  status: string) {
       this.loanNumber = loanNumber;
       this.loanAmount = loanAmount;
       this.loanTerm = loanTerm;
       this.originationDate = originationDate;
       this.firstName = firstName;
       this.lastName = lastName;
       this.status = status;
   }
}
