API = "https://drrr-xiaoli-163.vercel.app"
mid=[]
songs=[]

event [msg, me, dm] (user, cont: "^/搜索\\s+\\S") => {
  key=cont.replace("/搜索", "").trim()
  url = API + "/search?limit=8&keywords=" +key
  $.get(url, d => {
    playlist = d.result.songs
    songs = playlist.map(s => s.name+"-"+s.artists[0].name)
    res = playlist.map((s,n) => (n+1)+"."+s.name+"-"+s.artists[0].name)
    mid=playlist.map(s => s.id)
  later 1000 drrr.print("搜索结果：\n"+res.join("\n"))
  })
}

event [msg, me, dm] (user, cont: "^/播放\\s+\\d") => {
  n=parseInt(cont.replace("/播放", "").trim())
  if (n>mid.length || n==0) then
  drrr.print("/me@"+user+" 输入序号有误")
  else drrr.music("http://link.hhtjim.com/163/"+mid[n-1]+".mp3",songs[n-1]) 
}