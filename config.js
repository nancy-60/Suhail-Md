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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347065465047";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347065465047";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ZmFtc1Jlb3hyVC9IbHVBZkt0ZU5oS2ZoOUM4ZVJsazVONGNCeTM2RVVVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjU0NjUwNDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEzMDczOTk4QkM4MTk1M0VBQjA4QjExQzMwMzUzNTQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkyOTEwN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3TmthTlJnM1NSV2VYOUd6blRKcGFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRlMzAyM2UzLWQwMzYtNDBhNS1iMTBjLWZhNWI2MjZmZDM4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxNTcsXG4gICAgICAxNzMsXG4gICAgICA4MyxcbiAgICAgIDE4MixcbiAgICAgIDE1NixcbiAgICAgIDIxMSxcbiAgICAgIDg3LFxuICAgICAgMTY0LFxuICAgICAgMTUwLFxuICAgICAgMTUsXG4gICAgICA3NSxcbiAgICAgIDczLFxuICAgICAgOTEsXG4gICAgICAxNixcbiAgICAgIDU0LFxuICAgICAgMzAsXG4gICAgICA1NixcbiAgICAgIDI0NSxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICA2MyxcbiAgICAgIDE5NyxcbiAgICAgIDE4OSxcbiAgICAgIDIyLFxuICAgICAgMTc1LFxuICAgICAgMjEwLFxuICAgICAgMjI2LFxuICAgICAgMTMsXG4gICAgICA1NixcbiAgICAgIDEzOSxcbiAgICAgIDEzMCxcbiAgICAgIDEzMCxcbiAgICAgIDI5LFxuICAgICAgMyxcbiAgICAgIDUzLFxuICAgICAgMTAzLFxuICAgICAgMTk4LFxuICAgICAgMzEsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzJKWjdRS0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjU0NjUwNDc6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgwMzE2MTIzMzU3MzY4OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IUDdOMEhFTW1XemJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiajZhS3B5ZlN5Wi8xaE43MEliNXE4dlZJOGtjWlk1SUFXaTUxd091NzBtUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNZEU4Z0J0TUVoK3NVN3JMQUR6eGEzeFFtUjdyS3FDb0xLWklrV091M1loZHFFQ045dkFnK1hFT1ZVNDFDSnRRZ090KzVwM2hrbEpGZVBJelBUS2VCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSTlA2b1dQTVo3WDNTYWF0R3NzdWVWY0JJZzM4OWRSQ1UrK2pGbHNxMWxxODJnYzVnQkN5RXRGbzNkazlHTnQzb3ZTNDlNbjFkaFZ2cmc3THJMNUFBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY1NDY1MDQ3OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MjkxMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCY2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJjai5qc29uIjogIntcImtleURhdGFcIjpcIk85QWZMUmN5bEJmYmZLNFFUemxNTUR1NmFoMkJ2QWxveWY0QU9NL09EY0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3NTg2Mjk5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


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
