class SceneHandler{
    constructor(screenList){
        this.prev = null;
        this.screenList = screenList;
        Object.keys(this.screenList).forEach(key=>{
            this.screenList[key].setInstanceName(key);
        })
    }
    goTo(screenName){ 
        if(this.prev != null){
            this.prev.close()
        }
        this.screenList[screenName].open()
        this.screenList[screenName].setSeaneHandler(this);
        this.prev = this.screenList[screenName];
    }
}

export default SceneHandler;