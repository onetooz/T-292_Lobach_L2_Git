function bingo(ticket, win) {
  let miniWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    let text = ticket[i][0];
    let code = ticket[i][1];

  for (let j = 0; j < text.length; j++) {
      if (text.charCodeAt(j) === code) {
        miniWins++;
        break; 
      }
    }
  }

  return miniWins >= win ? "Winner!" : "Loser!";
}