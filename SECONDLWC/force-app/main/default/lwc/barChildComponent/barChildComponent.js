import { LightningElement,api } from 'lwc';

export default class BarChildComponent extends LightningElement {
    classname = 'greenBar';

    @api childMethod(){
        console.log('inside child method');
        this.classname = 'redBar';
    }

}