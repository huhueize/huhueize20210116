//1、循环
// for(var i=0; i<10; i++) {
//     console.log(i);
// }
// console.log(i);

// let [a,b="hhz"] = ["胡惠泽", undefined];
// console.log(a+b);

// let [a,b="hhz"] = ["胡惠泽",null];
// console.log(a+b);

// let [a,b,c,d]=[1,2,3];
// console.log(a);
// console.log(d);

// let {foo,bar} = {bar:'胡惠泽',foo:'hhz'};
// console.log(foo+bar);

// const [a,b,c,d,e]='qwert';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [a,b="hhz"] = ['胡惠泽',undefined];
// console.log(a+b);

// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// let arr1=['www','taiji','com'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('hhz');
// console.log(arr1);
// console.log(arr2);

// rest...
// function taiji(first,...arg){
//     console.log(arg.length);
//     console.log(arg);
// }
// taiji(0,1,2,3,4,5,6,7);

// function taiji(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// let hhz="胡惠泽"
// let blog="hello,$(hhz)你好";
// document.write(blog);

// let hhz="胡惠泽";
// let log="hello,你好";
// document.write(log.indexOf(hhz));
// document.write(log.includes(hhz));

// let a=1;
// let b=2;
// let result='${a+b}';
// document.write(result);

// let a=11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('hhz'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));


// ES5
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('hhz'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2'));

// ES6
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('hhz'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2'));

// let a=122.1;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// let hhz=Math.pow(2,53)-1;
// console.log(hhz);

// let json ={
//     '0':'hhz',
//     '1':'huhueize',
//     '2':'fw',
//     length:3
// }
// let arr=Array.from(json);
// console.log(arr);

// let arr=Array.of(3,4,5,6);
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     return index > 4;
// });
// console.log(v);

// let arr=[1,2,3,4,5,6,7,8];
// var i= arr.findIndex((value) => value > 4);
// console.log(i);

// let arr=['hhz','huhueize','fw','hello'];
// arr.findIndex('web',1,3);
// console.log(arr);

// var myarr = [1,3,4,5,6,3,7,4];
// console.log(myarr.filter((value,index,arr)=>arr.indexOf(value)===index));

// let arr=['hhz','huhueize','fw'];
// for(let index of arr.keys()){
//     console.log(index);
// }

//数组去重
// var myArr = [1, 3, 4, 5, 6, 3, 7, 4];
// console.log(myArr.filter((value, index, arr) =>
//     arr.indexOf(value) === index)
// );

//for...of数组索引 
// let arr = ['hhz','huhueize','taiji'];
// for(let index of arr.keys()){
//     console.log(index);
// }

//同时输出索引和值
// let arr = ['hhz','huhueize','taiji'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries切分数组
// let arr = ['hhz', 'huhueize', 'taiji'];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

//ES6箭头函数
//ES5写法
//'use strict' //严谨模式
// function add(a,b=1) {
//     //'use strict'//变量有默认值的时候严谨模式不放在函数体内
//     if(a === 0) {
//         throw new Error('这是一个错误');
//     }
//     return a+b;
// }
// console.log(add(1));
// console.log(add.length);

//ES6箭头函数
// var add = (a, b = 2) => a + b;
// console.log(add(1));

// var add = (a, b = 1) => {
//     console.log('taiji');
//     return a + b;
// }
// console.log(add(3));

//对象的函数解构
// let json = {
//     a:'hhz',
//     b:undefined
// }
// function fun({a,b='web'}) {
//     console.log(a,b);
// }
// fun(json);

//数组的函数解构
// let arr = ['hhz', 'huhueize', 'taiji'];
// function fun(a, b, c, d) {
//     console.log(a, b, c, d);
// }
// fun(...arr);

//in的用法:判断是否存在与obj中
// let obj ={
//     a:'hhz',
//     b:'huhueize'
// }
// console.log('c' in obj);//c指的是key值

// let arr=['lj','梁娟','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// } 

// let arr=['hhz','huhueize','fw'];
// let list=arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// function add(a,b){
//     'use strict'
//     if(a === 0){
//         throw new Error('this is a error,monther funk');
//     }
//     return a+b;
// }
// console.log(add(2,3));
// console.log(add.length);

// var add=(a,b=2) => a+b;

// var add=(a,b=1)=>{
//     console.log('huhueize')
//     return a+b;
// }
// console.log(add(1));

// let json = {
//     a:'hhz',
//     b: undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);

// let arr = ['hhz','huhueize','fw'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

// let obj ={
//     a:'hhz',
//     b:'huhueize'
// }
// console.log('c' in obj);

// let arr = [,,,];
// console.log(arr.length);
// console.log(0 in arr);
// let arr1=['hhz','huhueize'];
// console.log(0 in arr1);

// let arr = ['hhz','huhueize','fw'];
// arr.forEach((val,index)=>console.log(index,val));

// let arr = ['hhz','huhueize','fw'];
// arr.filter(x => console.log(x));

// let arr = ['hhz','huhueize','fw'];
// arr.some(x => console.log(x));

// let arr = ['hhz','huhueize','fw'];
// console.log(arr.map(x =>'web'));

// let arr = ['hhz','huhueize','fw'];
// console.log(arr.toString());
// console.log(arr.join('||'));

// let name='hhz';
// let skill='web';
// var obj={name,skill};
// console.log(obj);

// let key = "skill"
// var obj = {
//     [key]:'web'
// }
// console.log(obj.skill);

// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

// let obj1={name:'hhz'};
// let obj2={name:'hhz'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1,obj2));

// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

// let a={a:'hhz'};
// let b={b:'huhueize'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let f = Symbol();
// console.log(typeof(f));

// let hhz=Symbol('huhueize');
// console.log(hhz);
// console.log(hhz.toString());

// let hhz = Symbol();
// let obj = {
//     [hhz]:'huhueize'
// }
// console.log(obj[hhz]);



// let obj = {name:'hhz',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }

// let setarr = new Set(['hhz','huhueize','web','hhz']);
// setarr.add('hhhhhz');
// setarr.delete('hhhhhz');
// setarr.clear();
// console.log(setarr.has('hhz'));
// console.log(setarr);
// console.log(setarr.size);

// for(let item of setarr){
//     console.log(item);
// }

// setarr.forEach((value) =>console.log(value));

// let weakobj =new WeakSet();
// let obj = {a:'hhz',b:'huhueize'};
// let obj1=obj;
// weakobj.add(obj);
// weakobj.add(obj1);
// console.log(weakobj);

// const  s = new Set();
// [2,3,5,4,5,2,2].forEach(x => s.add(x));

// for(let i of s) {
//     console.log(i);
// }

// let json={
//     name:'hhz',
//     skill:'web'
// };
// console.log(json.name);

// var map =new Map();
// map.set(json,'I am');
// console.log(map);
// console.log(map.get(json));

// let obj = {
//     add:function(val){
//         return val+100
//     },
//     name:'i am hhz'
// }
// console.log(obj.add(100));
// console.log(obj.name);

// const emloyee = {
//     firstname: 'hu',
//     lastname: 'hueize'
// };
// console.group('emloyee');
// console.log(emloyee.firstname);
// console.log(emloyee.lastname);
// console.log(emloyee.org);
// console.log(emloyee.fullname);


// let handler = {
//     get: function(target, fieldname){
//         if(fieldname === 'fullname' ){
//             return `${target.firstname} ${target.lastname}`;
//         }

//         if(fieldname in target){
//             return target[fieldname];
//         }else{
//             return `no such property as, '${fieldname}'!`;
//         }

//         // return fieldname in target ?
//         // target[fieldname] :
//         // `no such property as, '${fieldname}'!`
//     }

// }
// let p =new Proxy(emloyee,handler);
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.org);
// console.log(p.fullname);

// const emloyee = {
//     firstname: 'hu',
//     lastname: 'hueize'
// };

// const validator = {
//     set: function(obj,prop,value) {
//         if(prop === 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError('年龄只能为整数');
//             }
//             if(value < 0){
//                 throw new TypeError('年龄只能为正数');
//             }
//         }
//     }
// };
// let pr = new Proxy(emloyee,validator);
// pr.age = 18;

// var pro = new Proxy({
//     add:function(val){
//         return val+100
//     },
//     name:'i am huhueize'
// },{
//     get: function(target,key,prop){
//         console.log('come in get');
//         return target[key];
//     },
//     set: function (target,key,value,recriver){
//         console.log(` setting ${key} = ${value}`);
//         return target[key] = value + '233';
//     }
// });
// console.log(pro.add(3));
// console.log(pro.name);
// pro.name ='huhueize';
// console.log(pro.name);

// let target = function(val){
//     console.log('i am hhz')
//     return val+=100;
// }


// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // // // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// // //
// function step3(resolve,reject){
//     // state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });

//class 类的声明、实例化、使用
// class Coder {
//     name(val) {
//         console.log(val);
//         return val;
//     }

//     skill(val) {
//         console.log(this.name('胡惠泽') + ':' + 'skill-' + val);
//     }

//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }

//     add(val) {
//         return this.a + this.b;
//     }
// }
// hhz = new Coder(11, 12);
// console.log(hhz.add());

// let hhz2 = new Coder;
// hhz2.name('hhz');
// hhz2.skill('web');

// let hhz = new Coder;
// hhz.name('胡惠泽');


