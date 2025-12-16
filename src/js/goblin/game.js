export class Game {
  constructor(body) {
    this._body = body;
  }

  pointerHammer() {
    const element = this._body;
    element.addEventListener("mouseover", () => {
      element.classList.add("custom");
    });
  }

  start() {
    let hit = 0;
    let miss = 0;
    this._body.addEventListener("click", (e) => {
      let labelScoreGame = document.querySelector(".scoreLabel");
      e.target.nodeName == "IMG" ? (hit += 1) : (miss += 1);
      check(labelScoreGame, hit, miss);
    });

    function check(labelScoreGame, hit, miss) {
      labelScoreGame.innerText = `${hit}`;
      if (hit == 5) {
        labelScoreGame.innerText = "Победа!!!";
      } else if (miss == 5) {
        labelScoreGame.innerText = "Проигрыш(((";
      }
    }
  }
}
