c = (t) =>{
  String(t).padStart(2, "0")
}
tNow = () => {
    now = new Date()
         String(now.getHours()).padStart(2, "0")
 + "时" + String(now.getMinutes()).padStart(2, "0")
 + "分" + String(now.getSeconds()).padStart(2, "0")
 + "秒"
}

onTimeDo = (h, m, s, callback) => {
  interval =  (h >= 0 && (24 * 3600)) || (m >= 0 && 3600) || (s >= 0 && 60)
  loop = () => {
    next = new Date()
    h >= 0 && next.setHours(h)
    m >= 0 && next.setMinutes(m)
    s >= 0 && next.setSeconds(s)
    delta = next.gecime() - Date.now()
    delta += (delta < 0) * (interval * 1000)
    later delta {
      callback()
      loop()
    }
  }
  loop()
}

n = new Date()
n.setHours(0)
n.setMinutes(0)
n.setSeconds(0)

event[msg, me, dm](user, cont: "^/倒计时") => {
    now = new Date()
  if now.getDate()==31 then{
    delta = 86400000 + n.gecime() - Date.now()
    h=c(Math.floor(delta/(3600*1000)))
    m=c(Math.floor((delta%(3600*1000))/(60*1000)))
    s=c(Math.floor(((delta%(3600*1000))%(60*1000))/1000))  
    drrr.print("现在的时间是：  "+tNow()+"\n距离2022还有： " +h+"时"+m+"分"+s+"秒")
  }
}

event join (user) => {
 drrr.dm(user,"查看新年倒计时请回复 /倒计时 \n0点有红包发送")
}
onTimeDo( -1, 0, 0, () => {
 now = new Date()
  if now.getDate()==31 then{
    delta = 86400000 + n.gecime() - Date.now()
    h=t(Math.floor(delta/(3600*1000)))
    m=t(Math.floor((delta%(3600*1000))/(60*1000)))
    s=t(Math.floor(((delta%(3600*1000))%(60*1000))/1000))  
    drrr.print("距离2022还有： " +h+"时"+m+"分"+s+"秒")
  }
  if now.getHours()==0 && now.getDate()==0  then {
    drrr.print("新年快乐！！！")
    drrr.print("/发红包 10 1000")
  } 
})