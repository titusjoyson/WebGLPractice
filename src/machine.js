class Machine{
    constructor(){
        this.flag = false;
        this.callbacks = [];
    }

    addCallback(callback){
        this.callbacks.push(callback);
    }

    removeCallback(callback){
        this.callbacks = this.callbacks.filter(cb => cb != callback);
    }

    start(){
        if (this.falg) return;
        this.flag = true;
        this.run();
    }

    stop(){
        if (!this.falg) return;
        this.flag = false;
    }

    run(){
        if (!this.flag) return;
        this.callbacks.forEach(cb=>cb());
        requestAnimationFrame(this.run.bind(this));
    }
}

const machine = new Machine();

export default machine;