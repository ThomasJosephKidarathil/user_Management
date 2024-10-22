class Landing {
    dataBase = {}
    // dataBase={ "milan@gmail.com":{name:"milan", email:milan@gmail.com, password:"1234"}}
    registerUser() {
        // to check weather the data is stored corresponding to the key userData local storage
        if (localStorage.getItem('userData') != null) {
            this.getData()
        }
        // assign values to 3 veriables using id_name.value from the registration page
        let firstName = username.value;
        let email = exampleInputEmail1.value;
        let password = exampleInputPassword1.value;
        if (firstName !== '' && email !== '' && password !== '') {
          // to check weather any field is not empty
            if (email in this.dataBase) 
            {
                // check the given mail is already used or not
                alert(`${email} already exists`)
            } 
            else 
            {
                // Data stored to the dataBase using key corresponds to the mail
                // this.dataBase['km@gmail.com']={name='km',email='km@gmail.com',password='1234'}
                this.dataBase[email]=
                {
                    name:firstName,
                    email:email,
                    password:password
                }
                // save data
                this.saveData();
                alert('Registration Successfully')
                // methods to redirect to the new html page
                window.location="login.html"
            }
        }
        else {
            alert("Please enter valid values")
        }
    }
    getData() {
        // to read data from local storage
        this.dataBase = JSON.parse(localStorage.getItem('userData'))
    }
    saveData(){
        // to save datas to the local storage
        localStorage.setItem('userData',JSON.stringify(this.dataBase))
    }
    login()
    {
        // create two veriables to store values from the login page
        let loggedEmail=userEmail.value;
        let loggedPassword=userPassword.value;
        // accessing the data from the local storage
        this.getData();
        // check weather the given mail and password is stored in the local storage
        if (loggedEmail =='' || loggedPassword =='') 
        {
            alert('Enter valid value')            
        } 
        else 
        {
            // to check the logged mail is stored in local storage
            if (loggedEmail in this.dataBase)
            {
                // if mail found in database then check the password is correct along with the mail
                if (this.dataBase[loggedEmail].password===loggedPassword)
                {
                    localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                    // redirect to home page when mail and password correct
                    window.location="home.html"    
                } 
                else 
                {
                    alert('Password mismatch')    
                }
            } 
            else 
            {
                alert(`${loggedEmail} not found`)    
            }
        }
    }
}
const obj = new Landing()