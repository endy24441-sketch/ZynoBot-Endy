// Crediti by Endy & AntiPrivato Aggiornato

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  let message = "";
  for (const [ownerNumber] of global.owner) {
    message += `\n> 📞+${ownerNumber}`;
  }
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await conn.sendMessage(m.chat, {
      text: 'text: `
╔══════════════════╗
║ ❌ ACCESS DENIED
╚══════════════════╝

Non hai il permesso di scrivere
nei messaggi privati del bot.

⟶ Per supporto o informazioni,
contatta lo staff ai riferimenti indicati sotto.
${message}
`
    });
    return false;
  }
  return true;
}