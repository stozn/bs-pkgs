//乖嘛
event [me,msg] (user: "", content:"小粒今天乖嘛", url, tripcode, req)=> {
    if user==["黯泣"]
  then 
{drrr.print("我今天超乖的！")
drrr.print("/me 【<(ˉ^ˉ)>")  
}
else
{drrr.print("才不告诉你呢！")
drrr.print("/me 【<(ˉ^ˉ)>") }
}
//概率
event [me,msg] (user: "", content:"/概率", url, tripcode, req)=> {
drrr.print("5连概率≈0.005%】\n 4连概率≈0.1%】\n 3连概率≈9%】\n2连概率≈53%】\n allmiss概率≈38%")
}
 //中奖历史
  event [me,msg] (user: "", content:"/中奖历史", url, tripcode, req)  => {
  drrr.print("根据不完全统计\n 目前4连中奖人数为3人\n五连中奖人数暂未有记录")
 }
