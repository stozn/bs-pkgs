keys=[1,2,3,4]
key=""
ak=0
bk=0
players = []
roles = [0,1,2]
roleName = ["队长","队员","间谍"]

announcement = "/me尚未开始游戏"
announce = (msg) => {
  announcement = msg
  drrr.print(msg)
}
str=(s)=> String(s)

state prepare {
  players = []
 
  event [msg, me] (user, cont: "^\\+1$") => {
    if players.includes(user) then
      drrr.print("/me" + user + " 已经加入了")
    else{
      players.push(user)
      drrr.print("/me" + user + " 加入游戏")
    }
  }
  event [msg, me] (user, cont: "^-1$") => {
    if players.includes(user) then {
      players.splice(players.indexOf(user), 1);
      drrr.print("/me" + user + " 退出游戏")
    }
    else drrr.print("/me" + user + " 不在游戏中")
  }
  event [msg, me] (user, cont: "^/p$") => {
    if players.length then {
    	drrr.print("玩家：\n" + players.map((user, index) => String(index + 1) + ". " + user).join("\n"))
    } else drrr.print("/me 没有玩家")
  }
  event [msg, me] (user, cont: "^/go$") => {
    if players.length ==3 then {
	going prelude
	}
    else drrr.print("/me需满足 3 人, 目前 " + String(players.length) + "人")
  }
  announce("/me [+1] 加入, [-1] 退出, [/p] 玩家, [/go] 开始")
}

state prelude {
  roles.sort(()=>Math.random() - 0.5)
  r=players.map((name, idx) => roleName[roles[idx]]+ "：" + "@"+name ).join("\n")
  drrr.print("角色：\n"+r)
  later 4000 announce("/me 请队长和队员约定密码（30秒）")
  later  34*1000 going hide
}


state hide {
keys.sort(()=>Math.random() - 0.5) 
announce("/me请队长查看三位数字口令，并在公屏给出3个线索，回复OK结束")
i=roles.findIndex(x=> x==0)
key=str(keys[0])+str(keys[1])+str(keys[2])
drrr.dm(players[i],"本次口令为："+key)
event [msg, me] (user:players[i], cont: "(OK|ok)") => {
going guess
}
}

state guess {
  announce("/me请队员和间谍开始解密，私信我三位数字口令")
  a=roles.findIndex(x=> x==1)
  b=roles.findIndex(x=> x==2)
  ak=0
  bk=0
  event dm (user:players[a], cont:"^[1-4]{3}$") => {
    ak=cont
    drrr.dm(user,"你提交的口令是："+ak)
    if !(ak==0 || bk==0) then going result
  }
  event dm (user:players[b], cont:"^[1-4]{3}$") => {
    bk=cont
    drrr.dm(user,"你提交的口令是："+bk)
    if !(ak==0 || bk==0) then going result
  }
}

state result {
  ar=""
  br=""
    for (i=0;i<3;i++) {
    if ak[i]==key[i] then  ar+="√" else ar+="×"
    if bk[i]==key[i] then  br+="√" else br+="×"
    }
  drrr.print("结果：\n队友："+ak+"  "+ar+"\n间谍："+bk+"  "+br)
  later 10*1000 going hide
  later 8*1000 drrr.print("/me如需结束游戏请回复/game")
}


  event [msg, me, dm] (user, cont: "^/help$") => {
    drrr.print("/help 本手册\n/s 现在游戏状态\n/w 当前所有玩家\n/r 自己的卡牌\n/game 开始报名（如有游戏则重新）")
  }
 event [msg, me] (user, cont: "^/game$") => going prepare
 going prepare
