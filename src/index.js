import "./css/style.css";
import { RenderBoard } from "./js/goblin/renderBoard";
import { Game } from "./js/goblin/game";
import Icon from "./img/goblin.png";

const RenderCoblinBoard = new RenderBoard(document.body);
const GameGoblin = new Game(document.body);

RenderCoblinBoard.renderingBoard();
RenderCoblinBoard.goblinMove(Icon);

GameGoblin.pointerHammer();
GameGoblin.start();
