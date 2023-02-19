// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

//  USING ARRAYS WITH FOR

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(arr, eventName){
    const newArray = [];

    for (let i = 0; i < arr.length; i++){
        let message = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
        newArray.push(message);
    };
    return newArray;
};

function countDown(int) {
    let i = 0;
    while (int >= 0){
        console.log(int);
        int--;
    }
}