class MasterScene{
    constructor(){
        this.instanceName = null;
        this.sceneHandler = null;
    }
    setInstanceName(instanceName){
        this.instanceName = instanceName;
    }
    setSeaneHandler(sceneHandler){
        this.sceneHandler = sceneHandler;
    }
    toString(){
        return this.instanceName
    }
    open(){}
    close(){}
}


export default MasterScene;