(function(e,o,a){"use strict";const n=a.findByStoreName("UserStore");let t;var r={onLoad:function(){t=o.registerCommand({name:"welcome",displayName:"Welcome",displayDescription:"Welcome a user to the server",description:"Welcome a user to the server",options:[{name:"user",description:"The user to be welcomed",type:6,required:!0,displayName:"User",displayDescription:"The user to be welcomed"}],execute:i,applicationId:"-1",inputType:1,type:1})},onUnload:function(){t()}};async function i(s,l){return{content:`Hello ${`<@${(await n.getUser(s[0].value)).id}>`}

# Welcome to the NoeNoe Zone #

I am **Zinth**, one of the server's fellow greeters

Try looking around <#1086966996907868180> and then please visit <#1092225397841743992>, if you want try giving yourself a role in <#1087075937205616700>

> Have something to talk about? visit <#1086965483317776456> and say Hi there *(Probably some guy will say Hi back)*

> If your an **artist**, check out <#1086965483317776457> for a <#1086965483317776456> chat experience but for **artists exclusive**

> You want to talk about **Blue Archive** stuff? visit <#1086993107268149288> and talk about why the Sweep feature is god sent
- *Have a opinion about the **Blue Archive Anime**? we have <#1226567377035198577> thread for that* 

There are many channels and voice channels to explore feel free to interact with them

On behalf of the entire Noe Noe Zone team, ***Welcome Aboard \u{1FAE1}***`}}return e.default=r,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta.commands,vendetta.metro);
