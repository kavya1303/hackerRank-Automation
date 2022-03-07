const loginLink = "https://www.hackerrank.com/auth/login";
const puppeteer = require("puppeteer");
const codeFile = require("./code");
console.log("before");

let email = "limiy86174@ishop2k.com";
let password = "kavya@1234";
// let page;

(async function () {
  try {
    let browserWillLaunch = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized--"],
      defaultViewport: null,
    });

    let newTab = await browserWillLaunch.newPage();
    await newTab.goto(loginLink);

    await newTab.type("input[id='input-1']", email, {
      delay: 100,
    });

    await newTab.type("input[id='input-2']", password, {
      delay: 100,
    });

    await newTab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",
      { delay: 50 }
    );

    await waitAndClick('a[data-attr1="algorithms"]', newTab);

    await waitAndClick('input[value="warmup"]', newTab);

    let allQuestionSelector = await newTab.$$(
      ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
    );
    console.log(allQuestionSelector.length);

    await questionSolver(newTab, allQuestionSelector[0], codeFile.answers[0]);
  } catch (error) {
    console.log(error);
  }
})();

// let browserWillLaunchPromise = puppeteer.launch({
//   headless: false,
//   args: ["--start-maximized--"],
//   defaultViewport: null,
// });

// browserWillLaunchPromise
//   .then(function (browserInstance) {
//     let newTabPromise = browserInstance.newPage();
//     return newTabPromise;
//   })
//   .then(function (newTab) {
//     page = newTab;
//     let websiteWillBeOpenedPromise = newTab.goto(loginLink);

//     return websiteWillBeOpenedPromise;
//   })
//   .then(function () {
//     let emailWillBeEnteredPromise = page.type("input[id='input-1']", email, {
//       delay: 100,
//     });
//     return emailWillBeEnteredPromise;
//   })
//   .then(function () {
//     let passwordWillBeEntered = page.type("input[id='input-2']", password, {
//       delay: 100,
//     });
//     return passwordWillBeEntered;
//   })
//   .then(function () {
//     let loginButtonClickPromise = page.click(
//       ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",
//       { delay: 50 }
//     );
//     return loginButtonClickPromise;
//   })
//   .then(function () {
//     let algoSecClickPromise = waitAndClick('a[data-attr1="algorithms"]', page);
//     return algoSecClickPromise;
//   })
//   .then(function () {
//     let warmupSecWillClickPromise = waitAndClick('input[value="warmup"]', page);
//     return warmupSecWillClickPromise;
//   })
//   .then(function () {
//     let allQuestionSelectorPromise = page.$$(
//       ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled"
//     );
//     return allQuestionSelectorPromise;
//   })
//   .then(function (totalQues) {
//     console.log("Number of questions-> " + totalQues.length);
//     let questionWillbeSolved = questionSolver(
//       page,
//       totalQues[0],
//       codeFile.answers[0]
//     );

//     return questionWillbeSolved;
//   });

async function waitAndClick(selector, cPage) {
  try {
    await cPage.waitForSelector(selector);
    await cPage.click(selector, { delay: 100 });
  } catch (error) {
    console.log(error);
  }
}

// function waitAndClick(selector, cPage) {
//   return new Promise(function (resolve, reject) {
//     let waitForModalPromise = cPage.waitForSelector(selector);
//     waitForModalPromise
//       .then(function () {
//         let clickModal = cPage.click(selector, { delay: 100 });
//         return clickModal;
//       })
//       .then(function () {
//         resolve();
//       })
//       .catch(function () {
//         reject();
//       });
//   });
// }

async function questionSolver(page, question, answer) {
  try {
    let questionWillBeClick = await question.click();
    await waitAndClick(".monaco-editor.no-user-select.vs", page);

    await waitAndClick(".checkbox-input", page);

    await waitAndClick(".input.text-area.custominput.auto-width", page);

    await page.type(".input.text-area.custominput.auto-width", answer, {
      delay: 20,
    });

    await page.keyboard.down("Control");
    await page.keyboard.press("A", { delay: 100 });
    await page.keyboard.press("X", { delay: 100 });
    await page.keyboard.up("Control");
    await waitAndClick(".monaco-editor.no-user-select.vs", page);
    await page.keyboard.down("Control");

    await page.keyboard.press("A", { delay: 100 });
    await page.keyboard.press("V", { delay: 100 });
    await page.keyboard.up("Control");
    await page.click(".hr-monaco__run-code", { delay: 50 });
  } catch (error) {
    console.log(Error);
  }
}
// function questionSolver(page, question, answer) {
//   return new Promise(function (resolve, reject) {
//     let questionWillBeClickPromise = question.click();
//     questionWillBeClickPromise.then(function(){
//       let waitForEditor=waitAndClick('.monaco-editor.no-user-select.vs',page)
//       return waitForEditor;
//     }).then(function () {
//       let customInputClicked= waitAndClick('.checkbox-input',page);

//       return customInputClicked;
//     }).then(function(){
//       return waitAndClick('.input.text-area.custominput.auto-width',page)
//     }).then(function(){
//       return page.type('.input.text-area.custominput.auto-width',answer,{delay:20})
//     }).then(function(){
//       let ctrlisPressedPromise=page.keyboard.down('Control');
//       return ctrlisPressedPromise;

//     }).then(function(){
//       let AisPressedPromise=page.keyboard.press("A",{delay:100})
//       return AisPressedPromise;
//     }).then(function(){
//      let XisPressed=page.keyboard.press("X",{delay:100})
//      return XisPressed;
//     }).then(function(){
//       let ctrlIsReleasedPromise=page.keyboard.up("Control");
//       return ctrlIsReleasedPromise;
//     }).then(function(){
//       let waitForCodeAreaPromise=waitAndClick('.monaco-editor.no-user-select.vs',page)
//       return waitForCodeAreaPromise;
//     }).then(function(){
//       let ctrlisPressedPromise=page.keyboard.down('Control');
//       return ctrlisPressedPromise;

//     }).then(function(){
//       let AisPressedPromise=page.keyboard.press("A",{delay:100})
//       return AisPressedPromise;
//     }).then(function(){
//      let VisPressed=page.keyboard.press("V",{delay:100})
//      return VisPressed;
//     }).then(function(){
//       let ctrlIsReleasedPromise=page.keyboard.up("Control");
//       return ctrlIsReleasedPromise;
//     }).then(function(){
//      let runButtonClicked=page.click(".hr-monaco__run-code",{delay:50});
//      return runButtonClicked;

//     }).then(function(){
//       resolve();
//     }).catch(function(){
//       reject();
//     })
//   })
// }

// console.log("after");

//syntactic sugar- syntax that makes things easier to read and express
//like async and await instead of then chaining
