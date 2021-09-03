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
		document.getElementById("display").innerText = "";
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
		if (isNaN(this.calculate())) return;
		document.getElementById("display").innerText = this.fractionRound(
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
	fractionRound(num, par = 2) {
		let numStr = num.toString();
		if (!numStr.includes(".")) return num;
		let indOfFraction = numStr.indexOf(".");
		let intDigt = numStr.slice(0, indOfFraction);
		let fracDigt = numStr.slice(indOfFraction + 1);
		let dig = Number(fracDigt.slice(par, par + 1));

		if (fracDigt.length > 2 && dig >= 5) {
			let sec = Number(fracDigt.slice(par - 1, par)) + 1;
			let first = fracDigt.slice(0, par - 1);
			return intDigt.concat(".", first, sec);
		}

		return intDigt.concat(".", fracDigt.slice(0, par));
	}
}

calculator = new Calculator();

Array.from(numBtn).forEach(e => {
	e.addEventListener("click", function () {
		if (e.innerText === "." && calculator.curNum.includes(".")) return;
		if (calculator.oprt === undefined) {
			calculator.preNum = "";
			calculator.result = "";
			calculator.resultDisp();
		}
		document.getElementById("display").style.opacity = ".2";
		calculator.curNum += e.innerText;
		calculator.preDisp();
		calculator.resultDisp();
	});
});

Array.from(optBtn).forEach(e => {
	e.addEventListener("click", function () {
		if (calculator.oprt === undefined && !calculator.preNum) {
			calculator.preNum = calculator.fractionRound(calculator.curNum);
			calculator.curNum = "";
		} else {
			if ((calculator.preNum, calculator.curNum)) {
				calculator.resultDisp();
				calculator.preNum = calculator.fractionRound(calculator.calculate());
			}
			calculator.curNum = "";
		}
		calculator.oprt = e.innerText;
		calculator.preDisp();
	});
});

eqBtn.addEventListener("click", function () {
	document.getElementById("display").style.opacity = "1";
	calculator.resultDisp();
	calculator.result = calculator.fractionRound(calculator.calculate());
	calculator.preNum = calculator.fractionRound(calculator.calculate());
	calculator.oprt = undefined;
	calculator.curNum = "";
});
resetBtn.addEventListener("click", function () {
	calculator.reset();
});
delBtn.addEventListener("click", function () {
	calculator.del();
});

//THEME change
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
