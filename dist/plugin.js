(function(n,d){"use strict";const e=n.findByProps("openModalLazy"),r=d.addCommand({name:"undefined",description:"Crash your discord client",args:[{name:"undefined",type:"string",required:!1}],handler:()=>{e.openModal(()=>{throw new Error})}});var o={onUnload(){r()}};return o})(cumcord.modules.webpack,cumcord.commands);
