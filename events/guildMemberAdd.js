const { EmbedBuilder, WebhookClient } = require("discord.js");
const client = require('..');
const webhookURL = "Some URL Here" // Webhook URL Where you want bot to send message

client.on('guildMemberAdd', member => {
    const guild = client.guilds.cache.get("GuildID")

    const webhookClient = new WebhookClient({ url: webhookURL });

    const welcomeEmbed = new EmbedBuilder()
        .setTitle(`Some Title Here`)
        .setDescription(`Some Description Here`)
        .setColor("ColorHexCode")
        .setFooter({
            text: `Footer Text Here`,
            iconURL: `FooterIconURL`
        })
        .setThumbnail(`ThumbnailURL`)
        .setTimestamp()

        webhookClient.send({
            content: `Webhook Message Content`,
            username: `Webhook Username`,
	        avatarURL: `Webhook Avatar`,
            embeds: [welcomeEmbed],
        });
});