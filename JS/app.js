



function Calc(){

    let dateInput = document.getElementById('date').value
    let nameInput = document.getElementById('name').value

    let alphaReg = /^[A-Za-z ]+$/;
    if(nameInput == '' || !(nameInput.match(alphaReg))){
        alert("Please Enter a valid name")
    }else if(dateInput == ''){
        alert("Please Enter a valid date of birth")
    }
    else{
   
        const diff = Date.now() - new Date(dateInput).getTime();
        const ageDate = new Date(diff);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (age <= 0) {
            alert('You are not eligible')
        }else{
            document.getElementById('display').innerHTML = `${nameInput} you are ${age} years old`;
            document.getElementById("nameInput").value = "";
        }
    }
}
    
