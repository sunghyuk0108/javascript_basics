import { Text } from "./text.js";
import { BounceString } from "./bouncestrings.js";

export class Visual {
  constructor() {
    this.text = new Text();

    this.strings = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 100,
    };

    document.addEventListener("pointermove", this.onMove.bind(this), false);
    //bind() 메소드가 호출되면 새로운 함수를 생성한다. 받게되는 첫 인자의 value로는 this키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공된다.
  }

  show(stageWidth, stageHeight) {
    this.pos = this.text.setText("❤︎", 5, stageWidth, stageHeight);
    this.strings = [];

    for (let i = 0; i < this.pos.outline.length; i++) {
      this.strings[i] = new BounceString({
        x1: this.pos.outline[i].x,
        y1: this.pos.outline[i].minY,
        x2: this.pos.outline[i].x,
        y2: this.pos.outline[i].maxY,
      });
    }
  }

  animate(ctx) {
    for (let i = 0; i < this.strings.length; i++) {
      this.strings[i].animate(ctx, this.mouse.x, this.mouse.y);
    }
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}
