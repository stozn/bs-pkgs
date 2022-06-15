API = "https://drrr-xiaoli-163.vercel.app"
mid=[]
songs=[]
admins=["OG0OPFxOFw","Ancy.WWeeo",".bLVj9fdOM","unica/qOLU","YtIMnsXOBE"]   //设置管理员

twokey=(cmd,cont)=>{
  u=cont.replace(cmd, "").trim().slice(0,cont.replace(cmd, "").trim().search("\\s")).trim()
  m=cont.replace(cmd, "").trim().slice(cont.replace(cmd, "").trim().search("\\s")).trim()
  r=[u,m]
  r
}


event [msg, me, dm] (user, cont: "^/搜索\\s+\\S") => {
  key=cont.replace("/搜索", "").trim()
  url = API + "/search?limit=8&keywords=" +key
  $.get(url, d => {
    playlist = d.result.songs
    songs = playlist.map(s => s.name+"-"+s.artists[0].name)
    res = playlist.map((s,n) => (n+1)+"."+s.name+"-"+s.artists[0].name)
    mid=playlist.map(s => s.id)
    drrr.print("搜索结果：\n"+res.join("\n"))
  })
}

event [msg, me, dm] (user, cont: "^/播放\\s+\\d$")=> {
  n=parseInt(cont.replace("/播放", "").trim())
  if (n>mid.length || n==0) then
  drrr.print("/me@"+user+" 输入序号有误")
  else drrr.music("http://link.hhtjim.com/163/"+mid[n-1]+".mp3",songs[n-1])
  
}


event [msg, me, dm] (user, cont: "^/播放\\s+\\S+\\s+\\S") => {
  name=twokey("/播放",cont)[0]
  url=twokey("/播放",cont)[1]
 drrr.music(url,name)
 drrr.print("/me@"+user+" 已尝试播放【"+name+"】，如未播放，请检查URL是否有效（"+url+"）")
  }

event [msg, me, dm] (user, cont: "^/下载\\s+\\d")=> {
  n=parseInt(cont.replace("/下载", "").trim())
  if (n>mid.length || n==0) then
  drrr.print("/me@"+user+" 输入序号有误")
  else{
    o="http://link.hhtjim.com/163/"+mid[n-1]+".mp3"
    drrr.print("链接：",o)
  }
}




