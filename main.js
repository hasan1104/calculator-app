// let temp = 0;
// let opt;
// let calc = {
// 	ans: [],
// 	mul: 1,
// 	getNum: function (x) {
// 		temp += x.toString();
// 	},
// 	addition: function () {
// 		if (this.ans.length > 0) {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] += this.ans[1];
// 			this.ans[1] = 0;
// 		} else {
// 			this.ans.push(Number(temp));
// 		}
// 		temp = 0;
// 		opt = "add";
// 	},
// 	subtraction: function () {
// 		this.ans[0] -= Number(temp);
// 		temp = 0;
// 		opt = "sub";
// 	},
// 	multiplication: function () {
// 		if (this.ans.length === 0) {
// 			console.log(Number(temp));
// 			this.ans.push(Number(temp));
// 			temp = 0;
// 		} else {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] *= this.ans[1];
// 		}

// 		opt = "mul";
// 	},
// 	division: function () {
// 		if (this.ans.length === 0) {
// 			this.ans.push(Number(temp));
// 			temp = 0;
// 		} else {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] /= this.ans[1];
// 		}

// 		opt = "div";
// 	},
// 	calculate: function () {
// 		if (opt == "add") {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] += this.ans[1];
// 			this.ans[1] = 0;
// 			temp = 0;
// 		}
// 		if (opt == "sub") {
// 			if (Number(temp) !== undefined) {
// 			}
// 			this.ans[1] = Number(temp);
// 			this.ans[0] -= this.ans[1];
// 			this.ans[1] = 0;
// 			temp = 0;
// 		}
// 		if (opt == "mul") {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] *= this.ans[1];
// 			this.ans[1] = 0;
// 			temp = 0;
// 		}
// 		if (opt == "div") {
// 			this.ans[1] = Number(temp);
// 			this.ans[0] /= this.ans[1];
// 			this.ans.pop();
// 			temp = 0;
// 		}
// 		document.getElementById("display").innerHTML = this.ans[0]
// 			? this.ans[0]
// 			: 0;
// 		opt = null;
// 	},
// 	delete: function () {
// 		if (this.num.length > 0) {
// 			this.num.pop();
// 			document.getElementById("display").innerHTML = this.num.join("+");
// 		}
// 	},
// 	reset: function () {
// 		this.ans = [];
// 		opt == "mul" ? (temp = 1) : (temp = 0);
// 		document.getElementById("display").innerHTML = 0;
// 	},
// };
let pre = "";
let prre = "";
let curr = "";
let operator;

let comp;
let resetBtn = document.getElementsByClassName("reset");
let preEl = document.getElementById("pre");
let currEl = document.getElementById("curr");
let oprBtn = document.querySelectorAll(".operator");

let number = document.querySelectorAll(".number");

//apend number in current var
number.forEach(numberBtn => {
	numberBtn.addEventListener("click", function () {
		if (numberBtn.innerHTML.toString() === "." && curr.includes(".")) return;
		curr += numberBtn.innerHTML.toString();
		appendNumber();
	});
});
//yext append

function appendNumber() {
	curr === "" ? (preEl.innerText = curr) : (preEl.innerText = prre + curr);
}
// take operator
oprBtn.forEach(oprBtn => {
	oprBtn.addEventListener("click", function () {
		if (operator === undefined) {
			operator = oprBtn.innerHTML;
		}
		prre = curr + operator;
		preEl.innerText = prre;
		let prev = parseFloat(pre);
		let cur = parseFloat(curr);
		let comp;
		if (pre === "") {
			pre = curr;
			curr = "";
		} else if (prev !== "" && cur !== "") {
			if (operator == "+") {
				comp = prev + cur;
			}
			if (operator == "-") {
				comp = prev - cur;
			}
			if (operator == "x") {
				comp = prev * cur;
			}
			if (operator == "/") {
				comp = prev / cur;
			}

			operator = oprBtn.innerHTML;

			pre = comp;
			curr = "";
		}

		if (operator == "=") {
			document.getElementById("display").innerHTML = comp;
			operator = undefined;
			pre = comp;
			curr = "";
			preEl.innerText = "";
		}
		if (typeof comp === "number" || operator == "=")
			document.getElementById("display").innerHTML = comp;
	});
});
//Calculate
// function calculate(pre, curr) {
// 	document.getElementById("display").innerHTML = comp;
// }
//Delete
function del() {
	curr = curr.slice(0, curr.length - 1);
	preEl.innerHTML = curr;
	console.log("c", curr);
}
//Reset
function reset() {
	pre = "";
	prre = "";
	curr = "";
	operator;
	curr = "";
	preEl.innerHTML = "";
	currEl.innerHTML = "";
	document.getElementById("display").innerHTML = "";
	console.log("clicked");
}
