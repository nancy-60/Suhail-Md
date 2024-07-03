const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="pelumifrost@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Abuja";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/64KBVNWDMXWQJ1";
global.website=process.env.GURL || "https://wa.me/message/64KBVNWDMXWQJ1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347054603167";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078595608";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_26_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvZU1WSDhrSmZ3cUlDNXRURTlVNElRTXJFQzVlL1JvRmV6YXdLdlJtSGc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTQ2MDMxNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI5NDM3MUI3QzdGMDc1RTIwODQ3QjdGQTk2Njk3QjAzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDA0OTE3OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTQ2MDMxNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIyMUEyRkUyNUNGNEUwRTVDRUIyNUYxRkIzRjk2Q0NBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDA0OTE4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBcHRwUmQ1dFE5V3FCenJFN3Jyb2t3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyNzBjYzNiLTAzZDItNDlmYi05ZmE4LTAxYmE1Y2Y4ZDNkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAxMTUsXG4gICAgICA5OSxcbiAgICAgIDY4LFxuICAgICAgMjI1LFxuICAgICAgMjQwLFxuICAgICAgMjAyLFxuICAgICAgNTUsXG4gICAgICA5MixcbiAgICAgIDM1LFxuICAgICAgMTIzLFxuICAgICAgMyxcbiAgICAgIDE2OCxcbiAgICAgIDI1NCxcbiAgICAgIDgsXG4gICAgICA3MSxcbiAgICAgIDI0MyxcbiAgICAgIDEyMCxcbiAgICAgIDczLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMSxcbiAgICAgIDE3MCxcbiAgICAgIDIzMixcbiAgICAgIDE1OCxcbiAgICAgIDE2NSxcbiAgICAgIDQxLFxuICAgICAgMjMsXG4gICAgICAyMjAsXG4gICAgICAyMzUsXG4gICAgICA4NSxcbiAgICAgIDExNyxcbiAgICAgIDUzLFxuICAgICAgMTI3LFxuICAgICAgMzIsXG4gICAgICAxOSxcbiAgICAgIDI0OCxcbiAgICAgIDM5LFxuICAgICAgMTg1LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTZINzE0R0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTQ2MDMxNjc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA3MjY3MzI5NTU3MDg6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQcmluY2UgVWRvaFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qU3JJVUhFSlM4bDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjdKQVovS3lMN29FeVZtbzR4NEpianpyZ3dXUzVJcWJUTUdOQjBWWUpDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNTlBoVTdoK3lGcXFmTGltLzdNNituSTdHbkdnSnZjNWhyRnlBVDNrRTk4aWJrVEkzWXRLd3JhbG05TTh5NHc1bVZoR2paaVpNSDAyaC80cUQ3b0tBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZYWI0aUtYVDJjQnRtS21mN2E0anFCQTRqSVIwQ2hubmtJMXRlVW9HcmxrcVppa1VidVZHaHdJWjRSMlRwTUJQRVdWSmFWdmVxbHRUOGNlSDdBVmpEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDU0NjAzMTY3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNDkxNzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCeE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJ4Ty5qc29uIjogIntcImtleURhdGFcIjpcInl2VCt1N2txVHZtSUtRUUUycUk3RkFnTVlacm1odFc2bGtrTEZrbUw4aXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5MDI2NTQxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDQ5MTgwODQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Frosby bot",
  ownername:process.env.OWNER_NAME|| "Pelumifrost",


  : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	requFro; })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
