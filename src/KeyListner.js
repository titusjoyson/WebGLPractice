class KeyListner {
    constructor() {
        this.keys = {};
        this.caster = ()=>{};
    }

    setCaster(caster){
        this.caster = caster;
    }
    isPressed(keyCode) {
        return this.keys[keyCode] ? this.keys[keyCode] : false
    }
    down(e) {
        if(this.keys[e.keyCode]) return 
        this.keys[e.keyCode] = true;
        this.caster([e.keyCode, true, this.keys])
    }
    up(e) {
        if(!this.keys[e.keyCode]) return
        this.keys[e.keyCode] = false;
        this.caster([e.keyCode, false, this.keys])
    }
    start() {
        window.addEventListener("keydown", this.down.bind(this));
        window.addEventListener("keyup", this.up.bind(this));
    }
    stop() {
        window.removeEventListener("keydown", this.down.bind(this));
        window.removeEventListener("keyup", this.up.bind(this));
    }
}

const keyListner = new KeyListner();

export default keyListner;