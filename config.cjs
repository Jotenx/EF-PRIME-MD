// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFUQmdLRXFGWHVnalZDYjVmU3pVeElyc25Rb0R3OHltQmd0SVlaQWZYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmhGN05TS09jNDNOdm1vMkpZcWdjdHdBeTBqMmorWjFwYjdTZW9LOWFGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSlAybG5GaFZLa1RtckFsTWVkZURFNmlTVkZ4Zk1NNEwwVGRLSVEvbWxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZUY0V3F6dXRDM0gybnRQeUNKOFV3VlMxREovTFpnOWlkZ2FPTlh6dmxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGTXl5cWg0TFVRMFJwOVVxWGF6UkF1Q3RWMytJNVBGS2J1OGtOeng3V2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxrWHJ5SEZqbDRxVCt4eDgrMi9GSnZpR1JVZStBNThPTmJhUDdsODlQM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0l3dVh5NDlINzdIOCs1bldCaFJyTkRkQlpwa3JpWmQyRThnMVFERUoxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHp1b09Ud3BETWFSZktTc3ZVMGFRRnlGTndQWWJFSHV4U0x2aC93WGd5az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5M0RweENnK1NKRFFTampkS0JOdFpFcS9mb0lTL0JKbWlrUXRqbjZ2Rm9Vck5nZU5tb3dURHRHL1BPaWp2MnV6OTRXU1J6cmlWT1ZIdndNZ0FNVWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJlUG5mZU5Ma2tqYXFQbkVEeVBrZXVEdmE5Qk9GbjB4S042OFA4T0JrSjlvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUSlo1UnBlNlFuV213U2F3TWVMakJBIiwicGhvbmVJZCI6IjU5M2UwNmE5LTA4Y2YtNGRhNy1hMDVlLWYzOWMxY2RhMWQ1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SEVlVWxOWHQ0L2RiQzRRWEc2RExYUHFUTkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickx4eW8rS0NpM3B5V2FLVDhocCtDMExJRmE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRaMUNEOENOIiwibWUiOnsiaWQiOiIyMzQ4MDYxOTU0NDM3OjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLL3A2SU1CRUlTVi9jQUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCdy9wTVE1S0w1bEd0YktjcFNxN0Y4NDBwYkh6eUtScitRQ21qdzcwekFvPSIsImFjY291bnRTaWduYXR1cmUiOiJJVmlNWFdoSUY4c2MrSXB3QjFjZjBDc1BSQkhyQXp4RnAzSm9qYzFYYUg0dU9DUXhGZFE3bndlK0NBa0ZOQkFtNXg5S0s2R291bUhmdVFndVovTTdCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN1FNdlR5cWt3UEdRUUdYKy9yMU1YT2pjREhNODFDblY5bU1yOUZuWDJnZWNkMnJHL1hqNzJvV1Z2Vk4wL2g1NUxoaEJOZnhIQW9VSUdQOCtQS2tLZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDYxOTU0NDM3OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFjUDZURU9TaStaUnJXeW5LVXF1eGZPTktXeDg4aWthL2tBcG84TzlNd0sifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY4ODExNjl9",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "private",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "Joey",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348061954437",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
