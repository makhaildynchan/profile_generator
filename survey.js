const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {};
rl.question("What do you think of Node.js? ", (answer) => {
  profile["nodeOpinion"] = answer;
  // TODO: Log the answer in a database
  rl.question(
    `What's your name? Nicknames are also acceptable :)`,
    (answer) => {
      profile["name"] = answer;
      rl.question(`What's an activity you like doing?`, (answer) => {
        profile["favActivity"] = answer;
        rl.question(`What do you listen to while doing that?`, (answer) => {
          profile["favMusic"] = answer;
          rl.question(
            `Which meal is your favourite (eg: dinner, brunch, etc.)`,
            (answer) => {
              profile["favMeal"] = answer;
              rl.question(
                `What's your favourite thing to eat for that meal?`,
                (answer) => {
                  profile["favFood"] = answer;
                  rl.question(
                    `Which sport is your absolute favourite?`,
                    (answer) => {
                      profile["favSport"] = answer;
                      rl.question(
                        `What is your superpower? In a few words, tell us what you are amazing at!`,
                        (answer) => {
                          profile["superPower"] = answer;

                          console.log(
                            "Thank you for your valuable feedback. Here is your profile:"
                          );
                          console.log(profile);
                          rl.close();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    }
  );
});