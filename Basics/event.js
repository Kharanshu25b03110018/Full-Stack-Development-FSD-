// function signup(){
//     console.log("signup function called -> Welcome");
//     sendconfirmationEmail();
//     sendnotification();
// }

// function sendconfirmationEmail(){
//     console.log("sendconfirmationEmail function called -> Email sent");
// }
// function sendnotification(){
//     console.log("sendnotification function called -> Notification sent");
// }
// signup();

import eventemmiter from "events";
// const event = new eventemmiter();
const emitter = new eventemmiter();

emitter.on("OrderPlaced", (ordername, username) => {
    console.log(`OrderPlaced event called -> Order Placed: ${ordername} for ${username}`);
});
emitter.on("OrderPlaced", () => {
    console.log("confirmation email sent to user");
});
emitter.on("OrderPlaced", () => {
    console.log("Inventory updated for the order");
})

// emitter.once("OrderPlaced", (ordername, username) => {
//     console.log(` Order Placed: ${ordername} for ${username}`);
// });
// emitter.once("OrderPlaced", () => {
//     console.log("confirmation email ");
// });
// emitter.once("OrderPlaced", () => {
//     console.log("price");
// })

 emitter.emit("OrderPlaced", "Laptop", "Ab");



// const login = new eventemmiter();
// login.on("Login", () => {
//     console.log("Login event called -> User Logged In");
// });
// login.emit("Login");