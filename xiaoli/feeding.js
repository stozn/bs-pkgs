// 投喂恶龙
event [me,msg] (user: "", content:"/喂食")  => {
ns =["毛豆1kg","毛豆5kg","毛豆10kg","毛豆汁500mL","毛豆汁1000mL","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n +"~】看他吃的多开心w")
}
// 投喂恶龙套餐
event [me,msg] (user: "", content:"/套餐")  => {
ns =["毛豆","毛豆汁","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
n = ns[Math.floor(Math.random() * ns.length)]
m = ns[Math.floor(Math.random() * ns.length)]
b = ns[Math.floor(Math.random() * ns.length)]
  as =["但是这些东西完全不够恶龙塞牙缝","恶龙开心的吃了起来","双眼开始放光","恶龙视乎对这些食物不感兴趣","恶龙好像吃的有些饱了"]
    a = as[Math.floor(Math.random() * as.length)];  
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n + m + b +"~】"+a)
}
//投喂小粒
var fd=10;  //初始饱食度10

timer 30*60*1000{  
  mydate=new Date(); 
  const h=mydate.getHours();   
  if (h>6 && h<23) then {       //6-23点减饱食度
   if (fd>0) then {fd--}
   else {drrr.print("/me 小粒的肚子饿的咕咕叫了")}
  } 
}

event [me,msg] (user: "", cont:"/投喂")  => {
  //食物种类 ps:食物直接在里面加就好，其他东西不用改
  sw=[
  s1=["🍦","🍧","🍨","🍩","🍪","🍰","🧁","🍫","🍬","🍭","🍮"],  //+1的食物
  s2=["🧆","🥙","🌯","🥪","🌭","🍕","🥞","🌮","🍔","🍞"],  //+2的食物
  s3=["🍱","🍜","🍙","🍛","🍣","🍝"]   //+3的食物
  ]
  
  b=Math.floor(Math.random() *sw.length)+1
  s=sw[b-1][Math.floor(Math.random() * sw[b-1].length)]
  
if (fd<10) then {  
   if (b==1) then {fd=fd+1}  //对应+1食物
   else if (b==2 && (fd+2)<=10) then {fd=fd+2} //对应+2食物
   else if (b==3 && (fd+3)<=10) then {fd=fd+3} //对应+3食物
   else {fd=10}   //超出直接赋值为10
    
   m="/me @"+ user + "投喂了【"+s+"】，现在的饱食度为【"+fd+"】 "
   
   if (fd<=5) then {drrr.print(m+"小粒感觉还是很饿")}
   else if (fd>5 && fd<=9) then {drrr.print(m+"小粒感觉饱饱的了")}
   else {drrr.print(m+"现在小粒感觉再也吃不下任何东西了")}}
else{drrr.print("/me 现在的饱食度为【"+fd+"】 小粒已经什么都吃不下了")}  

}