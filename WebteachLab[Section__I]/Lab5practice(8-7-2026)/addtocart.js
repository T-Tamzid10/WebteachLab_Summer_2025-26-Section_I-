

function calculateTotal()
{
    const price = document.getElementById("unitprice").value;
    const quantity = document.getElementById("quantity").value;
   
    if (quantity <= 0)
    {
        
        document.getElementById("quantityError").innerHTML = "Quantity must be greater than 0";
        document.getElementById("quantityError").style.color = "red";
        document.getElementById("payable").value = 0;
        document.getElementById("cartBtn").style.display = "none";
    }
    else
    {
        document.getElementById("cartBtn").style.display = "block";
        document.getElementById("quantityError").innerHTML = "";
        var payable = price * quantity;
        document.getElementById("payable").value = payable;
    }
    
}

