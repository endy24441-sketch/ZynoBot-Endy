let handler = async (m, { conn, command, text }) => {
    let nomeDelBot = global.db.data.nomedelbot || `𝐙𝐲𝐧𝐨`
  
    let love = `
╔══════════ 𝐂𝐀𝐋𝐂𝐎𝐋𝐀𝐓𝐎𝐑𝐄 𝐎𝐃𝐈𝐎 ══════════╗
║ L'odio tra ${text} e te: ${Math.floor(Math.random() * 100)}%
╚═════════════════════════════════════════╝
`.trim();
  
    await conn.sendMessage(m.chat, {
      text: love,
      contextInfo: {
        mentionedJid: conn.parseMention(love),
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363259442839354@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    })
  }
  
  handler.command = /^(odio)$/i
  handler.tags = ['fun']
  handler.help = ['odio @tag']
  
  export default handler