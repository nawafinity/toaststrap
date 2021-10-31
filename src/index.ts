import { POSITION } from './prefrences';
import {OptionsType, Bootstrap5Toast} from './ToastFactory';



function initialize(options: OptionsType ): Bootstrap5Toast {
    return new Bootstrap5Toast(options)
}

export {initialize, POSITION}