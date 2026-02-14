let handler = async (m, { conn, command }) => {
    let isOpen = command === 'aperto'
    await conn.groupSettingUpdate(m.chat, isOpen ? 'not_announcement' : 'announcement')
    await conn.sendMessage(m.chat, {
        text: isOpen ? 'ℙ𝕒𝕣𝕝𝕒𝕥𝕖 𝕔𝕒𝕟𝕚' : '𝑶𝒓𝒂 𝒑𝒂𝒓𝒍𝒂𝒏𝒐 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒑𝒂𝒅𝒓𝒐𝒏𝒊',
        contextInfo: {
            forwardingScore: 99,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363259442839354@newsletter',
                serverMessageId: '',
                newsletterName: global.db.data.nomedelbot || `𝐙𝐲𝐧𝐨`
            }
        }
    }, { quoted: m })
}

handler.help = ['aperto', 'chiuso']
handler.tags = ['group']
handler.command = /^(aperto|chiuso)$/i
handler.admin = true
handler.botAdmin = true

export default handler