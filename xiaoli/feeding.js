// 投喂恶龙
event [me,msg] (user: "", content:"/投喂", url, tripcode, req)  => {
  ns =["毛豆1kg","毛豆5kg","毛豆10kg","毛豆汁500mL","毛豆汁1000mL","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
    n = ns[Math.floor(Math.random() * ns.length)];
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n +"~】看他吃的多开心w")
}
// 投喂恶龙套餐
event [me,msg] (user: "", content:"/套餐", url, tripcode, req)  => {
  ns =["毛豆","毛豆汁","🍕","🍔","🍟","🌭","🥓","🍖","🍗","🥩","🍤","🌯"]
n = ns[Math.floor(Math.random() * 12)]
m = ns[Math.floor(Math.random() * 12)]
b = ns[Math.floor(Math.random() * 12)]
  as =["但是这些东西完全不够恶龙塞牙缝","恶龙开心的吃了起来","双眼开始放光","恶龙视乎对这些食物不感兴趣","恶龙好像吃的有些饱了"]
    a = as[Math.floor(Math.random() * as.length)];  
  drrr.print("/me @" + user + "投喂了 @恶龙 【" + n + m + b +"~】"+a)
}