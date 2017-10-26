import {Param} from "./Param";

/**
 * The model class corresponding to the Signal
 * @class Signal
 */

export abstract class Signal {

    /**
     * @constructor
     * @param value {string} the order value
     * @param params {Array<Param>} the list of Param
     */
    constructor(public name: string, protected params: Array<Param>) {
        this.name = name;
        this.params = params;
    }

    /**
     * Convert a Signal to String
     * @return {string} The string corresponding to the order
     */
    toString(): string {
        return "Name: "+this.name+", params -> "+this.params;
    }

}



