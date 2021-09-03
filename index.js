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
		let pNum = this.twoDigFrac(this.preNum);
		let cNum = this.twoDigFrac(this.curNum);
		if (this.preNum && this.oprt) {
			preBtn.innerText = pNum + this.oprt + cNum;
		} else if (this.oprt) {
			preBtn.innerText = cNum + this.oprt;
		} else {
			preBtn.innerText = cNum;
		}
	}
	resultDisp() {
		document.getElementById("display").innerText = this.twoDigFrac(
			this.calculate()
		);
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

		return this.result;
	}
	twoDigFrac(num) {
		let length = num.toString().length;
		let numb = num.toString().slice(0, 3);
		let dig = Number(num.toString().slice(4, 5));
		let secDig = Number(num.toString().slice(3, 4));

		if (length > 4 && dig >= 5) return numb.concat(secDig + 1);
		return num.toString().slice(0, 4);
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
		console.log(666);
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
