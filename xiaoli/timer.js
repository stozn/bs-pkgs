//报时优化
 checkTime = (i) =>{if (i<10) then{i="0" + i} return i}
//准点报时与活动。每60秒触发1次
 timer 60 * 1000{
 
  //时间日期设置
  mydate=new Date(); //获取当前日期
  const Y=mydate.getFullYear();  //年
  const M=mydate.getMonth()+1;   //月
  const N=mydate.getDate();      //日
  const D= mydate.getDay();      //周
  const h=mydate.getHours();     //时
  const m=mydate.getMinutes();   //分

  //周参数
  weekday=["周日！","周一","周二","周三","周四","周五","周六"]
  w=weekday[D]

  //甜品
  dessert=["🎂","🍰","🍪","🍩","🍮","🍔","🥞","🥗","🍨","🍧","🍦"]
  de=dessert[Math.floor(Math.random() * 11)] 

  //报时设定
  td= ["/me 整点报时：现在是日间【"+checkTime(h)+":"+checkTime(m) +"】"]
  tn= ["/me 整点报时：现在是夜间【"+checkTime(h)+":"+checkTime(m) +"】"]

  
  

  

  
  

}