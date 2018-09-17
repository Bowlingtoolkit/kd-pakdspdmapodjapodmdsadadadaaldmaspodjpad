//By OrochiX
//جميع الحقوق محفوضة
const Discord = require('discord.js');
const Rocket = new Discord.Client();
const jimp = require("jimp");// npm i jimp
const package = ('package.json');
const yt = require('ytdl-core');
const prefix = ("T!")
const child_process = require("child_process");
const ownerid = ('429972030092476437')
const canvas = require("canvas");
const fs = require('fs')
const moment = require("moment");


console.log("By OrochiX");

Rocket.on('ready', () => {//source
    console.log('╔[════════════════════════════════════]╗');
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${Rocket.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${Rocket.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${Rocket.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
  });



Rocket.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('T!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(Rocket.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});
Rocket.on('ready', () => { //playing
    Rocket.user.setGame(`T!help | Servers : ${Rocket.guilds.size}	`,'https://www.twitch.tv/OrochiX');
    Rocket.user.setStatus('Online')
});

Rocket.on('message', async message => {
    var moment = require('moment');
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "ban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**- ما معك برمشن**");
       if(!User) message.channel.send("**- منشن يلي تبي تبنده**");
       if(User.id === client.user.id) return message.channel.send("**- ماتقدر تبند البوت**");
       if(User.id === message.guild.owner.id) return message.channel.send("**- ماتقدر تبند الاونر**");
       if(!time) return message.channel.send("**- اكتب الوقت**");
       if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- اكتب وقت حقيقي**');
       if(!Reason) message.channel.send("**- اكتب السبب**");
       let banEmbed = new Discord.RichEmbed()
       .setAuthor(`You have been banned from ${message.guild.name} !`)
       .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
       .addField('- Banned By: ',message.author.tag,true)
       .addField('- Reason:',Reason,true)
       .addField('- Time & Date:',date,true)
       .addField('- Banned Time:',time,true)
       .setFooter(message.author.tag,message.author.avatarURL);
    let incidentchannel = message.guild.channels.find(`name`, "log");
if(!incidentchannel) return message.channel.send("Can't find log channel.");
incidentchannel.send(mutedEmbed).then(() => message.guild.member(User).ban({reason: Reason}))
       .then(() => message.channel.send(`**${User} has been banned :airplan:**`)).then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, mmss(time));
    });
   }
});

  var fs = require('fs')
  const afk = require('./afk.json');
client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> أنأ **أحاول** ان أزيل عنك الأفك.");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("أهلا بك , <@"+rebel.author.id+"> تم فك عنك الأفك بسبب رجوعك."); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** لقد وضعتك بوضع الأفك **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("لقد أضفتك للأفك بسبب "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first()]) {
if (afk[rebel.mentions.users.first()].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> مأفك** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> مأفك , سبب الأفك \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});



Rocket.on('message', message => { //bc
        if(!message.channel.guild) return;
    if(message.content.startsWith('T!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Platinum Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ | تم ارسال البرودكاست لـ ${message.guild.members.size} عضو**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
    Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Broadcast')
    .addField('Server', message.guild.name)
    .addField('Sender', message.author.username)
    .addField('Message', args)
    .setImage("https://cdn.discordapp.com/attachments/411527218225741836/457933565930504195/broadcast-icon-vector-graphics-eps-58991.png")
    .setThumbnail(message.author.avatarURL)
    .setFooter(copy, Rocket.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البرودكاست.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

                        Rocket.on('message', message => { //bot
                            if (message.content.startsWith("T!bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(Rocket.user.username,Rocket.user.avatarURL)
                                    .setThumbnail(Rocket.user.avatarURL)
                                    .setColor('RANDOM')
                                    .setTitle('``Rocket Bot`` ')
                                    .addField('``Uptime``', [timeCon(process.uptime())], true)
                                    .addField('``Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                                    .addField('``servers``', [Rocket.guilds.size], true)
                                    .addField('``channels``' , `[ ${Rocket.channels.size} ]` , true)
                                    .addField('``Users``' ,`[ ${Rocket.users.size} ]` , true)
                                    .addField('``Name``' , `[ ${Rocket.user.tag} ]` , true)
                                    .addField('``ID``' , `[ ${Rocket.user.id} ]` , true)
                                          .addField('``Prefix``' , `[ ${prefix} ]` , true)
                                          .addField('``Language``' , `[ Java Script ]` , true)

                            })
                        }
                        });

                        function timeCon(time) { //bot2
                            let days = Math.floor(time % 31536000 / 86400)
                            let hours = Math.floor(time % 31536000 % 86400 / 3600)
                            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
                            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
                            days = days > 9 ? days : '0' + days
                            hours = hours > 9 ? hours : '0' + hours
                            minutes = minutes > 9 ? minutes : '0' + minutes
                            seconds = seconds > 9 ? seconds : '0' + seconds
                            return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
                        }
Rocket.on('message', message => { //clear
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'clear')) {
 if(!message.channel.guild) return message.channel.send('**هذا الامر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ليس لديك برمشن adminstrator`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let request = `Requested By ${message.author.username}`;
 message.channel.send(`**هل انت متأكد من حذف الشات؟**`).then(msg => {
 msg.react('✅')
 .then(() => msg.react('❌'))
 .then(() =>msg.react('✅'))

 let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
 let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
 message.channel.send(`سينحذف الشات ...`).then(m => m.delete(5000));
 var msg;
         msg = parseInt();

       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
         title: "`` تــــم حذف الشات ``",
         color: 0x06DF00,
         footer: {

         }
       }}).then(msg => {msg.delete(3000)});

 })
 reaction2.on("collect", r => {
 message.channel.send(`**تم الغاء حذف الشات**`).then(m => m.delete(5000));
 msg.delete();
 })
 })
 }
 });

 Rocket.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'server')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});


Rocket.on('message', message => {//av mension
    if (message.content.startsWith("T!avatar")) {

        var mentionned = message.mentions.users.first();
    var king66s;
      if(mentionned){
          var king66s = mentionned;
      } else {
          var king66s = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setAuthor(message.author.username, message.author.avatarURL)
        .setImage(`${king66s.avatarURL}`)
      message.channel.sendEmbed(embed);

    }
  });
const x5bz4 = [ //mariam
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/q7X8hCD ***'
]
 Rocket.on('message', message => {//mariam2
 if (message.content.startsWith('T!mariam')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
    }
});
Rocket.on('message', message => {//roles
    if (message.content === "T!roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
Rocket.on('message', message => {//rooms
    if (message.content === "T!rooms") {
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('rooms:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
Rocket.on('message', message => {//help msg
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
        message.react("☑")




        message.author.sendMessage(`
        **لتفعيل اللوق انشئ روم اسمه log**
        ** يشمل البوت اشياء كثيرة ومنها مانع التهكير - لـ تفعيل مانع التهكير ارفع رتبة البوت فوق كل رتب الادارة **
        __**الاوامر الادارية :gear:**__

  ❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
  ❖${prefix}** role <user> ** ==>**لاعطاء شخص رتبة**
  ❖${prefix}** role all ** ==>**لاعطاء الكل الرتبة المحددة**
  ❖${prefix}** role users ** ==>**لاعطاء الاعضاء فقط**
  ❖${prefix}** role bots ** ==>**لاعطاء البوتات فقط**
  ❖${prefix}** ct ** ==>**لانشاء روم  كتابي**
  ❖${prefix}** cc ** ==>**لانشاء مستند**
  ❖${prefix}** cv ** ==>**لانشاء روم صوتي **
  ❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
  ❖${prefix}** band ** ==>**لحظر شخص من السيرفر**
  ❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
  ❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
  ❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**
        __**الاوامر العامة :coffee:**__
  ❖${prefix}** avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
  ❖${prefix}** serveravatar ** ==>**لكي يعطيك رابط صورة السيرفر**
  ❖${prefix}** server ** ==>**لمعلومات السيرفر**
  ❖${prefix}** user ** ==>**لمعلومات عنك**
  ❖${prefix}** ping ** ==>**للتحقق من سرعة الاتصال**
  ❖${prefix}** bot ** ==>**معلومات عن البوت**
  ❖${prefix}** invite ** ==>**لاحضار البوت الى سيرفرك**
  ❖${prefix}** time ** ==>**لرؤية الوقت**
  ❖${prefix}** color ** ==>**لتغيير لونك**
  ❖${prefix}** roles ** ==>**لكي ترى كل رتب السيرفر**
  ❖${prefix}** rooms ** ==>**لكي ترى كل قنوات السيرفر**
  ❖${prefix}** date ** ==>**لكي ترى التاريخ**
        __**الاوامر الترفيهية :video_game:**__
  ❖${prefix}** mariam ** ==>**للعب مع مريم**
  ❖${prefix}** cuttweet ** ==>**لكي يعطيك جمل كت تويت عشوائية**
  ❖${prefix}** sarahah ** ==>**لكي يعطيك جمل صراحة عشوائية**
  ❖${prefix}** cat ** ==>**لكي ترى صور قطط عشوائية**
  ❖${prefix}** roll ** ==>**لاختيار رقم عشوائي**
       __**القرآن الكريم و الميوزك :kaaba: :musical_note: **__
  ❖${prefix}** quran 1 ** ==>**القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد **
  ❖${prefix}** quran 2 ** ==>**سورة البقرة كاملة - القارئ الحاج ميثم التمار**
  ❖${prefix}** quran 3 ** ==>**القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم **
  ❖${prefix}** quran 4 ** ==>**القرآن الكريم كامل بصوت الشيخ المعيقلي**
  ❖${prefix}** qstop ** ==>**لـ أيقاف تشغيل البوت**
  ❖${prefix}** play ** ==>**تشغيل اغنيه او موسيقى**
  ❖${prefix}** stop ** ==>**اطفاء الاغنيه او الموسيقى**
  ❖${prefix}** queue ** ==>**تشغيل اغنيه او موسيقى**
  ❖${prefix}** replay ** ==>**اعاده تشغيل الاغنيه او الموسيقى**
  ❖${prefix}** vol ** ==>**ترفيع وتقليل الصوت**



  By : PlaTinUM TeaM | __**شكرا لكم لاستعمال البوت**__


  `);


  }
  });


Rocket.on('message', message => {//help
     if (message.content === "T!help") {
  message.channel.send('**تم الارسال لك في الخاص | :ballot_box_with_check:**')
    }
});
Rocket.on('message', message => {//invite
     if (message.content === "T!invite") {
     let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Click Here to invite Platinum")
.setAuthor("Platinum", "https://discordapp.com/channels/350923773140271115/469576599696834560")
.setTimestamp()
.setURL("https://discordapp.com/api/oauth2/authorize?client_id=344127240935571457&permissions=8&scope=bot")
  message.author.sendEmbed(embed);
    }
});

var cats = [//cat

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    Rocket.on('message', message => {//cat
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
Rocket.on('message', message => {//unmute
    if (message.content.startsWith('T!unmute')) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
   let men = message.mentions.users.first()
   let mas = message.author
   if(!men) return message.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
   message.guild.channels.forEach(c => {
   c.overwritePermissions(men.id, {
           SEND_MESSAGES: true
           })
      })
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**
   <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

  Rocket.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`          <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}>
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }
});

    Rocket.on('message', message => {//time
        if (message.content === prefix + "time") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');
var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setTitle("**الوقت وتاريخ**")
                .setColor('RANDOM')
                .setTimestamp()
                .addField('Time',
                "『"+ hours + ":" + minutes + "』")
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year + "』")

                 message.channel.sendEmbed(Date15);
        }
    });
 const cuttweet = [//cuttweet
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 Rocket.on('message', message => {//cuttweet
   if (message.content.startsWith("T!cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Rocket BOT' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
Rocket.on('message', message => {//color
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'T!color'){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لايوجد لون بهذا الرقم ** :x:`)
.setColor('ff0000')

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
const embed = new Discord.RichEmbed()

.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**تـــم تغيير اللون بنجاح** :white_check_mark:`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){

      message.member.removeRole(message.guild.roles.find("name",`${x}`))

      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));


}
});
const adminprefix = "T!";
const devs = ['429972030092476437'];
Rocket.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  Rocket.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
Rocket.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
Rocket.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  Rocket.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

Rocket.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});

Rocket.on('message', function(message) {//roll
        if(message.content.startsWith(prefix + 'roll')) {
            let args = message.content.split(" ").slice(1);
            if (!args[0]) {
                message.channel.send('**ضع رقم معين ليتم السحب منه**');
                return;
                }
        message.channel.send(Math.floor(Math.random() * args.join(' ')));
                if (!args[0]) {
              message.edit('1')
              return;
            }
        }
    });
    Rocket.on("message", message => {    //serv-av
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === "T!serveravatar"){
        const embed = new Discord.RichEmbed()

    .setTitle(`صورة سيرفر : ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor('RANDOM')
  .setImage(message.guild.iconURL)

 message.channel.send({embed});
    }
});
Rocket.on('message', message => {//role
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            }
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'users') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});

Rocket.on('message', message => {//id
    if(message.content == ('T!user')) {

             if (message.channel.type === 'dm') return message.reply('هذا الامر فقط للسيرفرات :x:');
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');

     const w = ['./img/ID1.png','./img/ID2.png','./img/ID3.png','./img/ID4.png','./img/ID5.png'];

             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);

     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);

                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";


                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);


                                                          moment.locale('ar-ly');


                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);


                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170);

                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }


                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)

                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);

                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)

                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());




                             })

                             })
 }
 });
 const Sra7a = [ //saraha
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  Rocket.on('message', message => {//saraahaaah
if (message.content.startsWith('T!sarahah')) {
    if(!message.channel.guild) return message.reply('** هذا الامر فقط للسيرفرات **');
 var Rocket= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(Rocket);
  message.react("??")
}
});
Rocket.on('message', msg => {
      if(!msg.guild) return;
        if (msg.content.startsWith(prefix +'cc')) {
         let args = msg.content.split(" ").slice(1);
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    let ra3d = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.author.avatarURL)
    .setDescription(`هل انت متاكد من انشاء مستند الكاتيجوري ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
    msg.channel.send(ra3d).then(message => {
     message.react('✅').then(r=>{
     message.react('❌').then(r=>{
     let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
     let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

     let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
     let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
    er.on("collect", r => {
    msg.channel.send("`تم الالغاء`")
    message.delete();
    })
    tt.on("collect", r => {
    msg.guild.createChannel(args.join(' '), 'category').then(ra3deyad => {
    channelCreated = ra3deyad.createdAt
          const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134019/2000px-Twemoji_1f4dd.svg.png')
      .addField(`اسم القناة`, `${ra3deyad.name}`, true)
      .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
      .addField(`نوع القناة`, `${ra3deyad.type}`, true)
      .addField(`متى انشأت القناة`, `${channelCreated}`)
     msg.channel.send({embed})
        message.delete();
    })
    })
    })
    })
    })
    }
    });
    Rocket.on('message', msg => {
          if(!msg.guild) return;
            if (msg.content.startsWith(prefix +'cv')) {
             let args = msg.content.split(" ").slice(1);
            if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        let ra3d = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.author.avatarURL)
        .setDescription(`هل انت متاكد من انشاء روم صوتي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
        msg.channel.send(ra3d).then(message => {
         message.react('✅').then(r=>{
         message.react('❌').then(r=>{
         let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
         let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
         let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
         let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
        er.on("collect", r => {
        msg.channel.send("`تم الالغاء`")
        message.delete();
        })
        tt.on("collect", r => {
        msg.guild.createChannel(args.join(' '), 'voice').then(ra3deyad => {
        channelCreated = ra3deyad.createdAt
              const embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setImage()
          .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134017/1500920527.jpg')
          .setURL('')
          .addField(`اسم القناة`, `${ra3deyad.name}`, true)
          .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
          .addField(`نوع القناة`, `${ra3deyad.type}`, true)
          .addField(`متى انشأت القناة`, `${channelCreated}`)
         msg.channel.send({embed})
            message.delete();
        })
        })
        })
        })
        })
        }
        });
        Rocket.on('message', msg => {
              if(!msg.guild) return;
                if (msg.content.startsWith(prefix +'ct')) {
                 let args = msg.content.split(" ").slice(1);
                if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
            let ra3d = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(msg.author.avatarURL)
            .setDescription(`هل انت متاكد من انشاء شات كتابي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
            msg.channel.send(ra3d).then(message => {
             message.react('✅').then(r=>{
             message.react('❌').then(r=>{
             let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
             let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
             let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
             let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
            er.on("collect", r => {
            msg.channel.send("`تم الالغاء`")
            message.delete();
            })
            tt.on("collect", r => {
            msg.guild.createChannel(args.join(' '), 'text').then(ra3deyad => {
            channelCreated = ra3deyad.createdAt
                  const embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setImage()
              .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
              .addField(`اسم القناة`, `${ra3deyad.name}`, true)
              .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
              .addField(`نوع القناة`, `${ra3deyad.type}`, true)
              .addField(`متى انشأت القناة`, `${channelCreated}`)
             msg.channel.send({embed})
                message.delete();
            })
            })
            })
            })
            })
            }
            });






        function commandIs(str, msg){
            return msg.content.toLowerCase().startsWith('T!' + str);
        }

        function pluck(array) {
            return array.map(function(item) { return item['name']; });
        }

        function hasRole(mem, role) {
            if(pluck(mem.roles).includes(role)){
                return true;
            } else {
                return false;
            }

          }





        var servers = {};






        var q1 = "T!quran 1"

        var q2 = "T!quran 2"

        var q3 = "T!quran 3"

        var q4 = "T!quran 4"





        function play(connection, message) {
            var server = servers[message.guild.id];

            server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

            server.queue.shift();

            server.dispatcher.on("end", function() {
                if (server.queue[0]) play(connection, message);
                else connection.disconnect();
            });
        }



        //sowar


        Rocket.on("message", message => {

                                if (message.content === q1 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                  if (message.content === q2 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                    if (message.content === q3 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                      if (message.content === q4 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
                });
          }



            //outher_cummon


          if(message.content === "T!qstop" ) {
                          var servers = {};

                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

          }



        });

const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[ ] ${client.users.size}`)
    client.user.setStatus("idle")
});
client.on('ready', () => {
     client.user.setActivity("you",{type: 'WATCHING'});

});

client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
			}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getVideo(url);

			} catch (error) {
				try {
				    					    var fast = {};
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
					.setFooter(`${msg.guild.name}`)
					msg.channel.sendEmbed(embed1).then(message =>{

						message.delete(15000)

					});
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						})

						}catch(err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
						}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
				}
		}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `replay`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
	msg.channel.send({embed: embedNP})
  	 return handleVideo(video, msg, msg.member.voiceChannel);

	} else if (command === `queue`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`,
		time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
		eyad:`${video.thumbnails.high.url}`,
		best:`${video.channel.title}`,
		bees:`${video.raw.snippet.publishedAt}`,
		shahd:`${video.raw.kind}`,
		zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);
		queueConstruct.songs.push(song);
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
		fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
  	  const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
	serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
	}).then(love => {
		love.react('👍').then(r=>{
		love.react('👎').then(r =>{
		love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

		    ll.on("collect", r => {
		      yyyy[msg.guild.id].like++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
    cn.on("collect", r => {
	love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
	.setImage(`${song.eyad}`)
	.setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
	.setColor('#ff0000')
	.setTimestamp()
});
})
})
})
})
})
})
}
});


client.on('message' , message => {
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( playing this game with yourself :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(` :anger: \`Use : ${prefix}xo @player1 @player2\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });


    Rocket.login(process.env.BOT_TOKEN);






