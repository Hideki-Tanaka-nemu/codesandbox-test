/**
 * CONST LET　関数
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1="var関数は上書き可能";
// console.log(val1);
// //var関数は再宣言可能
// var val1="var関数は再宣言可能";
// console.log(val1);

// let val2="let関数";
// console.log(val2);

// //letは上書きが可能
// val2 ="let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 ="let関数を再宣言";
// console.log(val2);

// const val3 ="const変数";
// console.log(val3);
// //const変数は上書き不可能
// //val3 ="const変数は上書き不可能";
// const val3 ="const変数は再宣言";

//constで定義したオブジェクトはプロパティ変更可能

// const val4 ={
//   name: "じゃけぇ",
//   age: 28,
// };
// console.log(val4);
// val4.name ="ゆき";
// val4.addres ="tanaka";
// console.log(val4);

//constで定義した配列はプロパティ変更可能

// const val5=['dog','cat'];
// val5[0]='bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// //わたしの名前は「じゃけぇ」です。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2=`私の名前は${name}です。年齢は${age}才です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
