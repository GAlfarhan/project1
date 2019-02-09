'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  // my work starts here
  // # Bot will finish up the song the last verse will be delayed to add an effect to the song.
  robot.hear(/Rapunzel, Rapunzel, let down your hair/i, (res) => {
    res.send('so that I may climb thy golden stair!');
    setTimeout(() => res.send('Please, before I get eaten by a bear'), 6000)
  })


  // # Bit will return a Random Quote when askes
  const quotes = [
    'It does not matter how slowly you go as long as you do not stop. – Confucius',
    'All our dreams can come true, if we have the courage to pursue them. – Walt Disney',
    'Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy',
    'Other times we come downstairs feeling sunny already. Those are great days!',
    'Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.'
  ]

  robot.hear(/quote of the day/i, (res) => {
    res.reply(res.random(quotes))
  })


  // # If you send "i love you" more than 5 times 
  robot.respond(/I love you/i, (response) => {
    // Get number of botlove had (coerced to a number).
    const loveHad = +robot.brain.get('botlove') || 0

    if (loveHad > 4) {
      response.reply('That is too much love')
      return
    }

    response.reply('Awww, Thank you!')
    robot.brain.set('botlove', loveHad + 1)
  })

}

