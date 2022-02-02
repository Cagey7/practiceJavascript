function multiply(){
    let res = document.getElementById('divReseult');
    let val_a = Number(document.getElementById('avalue').value);
    let val_b = Number(document.getElementById('bvalue').value);
    let result = val_a * val_b;
    res.innerHTML += result;
}

function divide(){
    let res = document.getElementById('divReseult');
    let val_a = Number(document.getElementById('avalue').value);
    let val_b = Number(document.getElementById('bvalue').value);
    let result = val_a / val_b;
    res.innerHTML += result;
}

let div1 = document.getElementById('nameGroup');
let div2 = document.getElementById('year');
let div3 = document.getElementById('day');
let div4 = document.getElementById('date');
let div5 = document.getElementById('month');
let div6 = document.getElementById('time');
let div7 = document.getElementById('daysleft');

div1.innerHTML += 'Takizhanov Vyacheslav CS-2112';
div2.innerHTML += 'Year: 2022';
div3.innerHTML += 'Today is: Wednesday';
div4.innerHTML += '02.02.2022';
div5.innerHTML += 'Month: February';
div6.innerHTML += '14:44';
div7.innerHTML += '867 days left until the freedom!';
