class Mouse{
    constructor(){
        this.canvas = null;
        this.click = this._click.bind(this);
        this.toggle = this._toggle.bind(this);
        this.move = this._move.bind(this);
        this.delta = {x:0, y:0};
        this.acumulated = {x:0, y:0};
    }
    setCanvas(canvas){
        this.canvas = canvas;
    }
    start(){
        if(!this.canvas) alert("No canvas set.")
        this.canvas.requestPointerLock = this.canvas.requestPointerLock || this.canvas.mozRequestPointerLock
        this.canvas.addEventListener('click', this.click)
        document.addEventListener('pointerlockchange', this.toggle)
        document.addEventListener('mozpointerlockchange', this.toggle)
    }
    stop(){
        if(this.canvas) this.canvas.removeEventListner('click', this.click);
        document.removeEventListener('pointerlockchange', this.toggle);
        document.removeEventListener('mozpointerlockchange', this.toggle);
    }

    _click(){
        this.canvas.requestPointerLock();
    }
    _toggle(){
        if(document.pointerLockElement == this.canvas || document.mozRequestPointerLock == this.canvas){
            document.addEventListener('mousemove', this.move);
        }else{
            document.removeEventListener('mousemove', this.move);
        }
    }
    _move(e){
        this.delta.x = e.movementX;
        this.delta.y = e.movementY;
        this.acumulated.x += e.movementX;
        this.acumulated.y += e.movementY;
        console.log(this.acumulated);
    }
}

const mouse = new Mouse()

export default mouse; 