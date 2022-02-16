let timerArray = process.argv.slice(2);

timerArray = timerArray.sort((a, b) => a - b);

for (let time of timerArray) {
  console.log(time);
  setTimeout(() => {
    console.log("beep");
    // no sound
    process.stdout.write('\x07');
  }, time * 1000);
}
