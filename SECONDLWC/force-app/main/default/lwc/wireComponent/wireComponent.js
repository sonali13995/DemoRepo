import { LightningElement,wire } from 'lwc';
import AccData from '@salesforce/apex/WireClass.wireMethod'

export default class WireComponent extends LightningElement {
    @wire(AccData) accRecord;
}