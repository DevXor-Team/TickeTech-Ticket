function i(e,t){const n=r();return(i=function(e,t){return e-=164,n[e]})(e,t)}function r(){const e=["setFooter","17049aFyRmy","UserAlread","addFields","ort_","options","eplies.yam","getUser","fetch","setTitle","Danger","1509570iDGbmE","yInChannel","setTimesta","2836260vlZFRC","get","wZvYQ","FieldName2","permission","./Config/R","or ID","cache","onfig.yaml","FieldName1","load","guild","js-yaml","794772chwUds","4jxCEdv","Success","roles","Replies","Color","avatarURL","some","NoUPermiss","4 & [DevXo","ed2JeXN.pn","username","ViewChanne","Overwrites","Select Use","editReply","mbeds.yaml","allow","add-user","is ticket","discord.js","setColor","ion","imgur.com/","FieldName3","readFileSy","utf-8","46nZwKhM","deferReply","user to th","channel","includes","https://i.","13252800arpaIv","NotATicket","7662SRkPet","edit","Owners","user","setThumbna","has","3358560MktBFE","r Mention ","members","Secondary","TicketSupp","784fZRKUM","./Config/C","Add other ","uttons.yam","AddUser","Title","t by Sohai"];return(r=function(){return e})()}const c=i,{ActionRowBuilder:e,ButtonBuilder:t,ButtonStyle:n,PermissionFlagsBits:u,EmbedBuilder:m}=(!function(){for(var e=i,t=r();;)try{if(502669==+parseInt(e(167))*(parseInt(e(220))/2)+parseInt(e(180))/3+-parseInt(e(194))/4*(-parseInt(e(177))/5)+-parseInt(e(228))/6*(parseInt(e(239))/7)+parseInt(e(234))/8+-parseInt(e(193))/9+-parseInt(e(226))/10)break;t.push(t.shift())}catch(e){t.push(t.shift())}}(),require(c(213))),p=require("pro.db"),a=require(c(192)),s=require("fs"),f=a[c(190)](s[c(218)+"nc"]("./Config/E"+c(209),"utf-8")),h=a.load(s[c(218)+"nc"](c(240)+c(188),"utf-8")),o=a[c(190)](s.readFileSync("./Config/B"+c(242)+"l",c(219))),y=a[c(190)](s.readFileSync(c(185)+c(172)+"l",c(219)));let l={RED:n[c(176)],GREEN:n[c(195)],BLUE:n.Primary,GREY:n[c(237)]};module.exports={name:c(211),description:c(241)+c(222)+c(212),options:[{name:c(231),description:c(207)+c(235)+c(186),type:6,required:!0}],execute:async function(e,t){const n=c,i={wZvYQ:n(231)};await t[n(221)]();var r=t[n(231)].id;if((h[n(230)]||[])[n(224)](r)){const a=t[n(191)].id,s=t.channel.id,o=t[n(171)][n(173)](i[n(182)]),l=(await t[n(191)][n(236)][n(174)](o.id),await p[n(181)](n(238)+n(170)+a)||[]),d=l[n(200)](e=>t.member[n(196)][n(187)][n(233)](e));if(!d)return t[n(208)]({content:y[n(197)][n(201)+"ion"],ephemeral:!0});if(!(await p[n(181)]("TicketInfo_"+a)||[]).find(e=>e.ChannelID===s))return t[n(208)]({content:y[n(197)][n(227)],ephemeral:!0});r=t[n(223)].permissionOverwrites[n(187)][n(181)](o.id);if(r&&r[n(210)][n(233)](u[n(205)+"l"]))return t[n(208)]({content:y[n(197)][n(168)+n(178)],ephemeral:!0});await t[n(223)][n(184)+n(206)][n(229)](o.id,{ViewChannel:!0,SendMessages:!0,ReadMessageHistory:!0});r=(new m).setAuthor({name:o[n(204)],iconURL:o[n(199)]()})[n(175)](f[n(243)][n(164)])[n(232)+"il"](o[n(199)]())[n(214)](f[n(243)][n(198)])[n(169)]({name:f.AddUser[n(189)],value:"<@"+t[n(231)].id+">",inline:!0},{name:f[n(243)][n(183)],value:"<@"+o.id+">",inline:!0},{name:f[n(243)][n(217)],value:"<#"+s+">",inline:!0})[n(166)]({text:"© Copyrigh"+n(165)+"b 2022-202"+n(202)+"r-Team]",iconURL:n(225)+n(216)+n(203)+"g"})[n(179)+"mp"]();await t[n(208)]({embeds:[r]})}else await t.editReply({content:y[n(197)][n(201)+n(215)]})}};