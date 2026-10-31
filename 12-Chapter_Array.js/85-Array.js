let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser);

let removed = browser.shift();//remove the first element from the array and return it
console.log(removed);
let removed2 = browser.unshift("brave");
console.log(removed2);
console.log(browser);
let removed3 = browser.shift();
console.log(removed2);
console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
    }
}