const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// Old School - Funão delay aciona o .then após 1s
/*function umPorSegundo() {
  delay().then(() => {
    console.log("1s");
    delay().then(() => {
      console.log("2s");
      delay().then(() => {
        console.log("3s");
      });
    });
  });
}
umPorSegundo();*/

// New School - Async Await
const umPorSegundoArrow = async () => {
    await delay();
    console.log("1s");
    await delay();
    console.log("2s");
    await delay();
    console.log("3s");
}
umPorSegundoArrow();