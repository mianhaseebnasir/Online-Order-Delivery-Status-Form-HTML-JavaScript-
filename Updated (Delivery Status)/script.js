function getOrder(){

let client=document.getElementById("client").value
let city=document.getElementById("city").value
let payment=document.getElementById("paymentStatus").value

alert(
`Order Details

Customer: ${client}
City: ${city}
Payment: ${payment}`
)

}