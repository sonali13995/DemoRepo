import { LightningElement,api } from 'lwc';

export default class ChildLwc extends LightningElement {
    @api childvar;
    childdata
    connectedCallback(){
        console.log('inside child var = '+this.childvar);
        console.log('inside  var child = '+this.varchild);
    }

    @api abcd(){
        console.log('inside child ');
        this.childvar = 'sonali surwase';

    }
    childJSMethod(){
        const selectedEvent = new CustomEvent("progressvaluechange", {
            detail: "this is from child component"
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent);
    }
    handelChange(event){
        this.childdata = event.target.value
        console.log('search input value '+this.childdata);
    }
}