export class Game {
  constructor(body) {
    this._body = body;
  }

  start() {
    let hit = 0;
    let miss = 0;
    document.querySelector('.board').addEventListener("click", (e) => {
      let boxsHit = document.querySelector(".labelScoreGame__boxs_hit");
      let boxsMiss = document.querySelector(".labelScoreGame__boxs_miss");

      checkClicks (e);

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
          setTimeout(function(){alert(`Вы ${text} \nСыграем еще раз?`)}, 300)
        }
      }
    });
  }
}
