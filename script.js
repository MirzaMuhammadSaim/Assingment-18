const numberToWord = (n) => {
    const inputNum = n.split("").map((e) => parseInt(e));
    const oneTo9 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tenTo20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const remaining = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];
  
    const cheaking = (a, b, val) => {
      return a === undefined || b === undefined ? a === undefined && b === undefined ? "" : a === undefined ? b + val : a + val : `${a} ${b} ${val}`;
    };
    const cheaking2 = (a, val) => (a === undefined ? "" : tenTo20[inputNum[1]] + val);
    const cheaking3 = (a, val) => (a === undefined ? "" : oneTo9[inputNum[0] - 1] + val);
  
    const toWord = [];
    let i = 0;
    while (i < inputNum.length) {
      if (inputNum.length === 1) {
        toWord.push(oneTo9[inputNum[0] - 1]);
        inputNum.splice(0, 1);
      } else if (inputNum.length === 2) {
        if (inputNum[0] === 1) {
          toWord.push(tenTo20[inputNum[1]] === undefined ? "" : tenTo20[inputNum[1]]);
          inputNum.splice(0, 2);
        } else {
          toWord.push(`${remaining[inputNum[0] - 2] === undefined ? "" : remaining[inputNum[0] - 2]} ${oneTo9[inputNum[1] - 1] === undefined ? "" : oneTo9[inputNum[1] - 1]}`);
          inputNum.splice(0, 2);
        }
      } else if (inputNum.length === 3) {
        toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " hundred"));
        inputNum.splice(0, 1);
      } else if (inputNum.length === 4) {
        toWord.push(oneTo9[inputNum[0] - 1] === undefined ? "" : oneTo9[inputNum[0] - 1] + " thousand");
        inputNum.splice(0, 1);
      } else if (inputNum.length === 5) {
        if (inputNum[0] === 1) {
          toWord.push(cheaking2(tenTo20[inputNum[1]], " thousand"));
          inputNum.splice(0, 2);
        } else {
          toWord.push(cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " thousand"));
          inputNum.splice(0, 2);
        }
      } else if (inputNum.length === 6) {
        toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " lac"));
        inputNum.splice(0, 1);
      } else if (inputNum.length === 7) {
        if (inputNum[0] === 1) {
          toWord.push(cheaking2(tenTo20[inputNum[1]], " lac"));
          inputNum.splice(0, 2);
        } else {
          toWord.push(cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " lac"));
          inputNum.splice(0, 2);
        }
      } else if (inputNum.length === 8) {
        toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " crore"));
        inputNum.splice(0, 1);
      } else if (inputNum.length === 9) {
        if (inputNum[0] === 1) {
          toWord.push(cheaking2(tenTo20[inputNum[1]], " crore"));
          inputNum.splice(0, 2);
        } else {
          toWord.push(cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " crore"));
          inputNum.splice(0, 2);
        }
      } else if (inputNum.length === 10) {
        toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " arab"));
        inputNum.splice(0, 1);
      } else if (inputNum.length === 11) {
        if (inputNum[0] === 1) {
          toWord.push(cheaking2(tenTo20[inputNum[1]], " arab"));
          inputNum.splice(0, 2);
        } else {
          toWord.push(cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " arab"));
          inputNum.splice(0, 2);
        }
      } else if (inputNum.length === 12) {
        toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " kharab"));
        inputNum.splice(0, 1);
      }
    }
  
    const mainArr = toWord.filter((e) => e !== "");
    return mainArr.join(" ");
  };
  
  let lowerCase = true;
  let upperCase = false;
  let sentenceCase = false;
  
  radio1.addEventListener("click", () => {
    lowerCase = true;
    upperCase = false;
    sentenceCase = false;
  });
  radio2.addEventListener("click", () => {
    upperCase = true;
    lowerCase = false;
    sentenceCase = false;
  });
  radio3.addEventListener("click", () => {
    sentenceCase = true;
    lowerCase = false;
    upperCase = false;
  });
  
  convertBtn.addEventListener("click", function () {
    const n = document.getElementsByClassName("numInput")[0].value;
    const value = numberToWord(n);
    if (n === undefined) return false;
    else if (lowerCase) {
      output.innerText = value.toLowerCase();
    } else if (upperCase) {
      output.innerText = value.toUpperCase();
    } else if (sentenceCase) {
      const toArr = value.split(" ");
      const answer = [];
      for (let i = 0; i < toArr.length; i++) {
        if (toArr[i] === "") continue;
        answer.push(`${toArr[i][0].toUpperCase()}${toArr[i].slice(1)}`);
      }
      output.innerText = answer.join(" ");
    }
  });
  