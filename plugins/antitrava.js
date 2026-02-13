
export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) {
        return true;
    }
    if (!m.isGroup) {
        return false;
    }
    
    let chat = global.db.data.chats[m.chat] || {};
    let bot = global.db.data.settings[this.user.jid] || {};
    
    if (chat.antiTraba && m.text.length > 4000) {
        const name = await conn.getName(m.sender);
        
        if (isAdmin) {
            return await conn.sendMessage(m.chat, { 
                text: `HEY] @${m.sender.split("@")[0]} PER CASO TI DIVERTI A MANDARE TRAVA QUI? CHE FORTUNA PER TE CHE SEI ADM. -.-!`, 
                mentions: [m.sender] 
            });
        }

        if (isBotAdmin) {
            await conn.sendMessage(m.chat, { 
                delete: { 
                    remoteJid: m.chat, 
                    fromMe: false, 
                    id: m.key.id, 
                    participant: m.key.participant 
                }
            });

            setTimeout(async () => {
                await conn.sendMessage(m.chat, {
                    text: `
╔══════════════════╗
║ 🚨 SISTEMA ANTI-TRAVA
╚══════════════════╝

[!] Rilevato messaggio eccessivamente lungo.

Utente: @${m.sender.split("@")[0]}

✖ Azione: Eliminazione automatica.
`
                    mentions: [m.sender]
                });
            }, 0);

            setTimeout(async () => {
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            }, 1000);

        } else if (!bot.restrict) {
             return m.reply(' Non ho i permessi da amministratore per rimuovere chi invia trava.]');
        }
    }
    
    return true;
}
