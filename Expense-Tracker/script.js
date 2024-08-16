const expenseform = document.getElementById('expenseform')
const Expenselist = document.getElementById('Expenselist')

expenseform.addEventListener('submit', function(event){
    event.preventDefault();
    const description = document.getElementById('description').value;
    const category= document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if(description && category && !isNaN(amount)){
        const newrow = document.createElement('tr')

        newrow.innerHTML = `<td>${description}</td>
        
        <td>${category}</td>
        <td>${amount}</td>  
          `;
          Expenselist.appendChild(newrow)

          document.getElementById
          ('category').value=''
          document.getElementById
          ('description').value=''
          document.getElementById
          ('amount').value=''
    }
    else{
        alert("Please fill out all the fields with valid data")
    }
   

})