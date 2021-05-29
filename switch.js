//! example 
// switch (newUser) {
//     case "Alesha":
//     case "Alex":
//         alert("Hello " + newUser)
//         break;
//     case "Egor":
//         alert("Hello " + newUser)
//         break;
//     case "Lera":
//         alert("Hello " + newUser)
//         break;

//     default:
//         alert("error")
//         break;
// }

//* exercise 1

//TODO: rewrote with if construction 
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   } 

// ! works 
// const browser = "a"

// if (browser === "Edge") {
//     alert("You've got the Edge!")
// } else if (browser === "Chrome") {
//     alert("Okay we support these browsers too")
// } else if (browser === "Firefox") {
//     alert("Okay we support these browsers too")
// } else if (browser === "Opera") {
//     alert("Okay we support these browsers too")
// } else {
//     alert("We hope that this page looks ok!")
// }

//* 2-nd variant
//! works 
const browser = "a"
if (browser === "Edge") {
    alert("You've got the Edge!")
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Opera") {
    alert("Okay we support these browsers too") 
} else {
    alert("We hope that this page looks ok!")
}

