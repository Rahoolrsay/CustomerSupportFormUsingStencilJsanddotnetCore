import { Component, State, h} from '@stencil/core';


@Component({
  tag: 'my-form',
  styleUrl: 'my-form.scss',
  shadow: true,
})

  export class MyForm {
    @State() email: string;
    @State() phone: string;
    @State() number: string;
    @State() description: string;
    @State() checkbox: boolean;
    @State() selectValue: string[];
    @State() message: string;
    
  
    handleSubmit(e) {
      e.preventDefault();

      if(this.selectValue.length < 3){
        this.message = '(*Please select atleast 3 inquiries)';
        return;
      }

      this.message = "";
      if(this.checkbox == true){
          this.postData();
          this.clearData();
      }
    }

    clearData(){
        this.email = "";
        this.phone = "";
        this.number = "";
        this.selectValue = [];
        this.description = "";
    }

    async postData(){
        let data = {
            email: this.email,
            phone: this.phone,
            number: this.number,
            typeofinquiries: String(this.selectValue),
            description: this.description
          };
          let response = await fetch('http://localhost:62629/api/Inquiry', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          let json = await response.json();
    }
  
    handleChangeForEmail(event) {
      this.email = event.target.value;
  
      if (event.target.validity.typeMismatch) {
        console.log('this element is not valid')
      }
    }

    handleChangeForPhone(event) {
        this.phone = event.target.value;
    
        if (event.target.validity.typeMismatch) {
          console.log('this element is not valid')
        }
    }

    handleChangeForNumber(event) {
        this.number = event.target.value;

        if (event.target.validity.typeMismatch) {
            console.log('this element is not valid')
        }
    }

    handleChangeForDescription(event) {
    this.description = event.target.value;

    if (event.target.validity.typeMismatch) {
        console.log('this element is not valid')
    }
    }

    handleChangeForCheckBox(event){
        console.log('checkbox');
        console.log(event);
        this.checkbox = event.target.checked;
    }

    handleSelect(event) {
      var result = [];
        var options = event.target.options;
        var opt;
        for (var i=0, iLen=options.length; i<iLen; i++) {
          opt = options[i];
      
          if (opt.selected) {
            result.push(opt.value || opt.text);
          }
        }
        this.selectValue = result;
    }
  
    render() {
      return (
        <div class="bd-example">
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <h2>Customer Support Form</h2>
        <div class="form-group">
          <label htmlFor="customerEmail">Email</label>
          <input type="email" class="form-control" value={this.email} onInput={(e) => this.handleChangeForEmail(e)} required id="customerEmail" placeholder="name@example.com" />
        </div>
        <div class="form-group">
          <label htmlFor="customerPhone">Phone</label>
          <input type="tel" class="form-control" required id="customerPhone" value={this.phone} onInput={(e) => this.handleChangeForPhone(e)} 
          placeholder="xxxx-xxx-xxx" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" />
        </div>
        <div class="form-group">
          <label htmlFor="customerNumber">Number</label>
          <input type="text" class="form-control" id="customerNumber" value={this.number} onInput={(e) => this.handleChangeForNumber(e)} />
        </div>
        <div class="form-group">
          <label htmlFor="typeofinquiries">Type of inquiries <span class="invalid">{this.message}</span> </label>
          <select multiple class="form-control" id="typeofinquiries"  onInput={(event) => this.handleSelect(event)}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
            <option>Option 7</option>
            <option>Option 8</option>
            <option>Option 9</option>
            <option>Option 10</option>
          </select>
        </div>
        <div class="form-group">
          <label htmlFor="txtDescription">Description</label>
          <textarea class="form-control" id="txtDescription" value={this.description} onInput={(e) => this.handleChangeForDescription(e)}></textarea>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" onChange={(e) => this.handleChangeForCheckBox(e)} type="checkbox" value="" id="agreement" required />
                <label class="form-check-label" htmlFor="agreement">
                Agree to terms and conditions
                </label>
            </div>
            
        </div>
        <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit form</button>
           
        </div>
      </form>
      </div>
      );
    }
  }