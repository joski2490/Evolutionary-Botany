let Scene = function() {
    this.fileName = "./frames/branching-013/botany";
    this.maxFrames = 250;
    this.frameCount = 0;
    this.shapes = [];
    this.shapesPerFrame = 10000;
    this.framePrinted = true;
    this.trees = [];
};

Scene.prototype.addShape = function(s) {
    this.shapes.push(s);
};

Scene.prototype.registerLine = function(x1, y1, x2, y2) {
    this.shapes.push({
        type: "line",
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    });
};

Scene.prototype.update = function() {
    if (this.framePrinted) {
        this.frameCount++;
        sketch.background(200);
        for (let i = 0; i <  this.trees.length; i++) {
            this.trees[i].grow();
            this.trees[i].grow();
            this.trees[i].gatherShapes();
        }
        this.framePrinted = false;
    }
    if (!this.framePrinted) {
        sketch.translate(sketch.width / 2, sketch.height - 50);
        sketch.scale(0.6, 0.6);
        if (this.shapes.length <= this.shapesPerFrame) {
            for (let i = 0; i < this.shapes.length; i++) {
                this.printObject(this.shapes[i]);
            }
            this.shapes = [];
        } else {
            for (let i = 0; i < this.shapesPerFrame; i++) {
                this.printObject(this.shapes[this.shapes.length - 1]);
                this.shapes.pop();
            }
        }
    }
    if (this.shapes.length == 0) {
        this.framePrinted = true;
        if (exporting && this.frameCount < this.maxFrames) {
            frameExport(sketch);
        }
    }
};

Scene.prototype.print = function() {
    if (this.shapes.length <= this.shapesPerFrame) {
        sketch.background(200);
        sketch.translate(sketch.width / 2, sketch.height - 100);
        sketch.scale(0.6, 0.6);
        tree.grow();
        tree.gatherShapes();
        for (let i = 0; i < this.shapes.length; i++) {
            this.printObject(this.shapes[i]);
        }
        this.shapes = [];
        this.frameCount++;
    } else {
        // if ()
    }
};

Scene.prototype.printObject = function(obj) {
    if (obj.type == "line") {
        sketch.line(obj.x1, obj.y1, obj.x2, obj.y2);
    }
};

let scene = new Scene({
    name: "demo",
    type: "line",
    frameRate: 24
});