const Discord = require("discord.js");
const fs = require("fs");
const path = require('path')
const fetch = require('node-fetch')
const translate = require('@iamtraction/google-translate');
const googleTTS = require('google-tts-api');
const dogFacts = require('dog-facts');
const chalk = require('chalk');
var geoip = require('geoip-lite');
const axios = require('axios')
var moment = require('moment')
var config = require("./config.json")
var Scraper = require('images-scraper');
const PREFIX = config.prefix
const memes = require('./memes.json')
const hastebin = require('hastebin-gen');
const figlet = require('figlet');
const btcValue = require('btc-value');
const dogeify = require('dogeify-js');
const lyricsParse = require('lyrics-parse');
const scdl = require('soundcloud-downloader').default
const hostToIp = require('host-to-ip');
var JavaScriptObfuscator = require('javascript-obfuscator');
const api = require("imageapi.js")
var pathToFfmpeg = require('ffmpeg-static');
const ytdl = require('ytdl-core');
var base64 = require('base-64');
var utf8 = require('utf8');

//// Skitzhprenia on top lol - stiizzy cat


const btc_key = config.btc_key
const clientid = config.clientid
const ttslang = config.language
const V = config.VERSION
const sskey = config.screenshotapikey


const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');



const client = new Discord.Client()
client.on("ready", () => {
    client.login(config.token);
    console.log('starting scripts .....')
    console.clear();
    console.log(chalk.green(`ready to go! ${client.user.tag} on Version${V}`))
})




client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.guild) return; /// remove this if you want commands in dms
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // ARRAYS HERE <-------------------------------------------------------------->
    let responsess = ["As I see it, yes", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "It is certain", "It is decidedly so"];
    const responses = responsess[Math.floor(Math.random() * responsess.length)];

        let nekoslifee = ["/img/Random_hentai_gif", "/img/pussy", "/img/nsfw_neko_gif", "/img/lewd", "/img/les", "/img/kuni", "/img/cum", "classic", "/img/classic",
        "/img/boobs",
        "/img/bj",
        "/img/anal",
        "/img/nsfw_avatar",
        "/img/yuri",
        "/img/trap",
        "/img/tits",
        "/img/solog",
        "/img/solo",
        "/img/pwankg",
        "/img/pussy_jpg",
        "/img/lewdkemo",
        "/img/lewdk",
        "/img/keta",
        "/img/hololewd",
        "/img/holoero",
        "/img/hentai",
        "/img/futanari",
        "/img/femdom",
        "/img/feetg",
        "/img/erofeet",
        "/img/feet",
        "/img/ero",
        "/img/erok",
        "/img/erokemo", "/img/eron",
        "/img/eroyuri", "/img/cum_jpg", "/img/blowjob", "/img/spank", "/img/gasm"
    ]
    const nekoslife = nekoslifee[Math.floor(Math.random() * nekoslifee.length)];
    
    // UTILITY COMMANDS HERE <--------------------------------------------------->
      const google = new Scraper({
        puppeteer: {
            headless: true,
        },
    });
    
        if (command === "eval") {
        if (args.join(' ').includes('token')) return message.channel.send('no')
        let res
        try {
            res = eval(args.join(" "))
            message.channel.send(
                new Discord.RichEmbed()
                .setTitle("Results")
                .setColor("#FF0000")
                .setDescription("Result: ```js\n" + res + "```")
                .setFooter("Eval"))
        } catch (err) {
            return message.reply(
                new Discord.RichEmbed()
                .setTitle("Results")
                .setColor("#FF0000")
                .setDescription("what: ```" + err + "```")
                .setFooter("Eval"))
        }
    }
     if (command === "hostip") {
        const ip = args.join(" ");
        const hostname = `${ip}`
        hostToIp(hostname).then(ip => message.channel.send(ip)).catch(err => console.error(err))
    }
    if (command === "translate") {
        const query = args.join(" ");
        if (!query) return message.reply("I need text to translate");

        const translated = await translate(query, {
            to: 'en'
        });
        message.channel.send(translated.text);
    }




    if (command === "translatefile") {
        const file = message.attachments.first()?.url;
        if (!file) return message.reply('No attached file to');
        message.channel.send('Reading the file! Translating....');
        const response = await fetch(file);
        const text = await response.text();
        const translated = await translate(text, {
            to: 'en'
        });
        message.channel.send(translated.text);
    }


    if (command === "obfuscate") { ///This obfuscator is not Skitzphrenia property. Credits to the people who made this Node module.
        const file = message.attachments.first()?.url;
        if (!file) return message.reply('No attached file');
        message.channel.send('Reading...');
        const response = await fetch(file);
        const text = await response.text();
        message.channel.send("obfuscating code please wait.....")
        var obfuscationResult = JavaScriptObfuscator.obfuscate(`${text} `, {
            compact: false,
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,
    debugProtectionInterval: false,
    disableConsoleOutput: false,
    domainLockRedirectUrl: 'about:blank',
    identifierNamesCache: null,
    identifierNamesGenerator: 'hexadecimal',
    identifiersPrefix: '',
    ignoreRequireImports: false,
    inputFileName: '',
    log: false,
    numbersToExpressions: false,
    optionsPreset: 'default',
    renameGlobals: true,
    renameProperties: true,
    renamePropertiesMode: 'safe',
    seed: 0,
    selfDefending: true,
    simplify: true,
    sourceMap: false,
    sourceMapMode: 'separate',
    sourceMapSourcesMode: 'sources-content',
    splitStrings: true,
    splitStringsChunkLength: 10,
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: 'variable',
    stringArrayThreshold: 0.75,
    target: 'browser',
    transformObjectKeys: true,
    unicodeEscapeSequence: true
        });
        message.channel.send("obfuscated your code")
        fs.writeFileSync('./obfuscated.txt', `${obfuscationResult}`);
        await new Promise(resolve => setTimeout(resolve, 5000));
        message.channel.send({
            files: ["./obfuscated.txt"]
        });
    }
    if (command === "covidstats") {
	axios.get('https://api.covid19api.com/summary')
		.then(async res => {
				const data = res.data.Global
				let Covid = new Discord.RichEmbed()
					.setTimestamp()
					.setTitle(`**Covid 19 Data Global**`)
					.setDescription(`Newly Confirmed: ${data.NewConfirmed} 
          Total Confirmed: ${data.TotalConfirmed} 
          New Deaths: ${data.NewDeaths} 
          New Recovered: ${data.NewRecovered} 
          Total Recovered: ${data.TotalRecovered} `)
          .setFooter(`Provided By: ${message.author.tag}`)
                message.author.send({
                    embed: Covid
                })

            })

    }
     if (command === "guildinfo") {
        const sinfo = new Discord.RichEmbed()
            .setTitle('Member Count')
            .setColor('#800080')
            .setDescription(`Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}**`)
            .setFooter('provided by Skitzphrenia')
        message.channel.send("", sinfo)
    }
    if (command === "lookup") {
        message.channel.send('I completed the Search check ur dms')
        axios.get(`http://ip-api.com/json/${args}`)
            .then(async res => {
                var data = res.data
                let Geo = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle(`**GeoIP Lookup**`)
                    .setDescription(`**Looked Up IP**: ${args}
**ASN:** ${data.as}
**Contury:** ${data.country}
**Region:** ${data.regionName}
**CITY:** ${data.city}
**Zip:** ${data.zip}
**Lat:** ${data.lat}
**Lon:** ${data.lon}
**ISP:** ${data.isp}
**Timezone:** ${data.timezone}
 `)
                    .setFooter(`Provided By: ${message.author.tag}`)
                message.author.send({
                    embed: Geo
                })

            })

    }

    if (command === "spoiler") {
        const special = args.join(" ");
        message.channel.send(` ||${special}||`)
    }



    if (command === "userinfo") {
        let user = message.mentions.users.first()
        if (!user) {
            return message.reply("Error are you doing it correctly?  PREFIX + userinfo @user")
        }
        message.channel.send(("", {
            embed: new Discord.RichEmbed()
                .setTimestamp()
                .setTitle("**Userinfo**")
                .setColor("#36393F")
                .setThumbnail(user.avatarURL)
                .setDescription("Username - **" + user.username + "**\nDiscrim  - **" + user.discriminator + "**\n")
                .addField('Joined Discord', `${moment(message.author.createdAt).format('MM.DD.YY')}`, true)
                .addField('Joined Server', `${moment(message.member.joinedAt).format('MM.DD.YY')}`, true)
                .addField('Roles', `${message.member.roles.filter(r => r.name).size}`, true)
                .setFooter("Skitzphrenia Found It!")
        }));
    }
    if (command === "av") {
        let user = message.mentions.users.first()
        if (!user) {
            return message.reply("Error are you doing it correctly?  PREFIX + userinfo @user")
        }
        message.channel.send(("", {
            embed: new Discord.RichEmbed()
                .setTitle("Users Avatar")
                .setURL(user.avatarURL)
                .setColor("#36393F")
                .setImage(user.avatarURL)

        }));
    }
    if (command === "ytdl") {
        const link = args.join(" ");
        ytdl(`${link}`)
            .pipe(fs.createWriteStream('videoplayback-1.mp4'));

        await new Promise(resolve => setTimeout(resolve, 6000));

        message.channel.send({
            files: ["videoplayback-1.mp4"]
        });
    }

    if (command === "nsfwcheck") {
        if (message.guild === null) return message.channel.send('I can only execute this in a guild')
        var _0x865a = ["\x6E\x73\x66\x77", "\x63\x68\x61\x6E\x6E\x65\x6C", "\x74\x68\x69\x73\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x69\x73\x20\x4E\x53\x46\x57", "\x73\x65\x6E\x64", "\x74\x68\x69\x73\x20\x63\x68\x61\x6E\x6E\x65\x6C\x20\x69\x73\x20\x53\x46\x57"];
        if (message[_0x865a[1]][_0x865a[0]]) {
            message[_0x865a[1]][_0x865a[3]](_0x865a[2])
        } else {
            message[_0x865a[1]][_0x865a[3]](_0x865a[4])
        }
    }
    if (command === "hastebin") {
        let text = args.join(" ");
        hastebin(text).then(r => {
            message.channel.send("URL: " + r);
        })
    }
    if (command === "d") {
        const link = args.join(" ");
        const SOUNDCLOUD_URL = `${link}`
        const CLIENT_ID = (clientid)
        fs.unlinkSync('audio.mp3')
        scdl.download(SOUNDCLOUD_URL).then(stream => stream.pipe(fs.createWriteStream('audio.mp3')))
        await new Promise(resolve => setTimeout(resolve, 5000));

        message.channel.send({
            files: ["audio.mp3"]
        });
    }
    // EMBEDS HERE VVVVV

    if (command === "help") {
        let fuck = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('image cmds', "```\nimgsearch + keyword - searches image from google and sends to chat\nneko - sends a pic of a neko\nnekogif - sends a neko gif\n\ndog sends a random pic of a cute doggy\nlocalmeme - gets a meme off our database\nmeme - gets meme off of reddit using an api\ndababy - sends dababy thinking bubble\ncock - sends i like cock bubble\nfurry - sends furry thinking box\ntweet + text - makes an tweet image\ntrumptweet + text - makes trump say whatever you want *do not use this to impersonate\ndeepfry - deepfrys your avatar\n magik + 1-10 - magiks ur avatar\niphone - iphonexs ur pfp\n```", true)
        message.channel.send(fuck)
        let extendo = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('More Img Cmds', "```\neject + @user - eject the user like among us\njpeg - jpegs ur avatar\nlolice - makes ur avarat a lolice cheif\nthreat - puts ur pfp on the worlds top threats\ncaptcha - turns ur pfp into a captcha\nphub + text - makes ur pfp and text a phub post\n```", true)
        message.channel.send(extendo)
        let sexy = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('NSFW Cmds', "```\npnsfw - sends nsfw image to ur dms if there is no nsfw channel in the guild\nBoobs - sends Boob pics\npusy - sends pussy pics\nanial - sends anial pics\nhentaigif - sends a hentai gif\nlewd - sends a lewd neko\nlewdgif - sends a lewd neko gif\ntitz - gets a pic of tits\nsologirl - gets a solo girl pic\npussywank - pussywank\ngasim - get a gasmim gif/pic\navatar - gets an nsfw avatar\n```", true)
        message.channel.send(sexy)
        let shitfuck = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('fun cmds', "```\npp - tells you ur penis size\nthotrate - tells you how thottie you are\ngayrate - tells you how gay you are\n8ball - tells if ur fortine is right\nvc - joins a vc\ndc - disconnects from a vc\nfuck - spells fuck in reaction form\npus - spells pussy in reaction form\nascii + text - makes your text into ascii art\nbtc - checks the bitcoin price\n price + cryptocurrentcy + currentcy - checks how much 1 coin  of a choosen crypto is\nlyrics + songname - scrapes lyrics from google and sends them in the channel\ntranslate file - translates a txt file to english\ntranslate - translates text to english or to the specified language in the config.json\nbj - plays jerk off anim\nbrag - brags about selfbot\nhack + userid - hacks user like the fbi```", true)
        message.channel.send(shitfuck)
        let tack = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('Utility Cmds', "```\ndefine + word - defines word with urban dictionary\nlookup + ip - searches ip for location n the shit yk\nd + soundcloud link - downloads song from soundcloud\nyt + youtube link - downloads the yt video\nspoiler + text hides text in spoiler format\nghostping + users @ - ghostpings user :troll:\nfirstmessage - finds the channels first message\nscreenshot + link - screenshots the site *requires key```", true)
        message.channel.send(tack)
    }
      
    if (command === "botinfo") {
        let helpembed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .addField('NSFW Cmds', "```\nSkitzphrenia V5\n----------------\nCoded By Stiizzy!\n----------------\nCommand count: 104\n----------------\nVersion: 5.1\n ```", true)
        message.channel.send(helpembed)
    }
    // Fun Commands here
     if (command === "gayrate") {
        let user = message.mentions.users.first()
        if (!user) {
            return message.reply("This person does not exist")
        }
        let gayrate = Math.floor(Math.random() * 100)
        let gayrateEmbed = new Discord.RichEmbed()
            .setTitle("thotrate Calculator")
            .setColor("#000000")
            .setDescription(`${user.username} is \`${gayrate}%\` gay!`)
            .setFooter('skitzophrenia does not lie')
        message.reply("", gayrateEmbed)
    }

    if (command === "thotrate") {
        let thotrate = Math.floor(Math.random() * 100)
        let user = message.mentions.users.first()
        if (!user) {
            return message.reply("This person does not exist")
        }
        let mmmm = new Discord.RichEmbed()
            .setTitle("Gayrate Calculator")
            .setColor("#000000")
            .setDescription(`${user.username} is \`${thotrate}%\` Thotty `)
            .setFooter('Skitzphrenia does not lie')
        message.reply("", mmmm)
    }
    if (command === "matchmake") {
        let user = message.mentions.users.first()
        let love = Math.floor(Math.random() * 100) + 1

        if (!user) return message.channel.send('Please mention a user to match with')
        if (user === message.author) return message.channel.send('Please mention someone')

        const nomatch = new Discord.RichEmbed()
            .setTitle('This isn\'t a match, sorry')
            .setDescription(`${message.author} shipped with ${user} and it is ${love}%`)
            .setColor("#FF0000")

        const match = new Discord.RichEmbed()
            .setTitle('They were meant to be together')
            .setDescription(`${message.author} shipped with ${user} and it is ${love}%`)
            .setColor("#FFC0CB")

        if (love > 50) {
            message.channel.send(match)
        } else {
            message.channel.send(nomatch)
        }

    }


    if (command === "imgsearch") {
        const image = args.join(" ");
        const results = await google.scrape(image, 1);
        message.channel.send(results[0].url)

    }



    if (command === "pp") { 
        let user = message.mentions.users.first()
        if (!user) {
            return message.reply("This person does not exist")
        }
        var peniz = '='
        for (r = 0; r < Math.floor(Math.random() * 20); r++) {
            peniz += '='
        }
        message.reply(("", {
            embed: new Discord.RichEmbed()
                .setTitle("**Penis measurer **")
                .setColor("#ffe5b4")
                .setTitle("**" + user.username + "** Penis size is \n")
                .setDescription(`8${peniz}D`)
                .setFooter("Skitzphrenia does not lie - fixed by 1nch")
        }));
    }

   


    if (command === "meme") {
        axios.get('https://meme-api.herokuapp.com/gimme')
            .then(async res => {
                var data = res.data
                const embed = new Discord.RichEmbed()
                    .setTitle(data.title)
                    .setImage(data.url)
                    .setFooter(`${data.subreddit} ${data.postLink}`);

                message.channel.send(`Getting a meme for you!`)
                message.channel.send(embed)
            })
    }

    if (command == 'localmeme') {
        return message.channel.send(memes[Math.floor(Math.random() * memes.length)])
    }



    if (command == 'memes') {
        var msg = ''
        if (parseInt(args[0]) <= 3) {
            for (i = 0; i < parseInt(args[0]); i++) {
                msg += memes[Math.floor(Math.random() * memes.length)] + '\n'
            }
            message.channel.send(msg)
        } else {
            return message.channel.send('no')
        }
    }

    if (command === "cum") {
        const channelid = message.channel.id
        try {
            const channel = client.channels.get(channelid);


            const messages = await channel.fetchMessages({
                limit: 20
            });

            for (const [id, message] of messages) {
                await message.react('🇮');
                await message.react('❤️');
                await message.react('🇨');
                await message.react('🇺');
                await message.react('🇲');
            }
        } catch (err) {
            console.error(err);
        }
    }

    

    if (command === 'fuck') {
        message.react('🇫')
            .then(() => message.react('🇺'))
            .then(() => message.react('🇨'))
            .then(() => message.react('🇰'))

    }

    if (command === 'pus') {
        message.react('🅿️')
            .then(() => message.react('🇺'))
            .then(() => message.react('🇸'))
            .then(() => message.react('🇾'))
    }

    

    if (command === "ghostping") {
        const username = args.join(" ")
        message.channel.send(username)
            .then(msg => msg.delete());
    }
     
       if(command === "kanye"){
      axios.get('https://api.kanye.rest/') /// Credit to the api creators https://kanye.rest/
      .then(async res => {
      const  data = res.data.quote
      message.channel.send(`Kanye Quote: ${data}`)
    })
    }





   
    if (command === "speak") {
        const messageToSay = args.join(" ");
        if (args.join(' ').split(PREFIX + command).length == 1 && !messageToSay == '')
            message.channel.send(`${messageToSay}`)
        else if (args.join(' ').split(PREFIX + command).length == 1 && messageToSay == '')
            return message.reply("please put some text before executing cmd")
    }
    if (command === "8ball") {
        const ballembeed = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .setDescription(responses)

        message.channel.send(" ", ballembeed)
    }


    if (command === "yomama") {
        let user = message.mentions.users.first()
        if (!user) {
            return message.send("Unknown user!")
        }
        axios.get("https://api.yomomma.info/")
            .then(async res => {
                var data = res.data
                message.channel.send(("", {
                    embed: new Discord.RichEmbed()
                        .setTitle(" **" + user.username + " ** \n")
                        .setColor("#008000")
                        .setDescription(data.joke)
                        .setImage('https://pbs.twimg.com/media/ElCtiS_VMAEUvni.jpg')
                        .setFooter("roasted")
                }));
            })
    }
    if (command === "ping") {
        message.channel.send(':ping_pong: Pong! The ping is **' + client.ping.toFixed() + '**ms')

    }




    if (command === "dababy") {
        message.channel.send({
            files: ["./bubbles/dababy.png"]
        });
    }
    if (command === "gun") {
        message.channel.send({
            files: ["./bubbles/gun.jpg"]
        });
    }
    if (command === "furry") {
        message.channel.send({
            files: ["./bubbles/fur.png"]
        });
    }
    if (command === "cock") {
        message.channel.send({
            files: ["./bubbles/cock.png"]
        });
    }
    if (command === "lyrics") {
        (async () => {
            let song = args[1]
            if (!song) return message.channel.send("i need a song name")

            const artist = args.slice(2).join(" ");
            if (!artist) return message.channel.send("i need the artist name")

            const title = `${song}`;
            const author = `${artist}`;

            const lyrics = await lyricsParse(title, author);
            fs.writeFileSync('./lyrics.txt', `${lyrics}`);
            message.channel.send({
                files: ["./lyrics.txt"]
            });
        })();
    }




    if (command === "dogeify") {
        const doge = args.join(" ");
        if (args.join(' ').includes('Nigga')) return message.channel.send('no')
        const str = `${doge}`;
        message.channel.send(await dogeify(str));
    }




    if (command == 'vc') {
        var VC = message.member.voiceChannel;
        VC.join()

    }
    if (command == 'dc') {
        var VC = message.member.voiceChannel;
        VC.leave()

    }
    if (command == 'play') {
        const link = args.join(" ")
        var VC = message.member.voiceChannel;
        VC.join().then(channel => {
            channel.playStream(
                ytdl(link, {
                    filter: 'audioonly',
                    volume: 9
                })
            );
        });
    }




    if (command == "spamping") {
        const messageToSay = args.join(" ");
        if (args.join(' ').split(PREFIX + command).length == 1 && !messageToSay == '')
            var t = 0
        var int = setInterval(() => {
            message.channel.send(`${messageToSay}`)
            t++
            if (t > 9999) clearInterval(int)
        }, 300)




    }




    if (command === "dmspam") {
        ///stiizzy was here 
        const userid = args.join(" ");
        console.log(chalk.red(`sent the nuke to ${userid} `))
        var t = 0
        var int = setInterval(() => {
            client.fetchUser(`${userid}`, false).then((user) => {
                user.send("﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽")
                t++
                if (t > 200) clearInterval(int)
            }, 300)
        })
    }
      if (command == "btc") {
        btcValue().then(value => {
            let embed = new Discord.RichEmbed()
                .setAuthor('Bitcoin price!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png', 'https://www.google.com/search?q=bitcoin+price&rlz=1CAIUCL_enUS916&oq=bitcoin+price&aqs=chrome..69i57j69i59j0i433l2j0l4j0i433j0.8861j1j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on')
                .setColor("#ff9900")
                .setDescription('$' + `${value} USD`);
            message.channel.send(embed)

        });
    }

    if (command === "tts") {
        const text = args.join(" ");
        const url = googleTTS.getAudioUrl(`${text}`, {
            lang: (ttslang),
            slow: false,
            host: 'https://translate.google.com',
        })
        message.channel.send(url)
    }
    

    if (command === "define") {
        const text = args.join(" ");
        const {
            data: {
                list
            },
        } = await axios.get(`https://api.urbandictionary.com/v0/define?term=${text}`)
        const [Sex] = list
        let balls = new Discord.RichEmbed()
            .setTitle(Sex.word)
            .addField("Definition", trim(Sex.definition))
            .addField("Word Use", trim(Sex.example))
            .setFooter("Skitzphrenia Scraped it!")
        message.channel.send(balls)
    }

    function trim(input) {
        return input.length > 1024 ? `${input.slice(0, 1020)} ...` : input;
    }

    if (command === "invisping") {
        let user = message.mentions.users.first()
        message.channel.send(`** **||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||${user}`)
    }
    if (command === "invislink") {
        const link = args.join(" ")
        message.channel.send(`** **||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||${link}`)
    }

// Nsfw Commands here VVVVV

    if (command === "pussy") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/pussy")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "anial") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/anal")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }
    if (command === "boobs") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/boobs")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }
    if (command === "hentaigif") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/Random_hentai_gif")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }
    if (command === "lewd") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/lewd")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "lewdgif") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/nsfw_neko_gif")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "tits") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/tits")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }


    if (command === "sologirl") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/solo")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "pussywank") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/pwankg")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "gasim") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/gasm")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }

    if (command === "avatar") {
        if (message.channel.nsfw) {
            axios.get("https://nekos.life/api/v2/img/ngif")
                .then(async res => {
                    var data = res.data
                    message.channel.send(data.url)
                })
        } else {
            message.channel.send("Error: Channel Is SFW");
        }
    }
    if (command == "dog") {
        axios.get("https://random.dog/woof.json")
            .then(async res => {
                var data = res.data
                message.channel.send("", {
                    embed: new Discord.RichEmbed()
                        .setTitle("Random Dog")
                        .setColor("#FBFF00")
                        .setDescription(dogFacts.random())
                        .setImage(data.url)
                        .setFooter("Image by random.dog")
                })
            })
    }
    if (command == "nekogif") {
        axios.get("https://nekos.life/api/v2/img/ngif")
            .then(async res => {
                var data = res.data
                message.channel.send(data.url)
            })
    }

    if (command == "pnsfw") {
        axios.get(`https://nekos.life/api/v2/${nekoslife}`)
            .then(async res => {
                var data = res.data
                message.author.send(data.url)
            })
    }
/// Image commands here VVVV

    if (command == "ascii") {
        const text = args.join(" ");
        if (!text) {
            return message.channel.send("I need some text to asccify")
        }
        figlet.text(text, function(err, data) {


            if (err) {
                console.log("error occured")
            }
            if (data.length > 2000) return message.channel.send("your text needs to be less than 2000 chars")

            message.channel.send('```' + data + '```')
        })
    }
    if (command === "tweet") {
        const tweeter = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${tweeter}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "trump") {
        const tweeter = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${tweeter}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "deepfry") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "magik") {
        const int = args.join(" ");
        if (!int) {
            return message.channel.send("i need a number 1-10 for intensity settings")
        }
        axios.get(`https://nekobot.xyz/api/imagegen?type=magik&image=${message.author.avatarURL}&intensity=${int}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "fry") {
        var content = message.content;
        var url;
        url = message.attachments.first().url;
        axios.get(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${url}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "magick") {
        var content = message.content;
        var url;
        url = message.attachments.first().url;
        axios.get(`https://nekobot.xyz/api/imagegen?type=magik&image=${url}&intensity=6`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "iphone") {
        var content = message.content;
        var url;
        url = message.attachments.first().url;
        axios.get(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "jpeg") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if(command === "firstmessage"){
    const fetchmessages = await message.channel.fetchMessages({ after: 1, limit: 1 });
    const SEXY = fetchmessages.first();
    const SEX  = new Discord.RichEmbed()
    .setTitle(`hop to first message`)
    .setURL(SEXY.url)
    .setFooter("Skitzphrenia found it")
    message.channel.send(SEX)
}
    if (command === "hack"){
    const userid = args.join(" ");

 
var text = userid;
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
    message.channel.send(`Hacking <@${userid}> ...`)
    .then(msg => msg.edit(`Hacking <@${userid}> ..`))
    .then(msg => msg.edit(`Hacking <@${userid}> .`))
    .then(msg => msg.edit(`Logged Preview: ${encoded} ip: 760 *** ***`))
}
    if(command === "screenshot"){
        const www = args.join(" ");
        axios.get(`https://shot.screenshotapi.net/screenshot?token=${sskey}&url=${www}`)
        .then(async res => {
            var data = res.data
            message.channel.send(data.screenshot)
        })
    }
 if (command === "eject") {
    let user = message.mentions.users.first()
    if (!user) {
        return message.reply("This person does not exist")
    }
    message.channel.send(`　
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} w.　 。　.
　　'　　　 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`)
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} wa.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was n.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was no.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not a.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an .　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an i .　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an im .　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imp .　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an impo .　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an impos.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an impost.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposte.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 i 　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 im 　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imp　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 impo　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 impos　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 impost　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposte　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter r　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter re　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter rem　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter rema　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter remain　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
.then(msg => msg.edit(`
.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 ඞ  。 . 　　 • 　　　　•
　　ﾟ　 ${user.username} was not an imposter.　 。　.
　　'　　　  　 　1 imposter remains　。
　　ﾟ　　　.　　　. ,　　　　.　 .`))
}
if (command === "brag") {
    message.channel.send("S")
    .then(msg => msg.edit("Sk"))
    .then(msg => msg.edit("Ski"))
    .then(msg => msg.edit("Skitz"))
    .then(msg => msg.edit("Skitzp"))
    .then(msg => msg.edit("Skitzph"))
    .then(msg => msg.edit("Skitzphr"))
    .then(msg => msg.edit("Skitzphre"))
    .then(msg => msg.edit("Skitzphren"))
    .then(msg => msg.edit("Skitzphreni"))
    .then(msg => msg.edit("Skitzphrenia"))
    .then(msg => msg.edit("Skitzphrenia O"))
    .then(msg => msg.edit("Skitzphrenia On"))
    .then(msg => msg.edit("Skitzphrenia On T"))
    .then(msg => msg.edit("Skitzphrenia On To"))
    .then(msg => msg.edit("Skitzphrenia On Top"))
}
    if (command === "lolice") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=lolice&url=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "threat") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=threats&url=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "captcha") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=captcha&url=${message.author.avatarURL}&username=${message.author.username}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "phub") {
        const joe = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.avatarURL}&text=${joe}&username=${message.author.username}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "blurpify") {
        const joe = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "stickbug") {
        var content = message.content;
        var url;
        url = message.attachments.first().url;
        if (!url) {
            message.reply("i need an image, just go on google find an image click copy image then do $stickbug and paste image")
        }
        axios.get(`https://nekobot.xyz/api/imagegen?type=stickbug&url=${url}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "trash") {
        axios.get(`https://nekobot.xyz/api/imagegen?type=trash&url=${message.author.avatarURL}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "change") {
        const text = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "clyde") {
        const text = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }
    if (command === "ddlc") {
        const text = args.join(" ");
        axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=y&background=class&body=1b&face=y4&text=${text}`)
            .then(async res => {
                var data = res.data
                message.channel.send(data.message)
            })
    }

})
client.login(config.token);


