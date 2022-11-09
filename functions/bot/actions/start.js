const { getUser } = require('../components/helper')
const { createFriendship } = require('../components/aura')

module.exports = async ctx => {
  const { id, isBot, name } = getUser(ctx.from)

  if (isBot) {
    return ctx.reply(`Sorry I only interact with humans!`)
  }

  try {
    await createFriendship(name, "Life-Bot")
  } catch (e) {
    return ctx.reply(`Error occured`)
  }

}