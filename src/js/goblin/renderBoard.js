export class RenderBoard {
  constructor(body) {
    this._body = body;
    this.timer = null;
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
        <div class="labelScoreGame__boxs_miss">0</div>
      </div>
    `;

    labelScoreGame.classList.add("labelScoreGame");
    this._body.append(labelScoreGame);
  }

  goblinMove(iconPath) {
    const boxs = this._body.querySelectorAll(".box");
    const imageGoblin = new Image();
    imageGoblin.src = iconPath;
    imageGoblin.classList.add("icon_goblin");
    imageGoblin.setAttribute("alt", "goblin");

    function random(min, max) {
      return Math.floor(Math.random() * (max - min));
    }

    let previousIndex;

    this.timer = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = random(0, boxs.length);
      } while (previousIndex !== undefined && randomIndex === previousIndex);
      boxs[randomIndex].append(imageGoblin);
      previousIndex = randomIndex;
    }, 1000);
  }

  finish(i) {
    clearInterval(this.timer);
    const img = document.querySelector("img");
    if (img) {
      img.remove();
    }
    let resultGame = document.createElement("div");
    resultGame.classList.add("resutltGame");
    resultGame.innerHTML = `
      <div id="modalOverlay" class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <h3>Игра окончена!</h3>
          </div>
        </div>
      </div>
    `;
    this._body.append(resultGame);
    resultGame.addEventListener("click", () => {
      location.reload();
    });
  }
}
