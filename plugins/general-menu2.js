import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `ᴋᴏɴɪᴄʜɪᴡᴀ, ᴀɴᴀᴛᴀ ʜᴜᴛᴀᴏ ʏᴀɴɢ ᴅɪʙᴇʀɪ ɴᴀᴍᴀ ᴏʟᴇʜ ʀᴇɴғᴜɴɪx-sᴀᴍᴀ. sᴇʙᴇʟᴜᴍ ᴍᴇᴍᴀᴋᴀɪ ʙᴏᴛ, ᴅɪᴍᴏʜᴏɴ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴀᴄᴀ ʀᴜʟᴇs ᴅᴜʟᴜ ʏᴀ ><.\nᴊɪᴋᴀ sᴜᴅᴀʜ, ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb', 'gc bot', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nʜᴜᴛᴀᴏ ᴡᴀɴɢʏ ><`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
