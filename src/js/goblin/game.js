import { RenderBoard } from "./renderBoard";

export class Game {
  constructor(i) {
    this.renderer = new RenderBoard(document.body);
    this.hit = 0;
    this.miss = 0;
    this.iconPath = i;
    this.sumGoblin = 0;
  }

  startGame() {
    this.renderer.renderingBoard();
    this.renderer.goblinMove(this.iconPath);

    const board = document.querySelector(".board");
    const boxsHit = document.querySelector(".labelScoreGame__boxs_hit");
    const boxsMiss = document.querySelector(".labelScoreGame__boxs_miss");

    board.addEventListener("click", (e) => {
      const x = "Вы выйграли!!!";
      const y = "Вы проиграли (((";

      const hitrender = () => {
        const img = document.querySelector("img");
        if (img) {
          img.remove();
          this.hit++;
          boxsHit.textContent = this.hit;
        }
      };

      const missrender = () => {
        this.miss++;
        boxsMiss.textContent = this.miss;

        if (this.miss === 5) {
          this.renderer.finish();
        }
      };

      e.target.nodeName === "IMG" ? hitrender() : missrender();
    });

    const stop = setInterval(() => {
      if (this.sumGoblin - (this.hit + this.miss) != 0) {
        console.log("пропуск");
        this.miss += 1;
        boxsMiss.textContent = this.miss;
      }

      if (this.miss === 5) {
        this.renderer.finish();
        clearInterval(stop);
      }
      this.sumGoblin++;
    }, 1000);
  }
}
