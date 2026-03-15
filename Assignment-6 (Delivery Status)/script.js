function getOrder() {
  let name = String(document.getElementById("client").value);
  let city = String(document.getElementById("city").value);
  let status = String(document.getElementById("paymentStatus").value);
  
  if (status == "pending") {
    alert(` ${name} , please complete payment first.`);
    console.log(` ${name} , please complete payment first.`);
  }
  else if (status == "paid") {
     if (city == "Karachi") {
       alert(` ${name} , same-day delivery available.`);
    console.log(` ${name} , same-day delivery available.`);
     }
     else if (city == "Lahore") {
       alert(` ${name} , delivery in 2 days.`);
    console.log(` ${name} , delivery in 2 days.`);
     }
      else{
      alert(` ${name} , delivery in 3–5 days.`);
    console.log(` ${name} , delivery in 3–5 days.`);
     }
  }
  else {
    alert("Something Error");
    console.log("Something Error");
  }

};