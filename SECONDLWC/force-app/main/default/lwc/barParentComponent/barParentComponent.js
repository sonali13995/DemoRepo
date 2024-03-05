
import { LightningElement } from 'lwc';

export default class BarParentComponent extends LightningElement {
    changecolor(){
        console.log('inside parent Method');
        this.template.querySelector("bar-child-component").childMethod();
    }
}