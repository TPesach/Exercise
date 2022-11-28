import { Children } from './children';
import { HMO } from './hmo';
import {Kind} from './kind';


export class Person {

    constructor(
        public firstName:string,
        public lastName:string,
        public idNumber:string,
        public birthDate:Date,
        public kind:Kind,
        public HMO:HMO,
        public children:Array<Children>
        ) {
    }
}


