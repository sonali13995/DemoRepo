import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {
    parentButton(){
        console.log('inside parent');
        this.template.querySelector("c-child-lwc").abcd();
    }
    
    handlejsvalue(event){
        console.log('inside parent method'+event.detail);
    }
}