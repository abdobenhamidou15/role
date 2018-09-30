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




const adminww = "--";
client.on('message', message => {
if (message.content === adminww + 'idle') {
     if (message.author.id !== '406192153979518976') return ;
     client.user.setStatus("idle")
}
});

const adminabdo = "--";
client.on('message', message => {
if (message.content === adminabdo + 'online') {
     if (message.author.id !== '406192153979518976') return ;
     client.user.setStatus("online")
}
});

const adminben = "--";
client.on('message', message => {
if (message.content === adminben + 'dnd') {
     if (message.author.id !== '406192153979518976') return ;
     client.user.setStatus("dnd")
}
});



client.on("voiceStateUpdate", (message, new1) => {

    var channel = "471009091003613184";
    var role = "💎 In the voice"
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

    var channel = "481461458899566593";
    var role = "🌠 In the voice"
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

    var channel = "471009088529104906";
    var role = "🌹 In the voice"
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

  var channel = "471009088843808781";
  var role = "🍃 In the voice"
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

  var channel = "471009084833792011";
  var role = "🍆 In the voice"
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

  var channel = "471009090378661918";
  var role = "🐙 In the voice"
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

  var channel = "471009085538566145";
  var role = "Music 🎵"
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

  var channel = "471009085760995329";
  var role = "Music 🎵"
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

client.login(process.env.BOT_TOKEN);
