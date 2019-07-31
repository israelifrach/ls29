interface IDrawable{
    draw():string;
}

abstract class Shape{
    constructor(){

    }
    abstract display(): string;
    abstract Area(): number;
    abstract Circumference(): number;
}

class Circle extends Shape{
    private xCor: number;
    private yCor: number;
    private Color: string;
    private Radius: number;

    constructor(xCor: number, yCor: number, Color: string, Radius: number){
        super();
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Radius = Radius;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Radius: ${this.Radius}`;
    }
    Area():number{
        return Math.PI*this.Radius*this.Radius;
    }
    Circumference():number{
        return 2*Math.PI*this.Radius;
    }
    
}

class Square extends Shape  implements IDrawable{
    private xCor: number;
    private yCor: number;
    private Color: string;
    private Length: number;

    constructor(xCor: number, yCor: number, Color: string, Length: number){
        super();
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Length = Length;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Length: ${this.Length}`;
    }
    Area():number{
        return this.Length*this.Length;
    }
    Circumference():number{
        return 4*this.Length;
    }
    draw():string{
        let _draw = '';
        for(let i = 0; i < this.Length; i++){
            for(let j = 0; j <this.Length; j++){
                if(i==0 || i==this.Length-1){
                    _draw+='*';
                }
                else if(j==0 || j==this.Length-1){
                    _draw+='*';
                }
                else{
                    _draw+=' ';
                }
            }
            _draw+='\n';
        }
        return _draw;
    }
}

class Rectangle extends Shape implements IDrawable{
    private xCor: number;
    private yCor: number;
    private Color: string;
    private Height: number;
    private Width: number;

    constructor(xCor: number, yCor: number, Color: string, Height: number, Width: number){
        super();
        this.xCor = xCor;
        this.yCor = yCor;
        this.Color = Color;
        this.Height = Height;
        this.Width = Width;
    }

    display():string{
        return ` X Cordinates: ${this.xCor}, 
        Y Cordinates: ${this.yCor}, 
        Color: ${this.Color}, 
        Height: ${this.Height},
        Width: ${this.Width}`;
    }
    Area():number{
        return this.Height*this.Width;
    }
    Circumference():number{
        return (2*this.Height)+(2*this.Width);
    }
    draw():string{
        let _draw = '';
        for(let i = 0; i < this.Height; i++){
            for(let j = 0; j <this.Width; j++){
                if(i==0 || i==this.Height-1){
                    _draw+='*';
                }
                else if(j==0 || j==this.Width-1){
                    _draw+='*';
                }
                else{
                    _draw+=' ';
                }
            }
            _draw+='\n';
        }
        return _draw;
    }

}

class Tester {
    public static test(): void {
        let shape1 :Shape;
     
        let num = getRandomNum(4);
         console.log(num)
        function getRandomNum(max): number {
            return Math.ceil(Math.random() * Math.floor(max));
          }
          switch (num) {
              case 1: {
                shape1 = new Circle( 1,  1, 'red', 1);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
                let diameter = shape1.Circumference()/Math.PI;
                console.log(diameter)
              }
              case 2: {
                shape1 = new Square( 1,  1, 'red', 1);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
              }
              case 3: {
                shape1 = new Rectangle( 1,  1, 'red', 1, 2);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
              }
          }
    }

}

function main(){
    Tester.test();
}
main();