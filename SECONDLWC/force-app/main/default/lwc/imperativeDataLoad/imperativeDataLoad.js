import { LightningElement,wire } from 'lwc';
import conList from'@salesforce/apex/WireClass.updateContact';

export default class ImperativeDataLoad extends LightningElement {
    handleButton(){
        //calling apex method imperatively
        conList().then(res=>{
            console.log('inside sucess '+res);
        }).catch(err=>{
            console.log('inside error '+err);
        });
    }
}