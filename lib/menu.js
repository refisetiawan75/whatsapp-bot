const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Best regards, Ysmn Project.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, jame, betime, blockNumber, prem, banned, hit, cts, waver) => {
    return `
*┏━──Information Bot*
*┃*
*┃➥ Repo : github.com/Refiseti/whatsapp*
*┃➥ Library : @open-wa/wa-automate*
*┃➥ Bot Name : Ysmn-Botz*
*┃➥ Whatsapp Bot Ver : 2.12.0*
*┃➥ Creator : Yasmin Project*
*┃➥ Date : ${betime}*
*┃➥ Time : ${jame}*
*┃➥ Premium : ${blockNumber.length} User*
*┃➥ Banned : ${banned.length} User*
*┃➥ Block  : ${prem.length} User*
*┃➥ Hit : ${hit.length}*
*┃*
*┗━──────────────*


*┏━──Whatsapp Group*
*┃https://chat.whatsapp.com/EGl7538o*
*┗━──────────────*

*⌜ Others Commands ⌟*
  
*┏━───────────────╮*
*┃➥${prefix}s*
*┃➥${prefix}sfull*
*┃➥${prefix}autostik*
*┃➥${prefix}attp*
*┃➥${prefix}ttp*
*┃➥${prefix}sgiffull*
*┃➥${prefix}startgif*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}nulis*
*┃➥${prefix}quotemaker*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}infosurah*
*┃➥${prefix}surah*
*┃➥${prefix}tafsir*
*┃➥${prefix}ALaudio*
*┃➥${prefix}jsolat*
*┃➥${prefix}tiktokpic*
*┃➥${prefix}artinama*
*┃➥${prefix}cekjodoh*
*┃➥${prefix}zodiak*
*┃➥${prefix}motivasi*
*┃➥${prefix}urgay*
*┃➥${prefix}sreddit*
*┃➥${prefix}resep*
*┃➥${prefix}cuaca*
*┃➥${prefix}chord*
*┃➥${prefix}lirik*
*┃➥${prefix}whatanime*
*┃➥${prefix}aiquote*
*┃➥${prefix}doggo*
*┃➥${prefix}fakta*
*┃➥${prefix}fakboy*
*┃➥${prefix}katabijak*
*┃➥${prefix}quote*
*┃➥${prefix}brainly*
*┃➥${prefix}cerpen*
*┃➥${prefix}cersex*
*┃➥${prefix}puisi*
*┃➥${prefix}anime*
*┃➥${prefix}kpop*
*┃➥${prefix}memes*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}resi*
*┃➥${prefix}covidindo*
*┃➥${prefix}ceklokasi*
*┃➥${prefix}bapakfont*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}me*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}gcinfo*
*┃➥${prefix}dewabatch*
*┃➥${prefix}howmuch*
*┃➥${prefix}kalkulator*
*┃➥${prefix}google*
*┃➥${prefix}ptl*
*┃➥${prefix}grupbot*
*┃➥${prefix}read*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}santet*
*┃➥${prefix}nyenye*
*┃➥${prefix}saylist*
*┃➥${prefix}addsay*
*┃➥${prefix}say*
*┃➥${prefix}delsay*
*┃➥${prefix}listbacot*
*┃➥${prefix}addbacot*
*┃➥${prefix}bacot*
*┃➥${prefix}delbacot*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}infogempa*
*┃➥${prefix}tod*
*┃➥${prefix}kbbi*
*┃➥${prefix}logoph*
*┃➥${prefix}infobmkg*
*┃➥${prefix}bucin*
*┃➥${prefix}tahta*
*┃➥${prefix}artimimpi*
*┃➥${prefix}family100*
*┃➥${prefix}playstore*
*┃➥${prefix}shopee*
*┃➥${prefix}glitch*
*┃➥${prefix}distance*
*┃➥${prefix}emojisticker*
*┃➥${prefix}jadwalbola*
*┃➥${prefix}caklontong*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}kusonime*
*┃➥${prefix}logoff*
*┃➥${prefix}blackpink*
*┃➥${prefix}glowtext*
*┃➥${prefix}twitter*
*┃➥${prefix}quotesen*
*┃➥${prefix}gsmarena*
*┃➥${prefix}infoalamat*
*┃➥${prefix}detail*
*┃➥${prefix}findsticker*
*┃➥${prefix}imgtourl*
*┃➥${prefix}myzodiak*
*┃➥${prefix}missing*
*┃➥${prefix}silverpb*
*┃➥${prefix}goldpb*
*┃➥${prefix}darkjokes*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}fakta2*
*┃➥${prefix}memeindo*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}covid19*
*┃➥${prefix}convertduit*
*┃➥${prefix}iplocation*
*┃➥${prefix}simi*
*┃➥${prefix}simi2*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}happymod*
*┃➥${prefix}shortlink*
*┃➥${prefix}linknobg*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}raingif*
*┃➥${prefix}randomquran*
*┃➥${prefix}translate*
*┃➥${prefix}tr*
*┃➥${prefix}kisahnabi*
*┃➥${prefix}fiersa*
*┃➥${prefix}buatgrup*
*┃➥${prefix}afk*
*┃➥${prefix}take*
*┃➥${prefix}sgifwm*
*┃➥${prefix}addstiker*
*┃➥${prefix}delstiker*
*┃➥${prefix}liststiker*
*┃➥${prefix}addvn*
*┃➥${prefix}delvn*
*┃➥${prefix}listvn*
*┃➥${prefix}addimg*
*┃➥${prefix}delimg*
*┃➥${prefix}listimg*
*┃➥${prefix}shitposting*
*┃➥${prefix}ayatkursi*
*┃➥${prefix}quotesislam*
*┃➥${prefix}doaharian*
*┃➥${prefix}kalender*
*┃➥${prefix}bioskop*
*┃➥${prefix}infoloker*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}jadwaltvnow*
*┃➥${prefix}jadwaltv*
*┃➥${prefix}randomkpop*
*┃➥${prefix}xnxxsearch*
*┃➥${prefix}xnxx*
*┃➥${prefix}arrowsigns*
*┃➥${prefix}wanted*
*┃➥${prefix}triggered*
*┃➥${prefix}burn*
*┃➥${prefix}trash*
*┃➥${prefix}stickerline*
*┃➥${prefix}readmore*
*┃➥${prefix}3dphoto*
*┃➥${prefix}pensil*
*┃➥${prefix}pensil2*
*┃➥${prefix}lolivid*
*┃➥${prefix}ppcp*
*┃➥${prefix}wikihow*
*┃➥${prefix}sfile*
*┃➥${prefix}sfiledown*
*┃➥${prefix}tobecontinue*
*┃➥${prefix}thuglife*
*┃➥${prefix}memeindo2*
*┃➥${prefix}manga*
*┃➥${prefix}imgtopdf*
*┃➥${prefix}pencilart*
*┃➥${prefix}sindiran*
*┃➥${prefix}ppcp2*
*┃➥${prefix}givecolor*
*┃➥${prefix}faktaunik*
*┃➥${prefix}level*
*┃➥${prefix}leaderboard*
*┃➥${prefix}ssweb*
*┃➥${prefix}ssweb2*
*┃➥${prefix}ytplaylist*
*┃➥${prefix}appstore*
*┃➥${prefix}mtk*
*┃➥${prefix}twister*
*┃➥${prefix}dankmemes*
*┃➥${prefix}phsearch*
*┃➥${prefix}bacamanga*
*┃➥${prefix}carimanga*
*┃➥${prefix}javhd*
*┃➥${prefix}javporn*
*┃➥${prefix}creepyfact*
*┃➥${prefix}cosplayer*
*┃➥${prefix}tobijak*
*┃➥${prefix}cnnindo*
*┃➥${prefix}zodiakmingguan*
*┃➥${prefix}gabut*
*┃➥${prefix}marvel*
*┃➥${prefix}discord*
*┃➥${prefix}infoapp*
*┃➥${prefix}bbcindo*
*┃➥${prefix}qotd*
*┃➥${prefix}maps*
*┃➥${prefix}addvid*
*┃➥${prefix}delvid*
*┃➥${prefix}listvid*
*┃➥${prefix}uploadfile*
*┗━───────────────╯*


*⌜ Stalk & Search Sosmed ⌟*

*┏━───────────────╮*
*┃➥${prefix}stalkig*
*┃➥${prefix}githubstalk*
*┃➥${prefix}stalktiktok*
*┃➥${prefix}stalkyt*
*┃➥${prefix}stalktwitter*
*┃➥${prefix}searchuser*
*┗━───────────────╯*

*⌜ Movie & Streaming ⌟*

*┏━───────────────╮*
*┃➥${prefix}nowplaying*
*┃➥${prefix}lk21*
*┃➥${prefix}lk21new*
*┃➥${prefix}lk21comingsoon*
*┃➥${prefix}lk21seriestv*
*┃➥${prefix}lk21genre*
*┃➥${prefix}lk21negara*
*┃➥${prefix}movie*
*┃➥${prefix}filmapik*
*┃➥${prefix}filmkat*
*┃➥${prefix}filmapiknew*
*┃➥${prefix}doramaindo*
*┃➥${prefix}drakor*
*┃➥${prefix}drakorupdate*
*┃➥${prefix}drakorapik*
*┃➥${prefix}drakorindo*
*┃➥${prefix}youwatch*
*┃➥${prefix}playapik*
*┃➥${prefix}film*
*┃➥${prefix}indoxxi*
*┃➥${prefix}filmtrending*
*┗━───────────────╯*

*⌜ Asupan & 18+ ⌟*

*┏━───────────────╮*
*┃➥${prefix}asupan*
*┃➥${prefix}asupanukhty*
*┃➥${prefix}asupan2*
*┃➥${prefix}asupan3*
*┃➥${prefix}asupan4*
*┃➥${prefix}asupan5*
*┃➥${prefix}asupan6*
*┃➥${prefix}asupan7*
*┃➥${prefix}chika*
*┃➥${prefix}gheayoubi*
*┃➥${prefix}r18+*
*┗━───────────────╯*

*⌜ Downloader & Media ⌟*

*┏━───────────────╮*
*┃➥${prefix}fb*
*┃➥${prefix}pinterest*
*┃➥${prefix}pinterestdown*
*┃➥${prefix}pinimg*
*┃➥${prefix}ig*
*┃➥${prefix}igstory*
*┃➥${prefix}igreels*
*┃➥${prefix}ytshorts*
*┃➥${prefix}play*
*┃➥${prefix}play2*
*┃➥${prefix}tiktok*
*┃➥${prefix}tiktokaudio*
*┃➥${prefix}ytsearch*
*┃➥${prefix}trendingyt*
*┃➥${prefix}trendmusic*
*┃➥${prefix}trendgaming*
*┃➥${prefix}ytmp3*
*┃➥${prefix}ytmp4*
*┃➥${prefix}twitter*
*┃➥${prefix}joox*
*┃➥${prefix}tomp3*
*┃➥${prefix}spotify*
*┃➥${prefix}whatsong*
*┃➥${prefix}mediafire*
*┗━───────────────╯*

*⌜ Anime & NSFW ⌟ ツ*

*┏━───────────────╮*
*┃➥${prefix}tebakanime*
*┃➥${prefix}ecchi*
*┃➥${prefix}nanimelatest*
*┃➥${prefix}nanimeget*
*┃➥${prefix}nanimesr*
*┃➥${prefix}javcosplay*
*┃➥${prefix}topanime*
*┃➥${prefix}listnekopoi*
*┃➥${prefix}doujin*
*┃➥${prefix}rhug*
*┃➥${prefix}slap*
*┃➥${prefix}waifu*
*┃➥${prefix}nsfwgif*
*┃➥${prefix}bjgif*
*┃➥${prefix}cumgif*
*┃➥${prefix}kissgif*
*┃➥${prefix}rhentai*
*┃➥${prefix}pussy*
*┃➥${prefix}bjanime*
*┃➥${prefix}gifhentai*
*┃➥${prefix}boobs*
*┃➥${prefix}randomhentai*
*┃➥${prefix}randomhug*
*┃➥${prefix}baka*
*┃➥${prefix}animeavatar*
*┃➥${prefix}neko*
*┃➥${prefix}rwink*
*┃➥${prefix}crygif*
*┃➥${prefix}randompat*
*┃➥${prefix}loli ツ*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}wpanime*
*┃➥${prefix}nekonsfw*
*┃➥${prefix}spank*
*┃➥${prefix}classic*
*┃➥${prefix}kuni*
*┃➥${prefix}trapnime*
*┃➥${prefix}cuddle*
*┃➥${prefix}tickle*
*┃➥${prefix}pokegif*
*┃➥${prefix}feetgif*
*┃➥${prefix}anal*
*┃➥${prefix}sologif*
*┃➥${prefix}ttgif*
*┃➥${prefix}lesbian*
*┗━───────────────╯*

*⌜ Images ⌟*

*┏━───────────────╮*
*┃➥${prefix}amel*
*┃➥${prefix}pictcogan*
*┃➥${prefix}pictcecan*
*┃➥${prefix}aesthetic*
*┃➥${prefix}googleimg*
*┃➥${prefix}searchwp*
*┃➥${prefix}images*
*┃➥${prefix}wallhd*
*┃➥${prefix}wallprogramming*
*┗━───────────────╯*_

*⌜ About Bot ⌟*

*┏━───────────────╮*
*┃➥${prefix}tnc*
*┃➥${prefix}discordserver*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}reportbug*
*┃➥${prefix}runtime*
*┃➥${prefix}shutdown*
*┃➥${prefix}eval*
*┗━───────────────╯*

*⌜ Owner Bot ⌟*

*┏━───────────────╮*
*┃➥${prefix}exec*
*┃➥${prefix}exif*
*┃➥${prefix}eval*
*┃➥${prefix}mute*
*┃➥${prefix}unmute*
*┃➥${prefix}ban*
*┃➥${prefix}unban*
*┃➥${prefix}addprem*
*┃➥${prefix}delprem*
*┃➥${prefix}deleteban*
*┃➥${prefix}bc*
*┃➥${prefix}bcgrup*
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall*
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}addcogan*
*┃➥${prefix}addcecan*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallvn*
*┃➥${prefix}delallimg*
*┃➥${prefix}block*
*┃➥${prefix}unblock*
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┃➥${prefix}listwelcome*
*┗━───────────────╯*

*┏━──Contributors*
*┃*
*┃➥ Thoriq Azzikra*
*┃➥ AlvioAdjiJanuar*
*┃➥ Ravaa Ardiansyah*
*┃➥ Ihsana Fajar*
*┃➥ Nabil
*┃➥ YsmnProject*

*┃*
*┗━──────────────*

*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*
`
}
exports.help = help

/*
Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
*/

const admin = (prefix) => {
    return `
*┏━────Admin Group*
*┃*
*┃➥${prefix}antidelete*
*┃➥${prefix}setdesc*
*┃➥${prefix}hidetag*
*┃➥${prefix}ohidetag*
*┃➥${prefix}antivirtex*
*┃➥${prefix}viewonce*
*┃➥${prefix}welcome*
*┃➥${prefix}left*
*┃➥${prefix}add*
*┃➥${prefix}kick* <reply pesan orang yang ingin dikick>
*┃➥${prefix}pkick* <tag member yang ingin dikick>
*┃➥${prefix}promote* @tag
*┃➥${prefix}opromote* <reply pesan yang ingin dipromote>
*┃➥${prefix}odemote* <reply pesan yang ingin didemote>
*┃➥${prefix}demote* @tag
*┃➥${prefix}infoall*
*┃➥${prefix}del*
*┃➥${prefix}leveling on/off*
*┃➥${prefix}seticon*
*┃➥${prefix}revoke link gc*
*┃➥${prefix}setgroupname*
*┃➥${prefix}resend*
*┃➥${prefix}bokep*
*┃➥${prefix}edotensei*
*┃➥${prefix}oedotensei* <reply pesan member>
*┃➥${prefix}nsfw on/off*
*┃*
*┗━──────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}
exports.admin = admin

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Pulsa : 082118159396

Saweria : hhttps://saweria.co/ysmnproject
OVO : 082118159396

Terimakasih. 

-Yasmin Project`
}

exports.kodebahasa = () => {
    return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

