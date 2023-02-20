function level1() {
    setCookie("score", 0);
    setCookie("scherm", "level1");
}

function level2() {
    setCookie("score", 0);
    setCookie("scherm", "level2");
}


window.onload = function() {
    var h1 = document.getElementById("random-text");
    var sentences = [
      "You were so close, yet so far... like a parking spot when you're already late for work.",
      "You're not a failure, you're just a winner in training.",
       "You're not a loser, you're just a winner who hasn't won yet.",
      "Looks like the victory train left without you. Next stop: Loserville.",
      "Don't worry, losing builds character. Or so they say...",
      "The good news is that you can always blame lag. The bad news is that no one will believe you.",
      "You know what they say: if at first you don't succeed, keep hitting that 'try again' button!",
      "Better luck next time. Or, you know, any time after that too would be nice.",
      "Looks like someone forgot to bring their A-game. And their B-game. And their C-game...",
      "Don't feel bad, even the best players need a break sometimes. A really long break.",
      "Well, that was embarrassing. But hey, at least you can only go up from here!",
      "It's not about winning or losing, it's about how many times you rage-quit in between.",
      "We don't want to say you're bad at this game, but maybe try switching to something a little less challenging... like tic-tac-toe.",
      "On the bright side, at least you can now focus on your day job instead of this game.",
      "Looks like you'll have to settle for second-to-last place. Congrats on not being the worst, we guess?",
      "We'll give you a participation trophy, but only if you promise not to throw it at us in frustration.",
      "Well, you may not have won the game, but you did win the award for 'most creative use of expletives.'",
      "At least you're consistent. Consistently losing, that is.",
      "If you're looking for a silver lining, we hear the concession stand has some pretty good nachos.",
      "We're not saying you need to go back to gaming kindergarten, but it might be worth considering.",
      "Remember, it's not the end of the world. It's just the end of your winning streak. And possibly your dignity.",
      "You know what they say: practice makes perfect. And by 'practice,' we mean 'losing.'",
      "Looks like you need more practice - or a miracle.",
      "You just lost to a bunch of pixels. How does that feel?",
      "It's okay, you can always blame lag, your keyboard, or your cat.",
      "That was a valiant effort. Unfortunately, the game requires skill too.",
      "Don't worry, you can always switch to a less violent game, like Animal Crossing.",
    ];
    var randomIndex = Math.floor(Math.random() * sentences.length);
    h1.innerText = sentences[randomIndex];

    let deadsound = new Audio('sounds/dood.mp3');
    deadsound.volume = 0.5;
    deadsound.play();
  }
  
  
  
  
  