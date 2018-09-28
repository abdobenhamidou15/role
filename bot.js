const Discord = require('discord.js');
const client = new Discord.Client(); 


client.on('ready', () => { 
    console.log(`
    ------------------------------------------------------
    > Logging in...
    ------------------------------------------------------
    Name ${client.user.tag}
    In ${client.guilds.size} servers!
    ${client.channels.size} channels and ${client.users.size} users cached!
    I am logged in and ready to roll!
    LET'S GO!
    ------------------------------------------------------
    ------------------------------------------------------
    ------------------------------------------------------
    ------------------------[ abdo ]----------------------`);
  });


client.on("voiceStateUpdate", (message, new1) => {

  var channel = "450356320437141514";
  var role = "Black squad"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}

client.on("voiceStateUpdate", (message, new1) => {

  var channel = "450717457230069761";
  var role = "Online"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}
client.on("voiceStateUpdate", (message, new1) => {

  var channel = "433738932166066192";
  var role = "Voice"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}
client.on("voiceStateUpdate", (message, new1) => {

  var channel = "435510621618962442";
  var role = "Music 🎶"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}


client.on("voiceStateUpdate", (message, new1) => {

  var channel = "483682002151931935";
  var role = "Gay 🎀"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}
client.on("voiceStateUpdate", (message, new1) => {

  var channel = "435510792452833280";
  var role = "[MR] Squad🎤"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };

  } else if (o.voiceChannel && !n.voiceMove) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))



} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}

client.on("voiceStateUpdate", (message, new1) => {

  var channel = "471009087887507456";
  var role = "Music 🎵"
  set(message,new1,channel,role);
});

function set(o,n,channel,role){
  if (!o.voiceChannel && n.voiceChannel) {
    if (n.voiceChannelID == channel) {
        n.addRole(n.guild.roles.find("name", role));
    };


  } else if(o.voiceChannelID !== n.voiceMove && o.voiceChannel && n.voiceMove != null) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))




} else if (o.voiceChannel && !n.voiceChannel) {
    if (o.voiceChannelID == channel) {
        n.removeRole(n.guild.roles.find("name", role))
    }
}
}
}





client.login(process.env.BOT_TOKEN);
