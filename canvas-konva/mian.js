function SupportBoard(option) {
    console.log(option);
    this.init(option);
};

SupportBoard.prototype = {
    init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || w;
        this.h = option.h || 0;
        this.circle = new Konva.Circle({ //圆
            x: 10,
            y: 10,
            radius: 10,
            // fill: 'black',
            stroke: 'black',

        });
        this.text = new Konva.Text({

        });
        this.arrow = new Konva.Arrow({ //箭头带方向
            // x:0,
            // y:0,
            points: [10, 10, 100, 10],
            stroke: 'black',
            fill: 'black',
            dash: [5, 5], //虚线
            tension: 1,
            pointerLength: 10,
            pointerWidth: 10 
        });
        console.log(this.arrow);
        this.arc = new Konva.Arc({ //圆弧
            x: 100,
            y: 100,
            innerRadius: 40,
            outerRadius: 80,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 5,
            angle: 60,
            rotationDeg: -120
        });
        this.box = new Konva.Rect({ //矩形
            x: 100,
            y: 0,
            width: 100,
            height: 50,
            // fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            // draggable: true
            name: 'aaaa', //可以自定义参数带入，用于事件获取
            data: '123', //可以自定义参数带入，用于事件获取
        });
        this.box2 = new Konva.Rect({ //矩形
            x: 103,
            y: 0,
            width: 100,
            height: 50,
            // fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 1,
            // draggable: true
            name: 'aaaa', //可以自定义参数带入，用于事件获取
            data: '123', //可以自定义参数带入，用于事件获取
        });
        this.box.on('mouseover', function (event) { //事件
            console.log('mouseover event on box', event);
            document.body.style.cursor = 'pointer';
        });
        this.box.on('mouseout', function () {
            console.log('mouseout event on box')
            document.body.style.cursor = 'default';
        });
        

        this.group = new Konva.Group({
            x: 0,
            y: 0,
        });
        this.group.add(this.arrow);
        // this.group.add(this.circle);
        this.group.add(this.box);
        this.group.add(this.box2);
        console.log(this.group);
    },
    addToGroupOrLayer: function (layer) {
        layer.add(this.group);

    }
};



console.log('====================');