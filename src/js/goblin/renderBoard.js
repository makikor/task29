export class RenderBoard {
  constructor(body) {
    this._body = body;
    this.randomaizer;
  }
  randomaizer;

  renderingBoard() {
    const board = document.createElement("div");
    this._body.classList.add("board");
    this._body.append(board);

    for (let i = 0; i < 4; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      board.append(newRow);
      for (let x = 0; x < 4; x++) {
        const col = document.createElement("div");
        col.classList.add("box");
        newRow.append(col);
      }
    }
    let labelScoreGame = document.createElement("div");
    labelScoreGame.classList.add("scoreLabel");
    labelScoreGame.innerText = `${0}`;
    this._body.lastElementChild.append(labelScoreGame);
  }

  goblinMove(Icon) {
    const boxs = this._body.querySelectorAll(".box");
    const imageGoblin = new Image();
    imageGoblin.src = Icon;
    imageGoblin.classList.add("icon_goblin");
    imageGoblin.setAttribute("alt", "goblin");

    const set = new Set();
    while (set.size < boxs.length) {
      set.add(Math.floor(Math.random() * (boxs.length - 0)));
    }

    this.randomaizer = [...set];
    let index = 0;
    let stopSetInterval = setInterval(() => {
      boxs[this.randomaizer[index]].append(imageGoblin);
      index++;
      if (index == this.randomaizer.length) {
        clearInterval(stopSetInterval);
      }
    }, 1000);
  }
}
