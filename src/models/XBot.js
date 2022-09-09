import Loader from "../Loader";
import { modelFile, animationFileList } from "./FileList";


const XBot = new Loader(modelFile, animationFileList, 0.01).getModel();
export const modes = {
    'normal': {
        'idle': [0, 1, false],
        'jump': [1, 1, false],
        'left': [2, 1, false],
        'right': [5, 1, false],
        'ahead': [9, 1, false],
    },
    'run': {
        'idle': [0, 1, false],
        'jump': [1, 1, false],
        'left': [3, 1, false],
        'right': [6, 1, false],
        'ahead': [8, 1, false],
    },
}

export default XBot;