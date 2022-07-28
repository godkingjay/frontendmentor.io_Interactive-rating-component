let rate;

let b1;
let b2;
let b3;
let b4;
let b5;
let d1;
let d2;
let sb;
let dR;

function loadDoc(){
	b1 = document.getElementById("b1");
	b2 = document.getElementById("b2");
	b3 = document.getElementById("b3");
	b4 = document.getElementById("b4");
	b5 = document.getElementById("b5");
	d1 = document.getElementById("rate");
	d2 = document.getElementById("submitted");
	dR = document.getElementById("rateDisplay");
}

function rate1() {
	b1.classList.add("active");
	b2.classList.remove("active");
	b3.classList.remove("active");
	b4.classList.remove("active");
	b5.classList.remove("active");
	rate = 1;
}

function rate2() {
	b1.classList.remove("active");
	b2.classList.add("active");
	b3.classList.remove("active");
	b4.classList.remove("active");
	b5.classList.remove("active");
	rate = 2;
}

function rate3() {
	b1.classList.remove("active");
	b2.classList.remove("active");
	b3.classList.add("active");
	b4.classList.remove("active");
	b5.classList.remove("active");
	rate = 3;
}

function rate4() {
	b1.classList.remove("active");
	b2.classList.remove("active");
	b3.classList.remove("active");
	b4.classList.add("active");
	b5.classList.remove("active");
	rate = 4;
}

function rate5() {
	b1.classList.remove("active");
	b2.classList.remove("active");
	b3.classList.remove("active");
	b4.classList.remove("active");
	b5.classList.add("active");
	rate = 5;
}

function submitCheck() {
	if (rate > 0) {
		submit();
	}
}

function submit() {
	d1.classList.add("hide");
	d2.classList.remove("hide");
	displayRate();
}

function displayRate() {
	dR.innerHTML = rate;
}