import { LightningElement,wire } from 'lwc';
import conData from '@salesforce/apex/WireClass.updateContact';

export default class ImperativeDataLoad extends LightningElement {
    handleButton(){
        //calling apex method imperatively
        conData().then(res=>{
            console.log('inside sucess '+res);
        }).catch(err=>{
            console.log('inside error '+err);
        });
    }
}