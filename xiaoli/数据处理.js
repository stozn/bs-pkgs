//批量处理
a=

b=[]
c=[]

for (let x of a) {
	if ( ) {
		b.push(x)	
	}else{
		c.push(x)
	}
}

console.log(JSON.stringify(b));
console.log(JSON.stringify(c));
console.log(c.length);

//LocalStorage
localStorage["users"] = JSON.stringify(users) //写入
users=JSON.parse(localStorage["users"])       //读取