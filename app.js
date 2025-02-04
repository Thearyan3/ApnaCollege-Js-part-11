// Callback hell - which is occured because of the nesting of callbacks.

// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         });
//     });
// });

// Promises - The Promise object represents the eventual completion (or failure) of an asynchoronous operation and its resulting value. 

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Aryan is the best",
//     () => {
//         console.log("Sucess: Your data was saved");
//         savetoDb(
//             "Hello1",
//             () => {
//                 console.log("Sucess1: Your data was saved");
//                 savetoDb(
//                     "Hello2",
//                     () => {
//                         console.log("Sucess2: Your data was saved");
//                     },
//                     () => {
//                         console.log("Failure2: Poor Connection!");
//                     });
//             },
//             () => {
//                 console.log("Failure1: Poor Connection!");
//             });
//     },
//     () => {
//         console.log("Failure: Poor Connection!");
//     }); 

//Promise - resolve(success) & reject(failure) --->>
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Sucess : Your data was saved");
//         } else {
//             reject("failure : Weak Connection !");
//         }
//     });
// }

//Promises methods - then() & catch() --->>
function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Sucess : Your data was saved");
        } else {
            reject("failure : Weak Connection !");
        }
    });
}

savetoDb("Aryan")
.then(() => {
    console.log("data1 saved.");
    return savetoDb("hello");
})
.then(() => {
    console.log('data2 saved.');
    return savetoDb("hello2");
}).then(() => {
    console.log("data3 saved.");
})
.catch(() => {
    console.log("Promise was rejected!");
});