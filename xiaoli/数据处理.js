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
    blob = new Blob([_data])
    aLink = document.createElement('a')
    aLink.href = URL.createObjectURL(blob)
    aLink.setAttribute('download', _name)
    document.body.appendChild(aLink)
    aLink.click()
}