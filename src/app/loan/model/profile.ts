export class Profile { 
    public firstName: string;
    public lastName: string;
    public email: string;
   public phoneNumber: string;
   public userName: string;
   public password: string;
   public role: string
   
   constructor (firstName: string, lastName: string, email: string, phoneNumber: string, userName: string, password: string,  role: string) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.email = email;
       this.phoneNumber = phoneNumber;
       this.userName = userName;
       this.password = password;
       this.role = role;
   }
}
