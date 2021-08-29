numBtn = document.getElementsByClassName("number");
optBtn = document.querySelectorAll(".operator");
delBtn = document.getElementById("del");
resetBtn = document.getElementById("reset");
eqBtn = document.getElementById("equal");
preBtn = document.getElementById("pre");
preBtn2 = document.getElementById("pre2");
class Calculator {
	constructor() {
		this.preNum = "";
		this.curNum = "";
		this.oprt = undefined;
		this.result = "";
	}

	reset() {
		this.preNum = "";
		this.curNum = "";
		this.oprt = undefined;
		this.result = "";
		document.getElementById("display").innerText = 0;
		preBtn.innerText = "";
	}
	preDisp() {
		if (this.preNum && this.oprt) {
			preBtn.innerText = this.preNum + this.oprt + this.curNum;
		} else if (this.oprt) {
			preBtn.innerText = this.curNum + this.oprt;
		} else {
			preBtn.innerText = this.curNum;
		}
	}
	resultDisp() {
		document.getElementById("display").innerText = this.calculate();
	}
	del() {
		if (this.curNum) {
			this.curNum = this.curNum.slice(0, this.curNum.length - 1);
			this.preDisp();
		} else if (this.preNum && this.oprt && !this.curNum) {
			this.oprt = undefined;
			preBtn.innerText = this.preNum;
		} else if (this.preNum && !this.oprt && !this.curNum) {
			this.preNum = this.preNum.slice(0, this.preNum.length - 1);
			this.preDisp();
		}

		console.log("deleted", this.curNum);
	}
	calculate() {
		switch (this.oprt) {
			case "/":
				this.result = parseFloat(this.preNum) / parseFloat(this.curNum);
				break;
			case "*":
				this.result = parseFloat(this.preNum) * parseFloat(this.curNum);
				break;
			case "+":
				this.result = parseFloat(this.preNum) + parseFloat(this.curNum);
				break;
			case "-":
				this.result = parseFloat(this.preNum) - parseFloat(this.curNum);
				break;
		}

		return this.result;~
	}
}

calculator = new Calculator();

Array.from(numBtn).forEach(e => {
	e.addEventListener("click", function () {
		// if (calculator.oprt === undefined && calculator.result) {
		// 	calculator.preNum = "";
		// 	calculator.result = "";
		// 	calculator.resultDisp();
		// 	console.log("number");
		// }
		if (e.innerText === "." && calculator.curNum.includes(".")) return;
		calculator.curNum += e.innerText;
		calculator.preDisp();
	});
});

Array.from(optBtn).forEach(e => {
	e.addEventListener("click", function () {
		// if (
		// 	calculator.oprt === undefined &&
		// 	!calculator.preNum &&
		// 	!calculator.curNum
		// ) {
		// 	this.preNum = this.result;
		// }
		if (calculator.oprt === undefined && !calculator.preNum) {
			calculator.preNum = calculator.curNum;
			calculator.curNum = "";
		} else {
			if ((calculator.preNum, calculator.curNum)) {
				calculator.resultDisp();
				calculator.preNum = calculator.calculate();
			}
			calculator.curNum = "";
		}
		calculator.oprt = e.innerText;
		calculator.preDisp();
	});
});

eqBtn.addEventListener("click", function () {
	calculator.resultDisp();
	calculator.result = calculator.calculate();
	calculator.preNum = calculator.calculate();
	calculator.oprt = undefined;
	calculator.curNum = "";

	console.log(calculator.result, calculator.oprt);
});
resetBtn.addEventListener("click", function () {
	calculator.reset();
});
delBtn.addEventListener("click", function () {
	calculator.del();
});

function themeOne() {
	document.querySelector(".container").style.backgroundColor =
		"hsl(222, 26%, 31%)";
}
function themeTwo() {
	document.querySelector(".container").style.backgroundColor = "green";
}
function themeThree() {
	document.querySelector(".container").style.backgroundColor = "red";
}
