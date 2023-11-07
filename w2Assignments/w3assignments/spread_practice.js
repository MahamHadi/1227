const array=[1,4,2,6,3,8];
const sorted_asc=array.sort((a,b)=>a-b);
console.log("sorted list of numbers in Ascending order");
console.log(sorted_asc);

const array2=[3,1,2,6,5,2,3,1];
const sorted_des=array2.sort((a,b)=>b-a);
console.log("sorted list of numbers in descending order");
console.log(sorted_des);

const obj={
    pw:123,
    code:888,
    name:"maham",
    city:"sukkur"
}
const obj2=
{
    pw:345;
    address:"sukkur"
}
const {pw,code,...rest}=obj;
console.log(rest);

//making new array and coping two other arrays in it using spread operator to see observation
//the second array value overrides first one's

const obj3={...obj,...obj2};
console.log(obj3);