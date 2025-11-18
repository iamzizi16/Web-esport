//string (varchar / char / text)
var myname ='Rifky Febrian Iskandar';
var myage =16;
var myHobbies ='Playing Game';
var isstudent = false;
var blank=null;
var undif;
var namelenght ='Rifky Febrian Iskandar';
console.log(myname);
console.log(myage);
console.log(myHobbies);
console.log(isstudent);
console.log(blank);
console.log(undif);
console.log('------------------------------------------------------------------------------------------------');
console.log(namelenght.length);
//concat
var nameconcat ='Rifky Febrian Iskandar';
var age = 15;
// cara 1
console.log('cara 1');
var concatplus = nameconcat+age;
console.log(concatplus);
//cara 2
console.log('cara 2');
var concar = nameconcat.concat(age);
console.log(concar);
//cara 3
console.log('cara 3');
console.log(`${nameconcat} ${age}`);
//char at
var namechar = 'zilong';
console.log(namechar.charAt(4));
//Jadikan huruf besar
var nameUppercase = 'Rifky Piston';
console.log(nameUppercase.toUpperCase());

//jadikan huruf kecil
var toLowerCase = nameUppercase.toLocaleLowerCase();
console.log(toLowerCase);

// Substring
var sub = nameUppercase.substring(0,6);
console.log(sub);
