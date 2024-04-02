class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
    }
    // constructor에서는 일반적으로 this를 액세스함.
    innerRGB(){
        const {r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex(){
        const {r, g, b} = this;
        return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}

//class 문의 장점은 한 그룹에 메서드를 묶을 수 있음
//rgba(인자값 할당) 처럼 메서드를 효과적으로 사용할 수 있음.

const tomato = new Color(34, 56, 155, "tomato");
const ex = new Color(1,2,3);
console.log(ex.innerRGB())
//new 키워드를 쓰면 this는 개벽 객체를 참조함.
document.body.style.backgroundColor = tomato.rgba();

console.log(tomato.hex())
