export class Game {
  constructor() {
    this.board = document.querySelector(".board");
    if (!this.board) {
      return;
    }
    this.timeoutId = null;
    this.startMonitoring();
  }

  startGame() {
    let hit = 0;
    let miss = 0;

    document.querySelector(".board").addEventListener("click", (e) => {
      let boxsHit = document.querySelector(".labelScoreGame__boxs_hit");
      let boxsMiss = document.querySelector(".labelScoreGame__boxs_miss");

      checkClicks(e);

      function checkClicks(e) {
        e.target.nodeName == "IMG" ? hitrender() : missrender();
        function hitrender() {
          document.querySelector("img").remove();
          boxsHit.textContent = `${(hit += 1)}`;
          if (boxsHit.textContent == 5) {
            sbros("победили!!!");
          }
        }
        function missrender() {
          boxsMiss.textContent = `${(miss += 1)}`;
          if (boxsMiss.textContent == 5) {
            sbros("проиграли (((");
          }
        }

        function sbros(text) {
          boxsHit.textContent = `${(hit = 0)}`;
          boxsMiss.textContent = `${(miss = 0)}`;
          setTimeout(function () {
            alert(`Вы ${text} \nСыграем еще раз?`);
          }, 300);
        }
      }
    });
  }

  startMonitoring() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      alert(`Вы пропустили 5 гоблинов подряд. \nСыграем еще раз?`);
      document.querySelector(".labelScoreGame__boxs_hit").textContent = 0;
      document.querySelector(".labelScoreGame__boxs_miss").textContent = 0;
    }, 5000);

    document
      .querySelector(".board")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.startMonitoring();
  }
}
