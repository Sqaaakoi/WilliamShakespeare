import { ApplicationCommandOptionType, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";
import { ErrorHandler } from "../utils/error_handler.js";

@Discord()
export class Command {
  @Slash({name: "stfu", description: "Common users who should super glue their fucking assholes shut", dmPermission: true })
  async command(
    @SlashChoice({ name: "Boyetrash", value: "<@560205926758612994>" })
    @SlashChoice({ name: "Coderunner", value: "<@934178009664069632>" })
    @SlashChoice({ name: "Funtimes909", value: "<@652755888230236160>" })
    @SlashChoice({ name: "Lizzy Bo Bizzy Mc Skizzy", value: "<@846298981797724161>" })
    @SlashChoice({ name: "Festive", value: "<@958165110352928818>" })
    @SlashChoice({ name: "Spidgy", value: "<@552957652955693087>" })
    @SlashChoice({ name: "Duper Trooper", value: "<@609551301730369547>" })
    @SlashChoice({ name: "ඞ", value: "<@769708697731465256>" })
    @SlashChoice({ name: "Random Idiot", value: "<@1000867438369452072>" })
     
    @SlashOption({
      name: "user",
      description: "Common users who should shut the fuck up",
      required: false,
      type: ApplicationCommandOptionType.String,
    })
    user: string | undefined,
    interaction: CommandInteraction
  ): Promise<void> {
    try {
      interaction.reply({ content: `Shut the fuck up ${user ? user : "<@560205926758612994>"}, Please genuinely shut the fuck up stop talking please I'm fucking begging` });
    } catch (e) {
      await ErrorHandler(e, interaction);
    }
  }
}
