const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
const UP = "*⦁═Queen 👸 Alexa═⦁*"

Neotro.addCommand({pattern: 'list ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1HHuo-y-f9nhT8h4f8ObwSIKLxYmnRqiX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'alive2 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1HHuo-y-f9nhT8h4f8ObwSIKLxYmnRqiX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'xvo3 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1sUEx_4fnmGZzK5pOdxiNNncnI4juTPN_/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
Neotro.addCommand({pattern: 'xvo4 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/18MHArl0OH2sLfHmYUbCVoctcU0TF1wYe/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo5 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/181DjWZZIJ-gm32T_u5vM35RlHfVySQMX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo6 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/1gE5xg5txJsaHCHZKpXK2uRFvLMbh8CMv/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));

Neotro.addCommand({pattern: 'xvo7 ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
await message.client.sendMessage(message.jid,UP,MessageType.text);
var respoimage = await axios.get(`https://drive.google.com/file/d/181DjWZZIJ-gm32T_u5vM35RlHfVySQMX/view`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, quoted: message.data});

    }));
