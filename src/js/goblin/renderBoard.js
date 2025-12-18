export class RenderBoard {
  constructor(body) {
    this._body = body;
  }

  renderingBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
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
    labelScoreGame.innerHTML = `
      <div class="labelScoreGame__boxs">
        <div class="labelScoreGame__boxs_hit">0</div>
      </div>
      <div class="labelScoreGame__boxs" >
        <div class="labelScoreGame__boxs_miss">0</box>
      </div>
      `;

    labelScoreGame.classList.add("labelScoreGame");
    this._body.append(labelScoreGame);
  }

  goblinMove(Icon) {
    const boxs = this._body.querySelectorAll(".box");
    const imageGoblin = new Image();
    imageGoblin.src = Icon;
    imageGoblin.classList.add("icon_goblin");
    imageGoblin.setAttribute("alt", "goblin");

    function random(min, max) {
      return Math.floor(Math.random() * (max - min));
    }

    let previousIndex;

    setInterval(() => {
      let randomIndex;
      do {
        randomIndex = random(0, boxs.length);
      } while (previousIndex !== undefined && randomIndex === previousIndex);
      boxs[randomIndex].append(imageGoblin);
      previousIndex = randomIndex;
    }, 1000);
  }
}
