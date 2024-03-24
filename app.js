// 1. Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.

// 2. Birinchi va so’ngi burchali qavslarni olib tashlang.
// example
/*
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */

// 3.
// Example
/*
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */

// function isPrime(n) {
//   let n = son;
//   if (son) {
//   } else {
//   }
// }
// console.log(isPrime(5));
// ​
// 4. Berilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali.
// Example

function group(array, keySelector, valueSelector) {
  let arr = [
    { country: "Belarus", city: "Brest" },
    { country: "Russia", city: "Omsk" },
    { country: "Russia", city: "Samara" },
    { country: "Belarus", city: "Grodno" },
    { country: "Belarus", city: "Minsk" },
    { country: "Poland", city: "Lodz" },
  ];
}
console.log(arr);
// 5. n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.  bo'ldi
// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/
// function yigindi_son(son1, son2) {
//   let yigindi = 0;
//   for (i = son1; i <= son2; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// }
// let son1 = +prompt("son kiriting");
// let son2 = +prompt("son kiriting");
// let natija = yigindi_son(son1, son2);
// console.log(natija);

// 6. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]

// Output: [6, 7, 2]
// 7. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing.
// // 8. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
// // 9. Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
// Input:
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]
// Output:
// 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
// 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
// 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;
// ​
// // 10. Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
// // Input:
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
