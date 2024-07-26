import { useState } from "react"
import styles from "./receipt.module.css"

export default function Receipt( {customerName, customerEmail, customerPhone, customerOrder, customerTotalPrice})
{
    
    return(
        <div>
            {customerName}
            {customerEmail}
            {customerPhone}
            <div>
            {
                    Array.isArray(customerOrder) ? (
                        customerOrder.map((orderItem, index) => (
                            <div key={index}>
                                {orderItem.name}
                            </div>
                        ))
                    ) : (
                        <div>No orders available</div>
                    )
                }
            </div>
            {customerTotalPrice}
        </div>
    )
}