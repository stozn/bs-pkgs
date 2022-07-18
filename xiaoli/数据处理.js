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
//-------------------------------------------------------------------------------------
u=
	
users=[]
g=["MG-红包","MG-精灵球","MG-宠物干粮","MG-一本满足","MG-水","MG-刮刮乐","MG-奖券","鲜榨果汁","可乐"]

id=0
for(x of u)  {

if (( x.coin+x.bag.length + x.letters.length+x.drink+x.day) > 0){
		  id++
    users.push({ uid: x.uid, name: x.name, tc: x.tc, live: x.live, coin: x.coin, check: x.true, day: x.day, dayz: x.dayz, drink: x.drink, tree: x.tree, trc: x.trc, bag: x.bag, pet: [], checkb: true, win: 0, letters: x.letters, newl: x.newl })
	  }
}
users.sort((a, b) => a.uid - b.uid)
console.log(JSON.stringify(users))


//宠物系统

//生成宠物


 pets  = []

function rand(a, b) {
  return  Math.floor(Math.random() * Math.floor(1 + b - a)) + a
}

for(t=0;t<100;t++){
x={  life: 100, att: 50, def: 20, speed: 10 }
	pets.push(x)
for (o = rand(15,15); o > 0; o--) {
            a = rand(1, 7)
            if  (a< 3){
                x.life += rand(24, 36)
            }else if  (a< 5) {
                x.att += rand(16, 24) 
            }else if  (a< 7) {
                x.def += rand(8, 12) 
            }else {
                x.speed += rand(8, 12)
            }
        }
}


//模拟战斗



function rand(a, b) {
  return  Math.floor(Math.random() * Math.floor(1 + b - a)) + a
}

//公式在这改
f1=(l,a,d,v)=> l+6*a+3*d+2*v
f2=(l,a,d,v)=> 0.2*l+1.5*a+d+0.2*v
f3=(l,a,d,v)=> 0.15*l+1.5*a+d+0.2*v
f4=(l,a,d,v)=> 0.2*l+1.6*a+d+0.2*v

g1=0
g2=0
g3=0
g4=0

jg=(w)=>{
	if (w){
	if (f1(xlife,xa,xd,xv)>f1(ylife,ya,yd,yv)){g1++} 
	if (f2(xlife,xa,xd,xv)>f2(ylife,ya,yd,yv)){g2++} 
	if (f3(xlife,xa,xd,xv)>f3(ylife,ya,yd,yv)){g3++} 
	if (f4(xlife,xa,xd,xv)>f4(ylife,ya,yd,yv)){g4++}
	}else{
	if (f1(xlife,xa,xd,xv)<f1(ylife,ya,yd,yv)){g1++} 
	if (f2(xlife,xa,xd,xv)<f2(ylife,ya,yd,yv)){g2++} 
	if (f3(xlife,xa,xd,xv)<f3(ylife,ya,yd,yv)){g3++} 
	if (f4(xlife,xa,xd,xv)<f4(ylife,ya,yd,yv)){g4++}
	}
	
}

bat=(x,y)=>{
		xl = x.life                                   
	    xlife=x.life 
        yl = y.life                                 
	    ylife=y.life 
        xa = x.att                                   
        ya = y.att                                   
        xd = x.def                                   
        yd = y.def
	    xv=x.speed
	    yv=y.speed
        f = (x.speed - y.speed) > 0     
        i = 1
        while (xl > 0 && yl > 0) {
            xs = xa - yd + rand(-10, 10)
            if (Math.random() < 0.10 ) xs= xa * 2 - yd + rand(-10, 10)
            ys = ya - xd + rand(-10, 10)
            if  (Math.random() < 0.10) ys= ya * 2 - xd + rand(-10, 10)

            if (f){
                if ((yl -= xs)<=0) {
                    jg(true)
                }else{
                    xl -= ys
                    if (xl<= 0){
                        jg(false)
                    }
                }
            }else {
                if ((xl -= ys)<=0) {
                    jg(false)
                }else {
                    yl -= xs
                    if (yl<= 0 ){
                        jg(true)
                    }
                }
            }
            i++
        }
	}

for (t=0;t<100;t++){     //100是运行次数，也就是公式满分
c=rand(0,99)
	u=rand(0,99)
	bat(pets[c],pets[u])
}
	


console.log("1.  "+g1);
console.log("2.  "+g2);
console.log("3.  "+g3);
console.log("4.  "+g4);