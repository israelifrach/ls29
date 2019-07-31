var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xCor, yCor, Color, Radius) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Radius = Radius;
        return _this;
    }
    Circle.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Radius: " + this.Radius;
    };
    Circle.prototype.Area = function () {
        return Math.PI * this.Radius * this.Radius;
    };
    Circle.prototype.Circumference = function () {
        return 2 * Math.PI * this.Radius;
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(xCor, yCor, Color, Length) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Length = Length;
        return _this;
    }
    Square.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Length: " + this.Length;
    };
    Square.prototype.Area = function () {
        return this.Length * this.Length;
    };
    Square.prototype.Circumference = function () {
        return 4 * this.Length;
    };
    Square.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.Length; i++) {
            for (var j = 0; j < this.Length; j++) {
                if (i == 0 || i == this.Length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.Length - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xCor, yCor, Color, Height, Width) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Height = Height;
        _this.Width = Width;
        return _this;
    }
    Rectangle.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Height: " + this.Height + ",\n        Width: " + this.Width;
    };
    Rectangle.prototype.Area = function () {
        return this.Height * this.Width;
    };
    Rectangle.prototype.Circumference = function () {
        return (2 * this.Height) + (2 * this.Width);
    };
    Rectangle.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.Height; i++) {
            for (var j = 0; j < this.Width; j++) {
                if (i == 0 || i == this.Height - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.Width - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Rectangle;
}(Shape));
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.test = function () {
        var shape1;
        var num = getRandomNum(4);
        console.log(num);
        function getRandomNum(max) {
            return Math.ceil(Math.random() * Math.floor(max));
        }
        switch (num) {
            case 1: {
                shape1 = new Circle(1, 1, 'red', 1);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
                var diameter = shape1.Circumference() / Math.PI;
                console.log(diameter);
            }
            case 2: {
                shape1 = new Square(1, 1, 'red', 1);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
            }
            case 3: {
                shape1 = new Rectangle(1, 1, 'red', 1, 2);
                console.log(shape1.display());
                console.log(shape1.Area());
                console.log(shape1.Circumference());
            }
        }
    };
    return Tester;
}());
function main() {
    Tester.test();
}
main();
