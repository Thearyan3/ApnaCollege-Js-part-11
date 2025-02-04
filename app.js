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

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "Aryan is the best",
    () => {
        console.log("Sucess: Your data was saved");
        savetoDb(
            "Hello1",
            () => {
                console.log("Sucess1: Your data was saved");
                savetoDb(
                    "Hello2",
                    () => {
                        console.log("Sucess2: Your data was saved");
                    },
                    () => {
                        console.log("Failure2: Poor Connection!");
                    });
            },
            () => {
                console.log("Failure: Poor Connection!");
            });
    },
    () => {
        console.log("Failure: Poor Connection!");
    }); 