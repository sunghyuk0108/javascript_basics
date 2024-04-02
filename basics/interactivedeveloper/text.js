import { pointCircle } from "./utils.js";

// export로 javascript 모듈에서 값을 내보냄. 동적 가져오기를 사용해서 다른 프로그램으로 가져올 수 있다.
export class Text {
    constructor() {
        this.canvas = document.createElement('canvas');
        //this.canvas.style.position = 'absolute';
        //this.canvas.style.left = '0';
        //this.canvas.style.top = '0';
        //document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
    }

    setText(str, density, stageWidth, stageHeight) {
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;

        const myText = str;
        const fontWidth = 700;
        const fontSize = 800;
        const fontName = 'Hind';

        this.ctx.clearRect(0, 0, stageWidth, stageHeight);
        //clearRect() 메서드는 사각형 영역의 픽셀을 투명한 검정색으로 설정하여 지우기 위해 사용한듯
        this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
        this.ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
        this.ctx.textBaseline = "middle";
        // textBaseLine은 Canvas 2D API의 속성은 텍스트를 그릴 때 사용되는 현재 텍스트 기준선을 지정함.
        const fontPos = this.ctx.measureText(myText);
        //measureText 이 메서드는 측정된 텍스트에 대한 정보(예: 너비)가 포함된 개체를 CanvasRenderingContext2D.measureText() 반환함.
        this.ctx.fillText(
            myText,
            (stageWidth - fontPos.width) / 2,
            fontPos.actualBoundingBoxAscent +
            fontPos.actualBoundingBoxDescent + 
            ((stageHeight - fontSize) / 2)
        );
        //화면의 중간에 올 수 있게 화면의 w값에서 measureText() 메서드로 측정된 텍스트의 w값을 빼고 그 값에서 2를 나눔
        return this.dotPos(density, stageWidth, stageHeight);
    }

    dotPos(density, stageWidth, stageHeight){
        const imageData = this.ctx.getImageData(
            0, 0,
            stageWidth, stageHeight
        ).data;
        // getImageData() 메서드는 캔버스의 지정된 부분의 기본 픽셀 데이터를 나타내는 개체를 반환함.
        
        const particles = [];
        let i = 0;
        let width = 0;
        let pixel;

        for (let height = 0; height < stageHeight; height += density){
            ++i;
            const slide = (i % 2) == 0;
            width = 0;
            if (slide == 1){
                width += 6;
            }
        
            for (width; width < stageWidth; width += density) {
                pixel = imageData[((width + (height * stageWidth)) * 4) - 1];
                if (pixel != 0 && 
                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight) {
                        particles.push({
                            x: width,
                            y: height,
                        });
                }
            }

        }

        return this.getOutLine(particles, density);
    }

    getOutLine(particles, density){
        let minX = particles[0].x;
        let maxX = particles[0].x;
        let minY = particles[0].y;
        let maxY = particles[0].y;

        for (let i = 1; i < particles.length; i++){
            const item = particles[i];
            minX = Math.min(minX, item.x);
            maxX = Math.max(maxX, item.x);
            minY = Math.min(minY, item.y);
            maxY = Math.max(maxY, item.y);
        }
        const gap = density * 2;
        const distX = maxX - minX;
        const xTotal = distX / gap | 0;
        const distY = maxY - minY;
        const yTotal = distY / gap | 0;

        const outline = [];
        const XArray = [];
        for (let i = 0; i < xTotal; i++){
            const tx = i * gap + minX;
            XArray[i] = [];

            for(let j = 0; j < yTotal; j++) {
                const ty = j * gap + minY;

                for (let k = 0; k < particles.length; k++){
                    const item = particles[k];
                    if(pointCircle(item.x, item.y, tx, ty, gap)) {
                        XArray[i].push({
                            x: tx,
                            item, 
                        });
                    }
                }
            }
        }
        let check = 0;
        let prevY;
        for (let i =0; i < XArray.length; i++){
            check = 0;

            for(let j = 0; j < XArray[i].length; j++){
                const pos = XArray[i][j];

                if(check == 0){
                    prevY = pos.item.y;
                    outline.push({
                        x: pos.x,
                        minY: pos.item.y,
                        maxY: pos.item.y,
                    });

                    check = 1; 
                } else if(check == 1) {
                    if (pointCircle(pos.x, pos.item.y, pos.x, prevY, gap)){
                        const cur = outline[outline.length - 1];
                        cur.minY = Math.min(cur.minY, pos.item.y);
                        cur.maxY = Math.max(cur.maxY, pos.item.y);
                        check = 1;
                        prevY = pos.item.y;
                    } else {
                        check = 2;
                    }
                } else if(check == 2) {
                    prevY = pos.item.y;
                    outline.push({
                        x: pos.x,
                        minY: pos.item.y,
                        maxY: pos.item.y,
                    });
                    check = 1;
                }
            }
        }
        return {
            particles,
            minX,
            maxX,
            minY,
            maxY,
            outline,
        }
    }
}
