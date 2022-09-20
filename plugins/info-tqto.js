import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file\/63ae1049b04fff5c0baa6.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
https://github.com/adiwajshing

*▸ - - - —「 Penulis Ulang 」— - - - ◂*
*❉ ImYanXiao:*
https://github.com/ImYanXiao
*▸ - - - —「 Thanks For 」— - - - ◂*
*❉ FOLLOWERS TIKTOK @nafronanjay2*
*❉ USER SEWA & PREMIUM FRONBOT:*
*❉ USER FRONBOT*
*❉ USER YANG BIJAK*
*❉ USER GOOD ATTITUDE*
*❉ USER BAIK HATI*

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/nafronam",
    mediaType: "VIDEO",
    description: "https://Instagram.com/nafronam", 
    title: 'ᴍᴜʜᴀᴍᴍᴀᴅ ɴᴀꜰʀᴏɴ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
