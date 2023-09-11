
// document.write('หิวชานม');

//? js มีหรือไม่มี ; ก็ได้
//? js ไม่มีvarible type
//? let เพื่อให้ varible เป็น local
// "use strirt;"
// let a = 1 ;
// const b = 1.44 ;
// const c = 'hellow' ;
// const d = true ;

// document.write('a = '+a);
// ? use backtick
// document.write(`a = ${a}`);
// alert(`a = ${a}`)
// console.log(b);


//! 1. findbutton

// // const btnClick = document.getElementById(btnClick);

//! 2. addinteraction
// // ? ถ้าclickจะทำfunction เรียกว่าcallback
// // btnClick.addEventListener('click', function name(params) {
// //     alert('test');
// //     console.log('test');
// // });

// btnClick.onclick = function name(params) {
//     alert('test');
// }

// document.getElementById('btnClick').onclick = function name(params) {
//     alert('test');
// }

var counter = 0 ;

// ? ใช้แบบcss มีไอดีและclass
document.querySelector('#btnClick').onclick = function name(params) {
    counter++;
    // ? เพื่อหาครั้งเดียว แนะนำให้ใช้
    const txtCounter = document.querySelector('#txtCounter');
    // ? user global varible
    // document.querySelector('#txtCounter').innerText = `Counter = ${counter}`;
    // ? can change taghtml
    txtCounter.innerHTML = 
    `<h1>Counter = ${counter}</h1>`;
    txtCounter.style.color = 'red';
}
