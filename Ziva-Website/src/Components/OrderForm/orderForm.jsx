import Receipt from "../Receipt/receipt";
import styles from "./orderForm.module.css"
import { useEffect, useState } from "react";

export default function OrderForm( { cartContents } )
{
    const [ currentCartContents, setCurrentCartContents ] = useState( () =>
    {
        const savedCart =  localStorage.getItem("currentCartContents");
        const initialCartValue = JSON.parse(savedCart);
        return initialCartValue || cartContents || [] ;
    });

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState(0);

    const [ orderContent, setOrderContent ] = useState({ name : "", email : "", phoneNumber : 0, orderItems : {}});
    const [ totalPrice, setTotalPrice ] = useState(0);
         


    function updateName(event)
    {
        setName(event.target.value);
    }
    function updateEmail(event)
    {
        setEmail(event.target.value);
    }
    function updatePhoneNumber(event)
    {
        setPhoneNumber(event.target.value)
    }

    function calculateTotalPrice()
    {
            
        let runningTotal = 0;
        console.log("Runing Total Pre: " , runningTotal);

            for (let i = 0; i < orderContent.orderItems.length; i++)
            {
                let itemQuantity = Number(orderContent.orderItems[i].quantity);
                let itemPrice = Number(orderContent.orderItems[i].item.price);
                let itemTotalPrice = itemQuantity * itemPrice;
                runningTotal += itemTotalPrice;
            }

            console.log("Runing Total Post: " , runningTotal);

            setTotalPrice(parseFloat(runningTotal).toFixed(2));
        
    }

    function handleSubmitOrder(e)
    {
        e.preventDefault();

        //const namePattern = /^[a-zA-Z\s]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneNumberPattern = /^[0-9]{10,15}$/; // Adjust the range as needed

        if (name != "" && email != "" && phoneNumber != "")
        {

            if (!emailPattern.test(email)) {
                window.alert("Please enter a valid email address.");
                return;
            }
    
            if (!phoneNumberPattern.test(phoneNumber)) {
                window.alert("Please enter a valid phone number (10-15 digits).");
                return;
            }

            setOrderContent( { name : name, email: email, phoneNumber: phoneNumber, orderItems: currentCartContents});
            calculateTotalPrice();

            window.alert("Your Order has been sent, you will receive a reply within 1-2 working days. Thank you!")
        

        }
        else
        {
            window.alert("Please complete the form!");
        }
        
    }



    useEffect(() =>
    {
        console.log(orderContent);
        calculateTotalPrice();
    }, [orderContent])

    useEffect(() =>
    {
        setCurrentCartContents(cartContents);
    }, [cartContents]);
    return(
        <div>
        <div className={styles.orderForm}>
            Order Form

                
            
                <label htmlFor="orderNameField">Your Name:</label>
                <input id="orderNameField" name="orderNameField" placeholder="Your Name"  onChange={(event) => updateName(event)}></input>

                <label htmlFor="orderEmailField">Your Email:</label>
                <input id="orderEmailField" name="orderEmailField" placeholder="email@address.com"  onChange={(event) => updateEmail(event)}></input>

                <label htmlFor="orderPhoneField">Your Phone Number:</label>
                <input id="orderPhoneField" name="orderPhoneField" onChange={(event) => updatePhoneNumber(event)}></input>

                <button onClick={(e) => handleSubmitOrder(e)}>Send Order</button>
                </div>
            <div>               
                 <Receipt 
                    customerName={orderContent.name}
                    customerEmail={orderContent.email}
                    customerPhone={orderContent.phoneNumber}
                    customerOrder={orderContent.orderItems}
                    customerTotalPrice={`Total Price: ${totalPrice}`}
                />
            </div>

        </div>
    )
}