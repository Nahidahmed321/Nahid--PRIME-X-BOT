const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' });
    const date = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Dhaka' });
    const pushname = message.pushName || 'User';

    const helpMessage = `✨ *COMMAND MENU* ✨
┠───────────────
┃ 💎 *Bot:* ${settings.botName || '𝐓𝐎𝐌 𝐏𝐑𝐈𝐌𝐄 𝐗 𝐁𝐎𝐓'}
┃ 👑 Owner: *${settings.botOwner || '𝐓𝐎𝐌 𝐏𝐑𝐈𝐌𝐄 𝐗'}*
┃ 🌍 Prefix: *${settings.prefix || '.'}*
┃ 🧩 Version: ${settings.version || '1.1.5'}
┃ 🕒 Time: ${time}
┃ 📅 Date: ${date}
┃ 🌐 Timezone: Asia/Dhaka
┃ 📜 Total Commands:165+
┠───────────────
   ● ADMIN TERMINAL
   ┝ .ban
   ┝ .kick
   ┝ .kickall
   ┝ .fuck-off
   ┝ .promote
   ┝ .demote
   ┝ .mute
   ┝ .unmute
   ┝ .delete
   ┝ .warn
   ┝ .warnings
   ┝ .antispam
   ┝ .antisticker
   ┝ .antilink
   ┝ .antibadword
   ┝ .tagall
   ┝ .hidetag
   ┝ .tag
   ┝ .welcome
   ┝ .goodbye
   ┝ .chatbot
   ┝ .setgpp
   ┝ .setgname
   ┝ .setgdesc
   ┝ .resetlink
   ┝ .groupinfo
   ┝ .leave
   ┝ .poll
   ┝ .adminlist
   ┝ .groupsetting
   ┝ .antiviewonce
   ┝ .antiforeign

   ● NEURAL AI HUB
   ┝ .bot
   ┝ .gpt
   ┝ .gemini
   ┝ .imagine
   ┝ .flux
   ┝ .sora
   ┝ .remini
   ┝ .bingai
   ┝ .blackbox
   ┝ .claude
   ┝ .aiwriter
   ┝ .aidetect
   ┝ .codeai
   ┝ .brainly
   ┝ .wolfram
   ┝ .aiphoto
   ┝ .deepseek

   ● PREMIUM DOWNLOADER
   ┝ .play
   ┝ .song
   ┝ .video
   ┝ .spotify
   ┝ .ytmp4
   ┝ .ytmp3
   ┝ .tiktok
   ┝ .facebook
   ┝ .instagram
   ┝ .twitter
   ┝ .gdrive
   ┝ .mediafire
   ┝ .mega
   ┝ .scloud
   ┝ .gitclone
   ┝ .pinterestdl
   ┝ .threads
   ┝ .snapchat
   ┝ .apkdl
   ┝ .mediafiredl

   ● DESIGN & STICKER
   ┝ .sticker
   ┝ .simage
   ┝ .blur
   ┝ .removebg
   ┝ .emojimix
   ┝ .crop
   ┝ .take
   ┝ .meme
   ┝ .tgsticker
   ┝ .wallpaper
   ┝ .imgsearch
   ┝ .pinterest
   ┝ .qrcode
   ┝ .attp
   ┝ .ttp
   ┝ .wasticker

   ● FUN & GAMES
   ┝ .tictactoe
   ┝ .hangman
   ┝ .trivia
   ┝ .truth
   ┝ .dare
   ┝ .flirt
   ┝ .ship
   ┝ .simp
   ┝ .character
   ┝ .insult
   ┝ .compliment
   ┝ .shayari
   ┝ .joke
   ┝ .quote
   ┝ .fact
   ┝ .8ball
   ┝ .lines
   ┝ .riddle
   ┝ .casino
   ┝ .dice

   ● TEXTMAKER MAGIC
   ┝ .neon
   ┝ .glitch
   ┝ .matrix
   ┝ .hacker
   ┝ .fire
   ┝ .thunder
   ┝ .metallic
   ┝ .blackpink
   ┝ .ice
   ┝ .snow
   ┝ .devil
   ┝ .light
   ┝ .purple
   ┝ .leaves
   ┝ .arena
   ┝ .sand
   ┝ .glass
   ┝ .magma
   ┝ .graffiti
   ┝ .holographic

   ● ANIME WORLD
   ┝ .waifu
   ┝ .neko
   ┝ .shinobu
   ┝ .megumin
   ┝ .kiss
   ┝ .hug
   ┝ .pat
   ┝ .slap
   ┝ .kill
   ┝ .cry
   ┝ .dance
   ┝ .poke
   ┝ .bully
   ┝ .animequote
   ┝ .handhold
   ┝ .bite
   ┝ .glowing

   ● ROOT SYSTEM
   ┝ .mode
   ┝ .update
   ┝ .settings
   ┝ .autoread
   ┝ .autostatus
   ┝ .anticall
   ┝ .pmblocker
   ┝ .clearsession
   ┝ .cleartmp
   ┝ .setpp
   ┝ .antidelete
   ┝ .autotyping
   ┝ .autoreact
   ┝ .botstatus
   ┝ .join
   ┝ .out

   ● SYSTEM DATA
   ┝ .info
   ┝ .repo
   ┝ .sc
   ┝ .github
   ┝ .owner
   ┝ .ping
   ┝ .alive
   ┝ .weather
   ┝ .news
   ┝ .lyrics
   ┝ .runtime
   ┝ .ss
   ┝ .jid
   ┝ .url
   ┝ .trt
   ┝ .tts
   ┝ .calc
   ┝ .time
   ┝ .dictionary
   ┝ .wikipedia
   ┝ .currency
   ┝ .covid
   ┝ .iplookup
   ┝ .passed
   ┝ .jail
   ┝ .wasted
   ┝ .triggered
   ┝ .tweet
   ┝ .comrade
   ┝ .horny
   ┝ .lgbt
   ┝ .heart
   ┝ .circle
   ┝ .ytcomment
   ┝ .speedtest
   ┝ .uptime
   ┝ .cpuinfo
   ┝ .diskusage
   ┕━━━━━━━━━━━━━━━━━━━━┙

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      *Powered by TOM PRIME X*
     _Luxury Redefined • Dhaka 2026_`;

    try {
        const myPic = 'https://i.postimg.cc/DyqKStwP/IMG-20260410-WA0057.png';
        await sock.sendMessage(chatId, { 
            image: { url: myPic }, 
            caption: helpMessage,
            }, { quoted: message });
    } catch (e) {
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
