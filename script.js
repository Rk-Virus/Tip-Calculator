// js scripts here




document.getElementsByClassName("actionBtn")[0].addEventListener('click', (event)=>{
    event.preventDefault();

    var amount = parseInt(document.getElementById("price").value);
    console.log(amount);
    var tipPercent = parseInt(document.getElementById("tip").value);
    console.log(typeof tipPercent);
    
    var numPeople = parseInt(document.getElementById("numPeople").value);
    console.log(typeof numPeople);
    
    
    var tip = amount * tipPercent;
    var totalAmount = amount + tip;    
    
    var amountEach = Math.round(totalAmount/numPeople);

    document.getElementsByClassName("screenTxt")[0].textContent = `${amountEach}$ Each`;
});