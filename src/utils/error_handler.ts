import { logger } from "../main.js";
import { EmbedBuilder } from "discord.js";

export function ErrorHandler(e: any, interaction: any) {
  interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`An error occurred!`)
          .setDescription(`\`${e.message || e}\``)
          .setColor("#eb6f92")
          .setTimestamp(),
      ],
    })
    .then((msg: any) => {
      setTimeout(async function () {
        msg.delete();
      }, 15000);
    });
  logger.error(
    e.stack,
    `User: '${interaction.user?.username}' - '${interaction.user?.id}'`
  );
  return;
}