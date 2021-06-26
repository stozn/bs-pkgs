//抽奖功能
event [me,msg] (user: "", content:"/抽奖", url, tripcode, req)=> {
array = ["🍉","🍑","🍎","🍇","🍋","🥥","🍊","🍓","🍒","🍈","🎃","🥝"]
mb = ["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
nb = ["🦁","🐶","🐱","🐯","🦁","🦁","🐼","🐇","🐧","🐿","🐈","🐒"]
a = array[Math.floor(Math.random() * 12)]
b = array[Math.floor(Math.random() * 12)]
c = array[Math.floor(Math.random() * 12)]
d = array[Math.floor(Math.random() * 12)]
e = array[Math.floor(Math.random() * 12)]
m = mb[Math.floor(Math.random() * 11)] 
n = nb[Math.floor(Math.random() * 12)]  
//全中
  if a == b && b == c && c == d && d 	== e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】🎉🎉🎉🎊🎊🎰恭喜中大奖：奖励【u酱特调妹汁一杯】")
  else
//中4个
  if a==b && a==c && a==d || a==b && a==c && a==e || a==c && a==d && a==e || b==c && b==d && b==e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】有四个一样的水果！🎉🎉🎉奖励：【"+n+"玩偶】一只！并获得"+m+"一份！")
else  
//中3个
  if a==b && a==c ||a==b && a==d ||a==b && a==e ||a==c && a==d ||a==c && a==e ||a==d && a==e ||b==c && b==d ||b==c && b==e ||b==d && b==e || c==d && c==e
then
  drrr.print("@" + user +"抽到的是【"+a+b+c+d+e+"】有三个一样的水果！🎉🎉奖励："+m+"一份！")
else

//中2个  
  if a==b || a==c || a==d || a==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+a+"】🎉奖励："+a+"汁一杯哒！")
else
  if b==c || b==d || b==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+b+"】🎉奖励："+b+"汁一杯哒！")
else
  if c==d || c==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+c+"】🎉奖励："+c+"汁一杯哒！")
else
  if d==e
  then
  drrr.print("/me @" + user +"抽到的是【"+a+b+c+d+e+"】有两个【"+d+"】🎉奖励："+d+"汁一杯哒！")
//不中
  else
  drrr.print("/me @" + user +" |抽到的 【"+a+b+c+d+e+"】完全没有相同的！")
}