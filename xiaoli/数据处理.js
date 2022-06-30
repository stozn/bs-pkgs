add_mirror("小粒", "gitee.com/Ritsu69")
//批量处理
a =

    b = []
c = []

for (let x of a) {
    if ( ) {
        b.push(x)
    } else {
        c.push(x)
    }
}

console.log(JSON.stringify(b));
console.log(JSON.stringify(c));
console.log(c.length);

//LocalStorage
localStorage["users"] = JSON.stringify(users) //写入
users = JSON.parse(localStorage["users"])       //读取

//导出txt
txt = (_data, _name) => {
    blob = new Blob([JSON.stringify(_data)])
    aLink = document.createElement('a')
    aLink.href = URL.createObjectURL(blob)
    aLink.setAttribute('download', _name)
    document.body.appendChild(aLink)
    aLink.click()
}
//----------

u=

users=[]
g=["MG-红包","MG-精灵球","MG-宠物干粮","MG-一本满足","MG-水","MG-刮刮乐","MG-奖券","鲜榨果汁","可乐"]

id=0
for(x of u)  {
  bag=[]
	
  for (y of x.bag ){
    if (!g.some(z=> z==y.name))  {
      bag.push({name:y.name,amount:1})
    }
  }
      if (( bag.length + x.pet.length) > 0){
		  id++
	    users.push({ uid: id, name: x.name, tc: x.tc, coin: 0, check: true, day: 0, dayz: 0, drink: 0, tree: 0, trc: true, bag: bag, pet: x.pet, letters: [], newl: false })
	  }

  
}
users.sort((a, b) => a.uid - b.uid)

console.log(JSON.stringify(users))

