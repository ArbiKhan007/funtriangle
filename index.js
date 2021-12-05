//ifTriangle
let inputs = document.querySelectorAll(".inp");
let submitBtn = document.querySelector(".submit");
let result = document.querySelector(".result__output");

//quiz
let quiz = document.querySelector(".quiz");
let quizSubmitBtn = document.querySelector("#quiz__submit");
let quizResult = document.querySelector(".quiz__result");

//hypotenuse quiz
let a = document.querySelector("#inputA");
let b = document.querySelector("#inputB");
let hypotSubmitBtn = document.querySelector("#hypotSubmit");
let hypotResult = document.querySelector("#hypotResult");

//area
let base = document.querySelector("#base");
let height = document.querySelector("#height");
let areaSubmitBtn = document.querySelector("#areaSubmit");
let areaResult = document.querySelector("#areaResult");

function inputValidation(input1, input2, input3) {
  if (input1.trim() === "" || input2.trim() === "" || input3.trim() === "") {
    result.innerText = "Fill all angle details";
    result.style.color = "red";
    return false;
  }

  return true;
}

//isTriangle Logic
function isTriangle() {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let angleOne = document.querySelector("#one").value;
    let angleTwo = document.querySelector("#two").value;
    let angleThree = document.querySelector("#three").value;

    if (!inputValidation(angleOne, angleTwo, angleThree)) {
      return;
    }

    let sum = calcSumOfAngles(angleOne, angleTwo, angleThree);

    if (sum === 180) {
      result.innerText = "Yayy, a Triangle.";
      result.style.color = "yellow";
    } else {
      result.innerText = "Not Triangle. Sad.";
      result.style.color = "grey";
    }
  });
}

function calcSumOfAngles(a, b, c) {
  let sum = parseFloat(a) + parseFloat(b) + parseFloat(c);

  return sum;
}

//quiz logic
function calculateScore() {
  const correctAnswers = ["90deg", "right angled"];

  quizSubmitBtn.addEventListener("click", function (e) {
    let index = 0;
    let score = 0;

    e.preventDefault();
    let data = new FormData(quiz);

    for (let i of data.entries()) {
      if (i[1] === correctAnswers[index++]) {
        score++;
      }
    }

    quizResult.innerText = " " + score;
    console.log(score);
  });
}

//hypotenuse problem
function hypotenuse() {
  hypotSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let aNum = parseFloat(a.value);
    let bNum = parseFloat(b.value);

    let hypotenuse = Math.sqrt(aNum * aNum + bNum * bNum);

    hypotResult.innerText =
      "The length of the hypotenuse is " + hypotenuse + "cm";
  });
}

function area() {
  areaSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let baseNum = parseFloat(base.value);
    let heightNum = parseFloat(height.value);

    areaResult.innerHTML =
      "The area of the triangle is " +
      0.5 * (baseNum * heightNum) +
      "cm <sup>2</sup>";
  });
}

isTriangle();
calculateScore();
hypotenuse();
area();
