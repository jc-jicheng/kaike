// 找出字符串中的所有数字放到数组里；
// let str = "fdasfdsa1231dsfas1231dfa23";
// 方式一
// function getNumber(str) {
//     let arr = [];
//     let temp = "";
//     for (let i = 0; i < str.length; i++) {
//         //判断是否是一个数字
//         if (!isNaN(str[i])) {
//             // 是数字
//             // arr.push(str[i]);
//             temp += str[i];
//         }else{
//             // 不是数字；
//             if(temp!=""){
//                 arr.push(temp);
//                 temp = "";
//             }
//         }
//     }
//     if(temp != ""){
//         arr.push(temp);
//     }
//     return arr;
// }
// //[1231,1231,23]
// console.log(getNumber(str));
//方式二
// let reg = /\d+/g;
// let arr = str.match(reg);
// console.log(arr);

//正则创建；
// 方式一:字面量创建
// let str = "this is books";
// let reg = /\bis\b/g;
// let res = str.match(reg);
// console.log(res);
// 方式二：构造函数
// let str = "this is books";
// let regstr = "is";
// let reg = new RegExp("\\b"+regstr+"\\b","g");
// let res = str.match(reg);
// console.log(res);

// 正则匹配方法
// 一正则方法；
// 1.test
// let str = "dfafd2123fdsa";
// let reg = /123/;
// console.log(reg.test(str))
// 2.exec
// let str = "dfafd2123fdsa";
// let reg = /\d+/;
// console.log(reg.exec(str));

// 二字符串方法；
// 1.match 是字符串的方法；
// let str = "dfafd2123fdsa";
// let reg = /\d+/;
// // console.log(reg.exec(str));
// console.log(str.match(reg));
// 2.split
// let str = "df231afd2123fd32sa";
// // console.log( str.split(1) );
// let reg = /\d+/;
// console.log(str.split(reg));

// 3.search : 查找  匹配字符第一次出现的位置,没找到  返还-1； 忽略 g；
// let str = "dafds1222af3424dfs12af";
// let reg = /12/g;
// console.log( str.search(reg) );

// 4.replace :替换；
// let str = "dafds1222af3424dfs12af";
// let reg = /\d/g;
// // let res =  str.replace(reg,"*");
// 第一个参数：匹配到的字符串；（第二、三、四....个 如果有分组就是分组里的内容） 倒数第二个参数匹配字符串的index；倒数第一个原本的字符串；
// let res = str.replace(reg,function(arg1){
//     console.log(arg1);
//     let rStr = "";
//     for(let i =0;i<arg1.length;i++){
//         rStr += "*"
//     }
//     return rStr;
// })
// console.log(res);

// 元字符：正则中有特殊含义的非字母字符；
// . *(0-多次) +（1-多次） $ ^ | \ () [] {};
//  \可以让有特殊含义的字符变成字面量含义字符；
//. 代表除了\n \r \u2028 或 \u2029 以外的所有字符；
// let str = `<div><span>some 323v21\n3213alue</span></div>`;
// let reg = /^<div>.*<\/div>$/;
// let res = reg.test(str);
// console.log(res)

// 字符集合 []   某一类字符

// let str = "fdbsfdabfdsfaabfdsab1212";
// let reg = /[ab]/g;
// let res =  str.replace(reg,"*");
// console.log(res);

// let str = "this knife is 5cM";
// let reg = /[kdc][mM]/
// let res = str.replace(reg,"光年");
// console.log(res);

// let str = "afdas23123faf1231A";
// // // let reg = /\d+/g;
// let reg = /[^0-9]+/g
// // let reg = /[0-9a-zA-Z]+/g
// let res = str.replace(reg,"*");
// console.log(res);

// .  ===>  [^\r\n]   \d  ==>[0-9]
// \w ===>[0-9a-zA-Z_];

// [1-20];
// let str = "134243240";
// let reg = /[1-20]+/g;
// let res = str.replace(reg,"*");
// console.log(res);

//边界
//^  $    \b 单词边界(如果遇到非 \w的字符认为有边界)  \B 非单词边界；
// let str = "is This is bookis";
// let reg = /\bis\b/g;

// let res = str.replace(reg,"*");
// console.log(res);

// let str = "stringfds\$string\$string111";
// let reg = /\bstring\b/g;
// let res = str.replace(reg,"*");
// console.log(res);

// 分组；()
// let str = "ababfsafdsafababfdsaabab";
// let reg = /(ab){2}/g;  //abb 
// let res = str.replace(reg,"*");
// console.log(res);

// liLei   lilei -->李磊
// let str = "I am lilei";
// let reg = /li(L|l)ei/g;
// let res = str.replace(reg,"李磊");
// console.log(res);
// 命名分组  es2018新增；
// let str = "fsadfd213fdsaf3141";
// let reg = /(\d+)|(?<mystr>[a-z]+)/;
// let res = str.match(reg);
// console.log(res.groups.mystr);

//  let str = "fsadfd213fdsaf3141";
// let reg = /(ad)|(\d+)|(41)/g;
// // let res = str.match(reg);
// reg.test(str)
// console.log(RegExp.$1);
// console.log(res);
 
// 零宽断言；正向(断言在后)  --》肯定正向断言  ；否定正向断言；
// 把所有的iphone换成“苹果“
// let str = "iphone3iphone4iphone5iphonenumber";
// // let reg = /iphone(?=\d)/g;  //肯定
// let reg = /iphone(?!\d)/g;  //否定
// let res = str.replace(reg,"苹果");
// console.log(res);

// 负向断言(断言在前)  es2018支持；
// 把px换成 “像素“
// let str = "10px20px30pxipx";
// // let reg = /(?<=\d+)px/g;  //肯定
// let reg = /(?<!\d+)px/g;
// let res = str.replace(reg,"像素");
// console.log(res);

// 反向引用
//2019-7-15  -->  15/7/2019;

// let str = "2020-12-16";
// let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g;
// let res = str.replace(reg,'$3/$2/$1');
// console.log(res);
// {1,} //最少1次   {0,2} 最多2次  + ==》{1,}  *  ==>{0,}  ? {0,1}


//   匹配模式
// let str = "fafdsaba1231fdafABd12313fdsa";
// let reg = /ab/gi;
// let res = str.replace(reg,"*");
// console.log(res);

// m ;
// let str = `fdsafdsa
//     fdafdsa
// `
// let reg = /^/gm;
// let res = str.replace(reg,"*");
// console.log(res);

// es2018;s/u/y
// s 让.匹配换行符号

// let str = `<div><span>some 323v21
// 3213alue</span></div>`;
// let reg = /^<div>.*<\/div>$/s;
// let res = reg.test(str);
// console.log(res)
// u:
// console.log(/^.$/.test("\uD842\uDFB7"));
// console.log(/^.$/u.test("\uD842\uDFB7"));
// y:匹配索引要依次进行；如果不是就结束；
// let str = "12fdsaf123fdsafdsa123fdsf3454fds";
// let reg = /\d/gy;
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));