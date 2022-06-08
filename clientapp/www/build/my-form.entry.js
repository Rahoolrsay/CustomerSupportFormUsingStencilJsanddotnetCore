import { r as registerInstance, h } from './index-1a56dfe0.js';

const myFormScss = ".bd-example{margin:.10rem;padding:.10rem;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-group{margin-bottom:1rem;font-size:1rem;font-weight:400;line-height:1.5}label{display:inline-block;margin-bottom:.5rem}button,input{overflow:visible}select{word-wrap:normal}button,select{text-transform:none}select.form-control[multiple],select.form-control[size]{height:auto}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}textarea{height:calc(1.5em + .75em + 4.375em + 2px) !important}*,::after,::before{box-sizing:border-box}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}.form-check-input{position:absolute;margin-top:.3rem}.form-check-label{margin-left:1rem}.form-check{position:relative;display:block}[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled),button:not(:disabled){cursor:pointer}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}[type=\"button\"],[type=\"reset\"],[type=\"submit\"],button{-webkit-appearance:button}.invalid{color:red}";

const MyForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.selectValue.length < 3) {
      this.message = '(*Please select atleast 3 inquiries)';
      return;
    }
    this.message = "";
    if (this.checkbox == true) {
      this.postData();
      this.clearData();
    }
  }
  clearData() {
    this.email = "";
    this.phone = "";
    this.number = "";
    this.selectValue = [];
    this.description = "";
  }
  async postData() {
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
      console.log('this element is not valid');
    }
  }
  handleChangeForPhone(event) {
    this.phone = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid');
    }
  }
  handleChangeForNumber(event) {
    this.number = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid');
    }
  }
  handleChangeForDescription(event) {
    this.description = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid');
    }
  }
  handleChangeForCheckBox(event) {
    console.log('checkbox');
    console.log(event);
    this.checkbox = event.target.checked;
  }
  handleSelect(event) {
    var result = [];
    var options = event.target.options;
    var opt;
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    this.selectValue = result;
  }
  render() {
    return (h("div", { class: "bd-example" }, h("form", { onSubmit: (e) => this.handleSubmit(e) }, h("h2", null, "Customer Support Form"), h("div", { class: "form-group" }, h("label", { htmlFor: "customerEmail" }, "Email"), h("input", { type: "email", class: "form-control", value: this.email, onInput: (e) => this.handleChangeForEmail(e), required: true, id: "customerEmail", placeholder: "name@example.com" })), h("div", { class: "form-group" }, h("label", { htmlFor: "customerPhone" }, "Phone"), h("input", { type: "tel", class: "form-control", required: true, id: "customerPhone", value: this.phone, onInput: (e) => this.handleChangeForPhone(e), placeholder: "xxxx-xxx-xxx", pattern: "[0-9]{4}[0-9]{3}[0-9]{3}" })), h("div", { class: "form-group" }, h("label", { htmlFor: "customerNumber" }, "Number"), h("input", { type: "text", class: "form-control", id: "customerNumber", value: this.number, onInput: (e) => this.handleChangeForNumber(e) })), h("div", { class: "form-group" }, h("label", { htmlFor: "typeofinquiries" }, "Type of inquiries ", h("span", { class: "invalid" }, this.message), " "), h("select", { multiple: true, class: "form-control", id: "typeofinquiries", onInput: (event) => this.handleSelect(event) }, h("option", null, "Option 1"), h("option", null, "Option 2"), h("option", null, "Option 3"), h("option", null, "Option 4"), h("option", null, "Option 5"), h("option", null, "Option 6"), h("option", null, "Option 7"), h("option", null, "Option 8"), h("option", null, "Option 9"), h("option", null, "Option 10"))), h("div", { class: "form-group" }, h("label", { htmlFor: "txtDescription" }, "Description"), h("textarea", { class: "form-control", id: "txtDescription", value: this.description, onInput: (e) => this.handleChangeForDescription(e) })), h("div", { class: "form-group" }, h("div", { class: "form-check" }, h("input", { class: "form-check-input", onChange: (e) => this.handleChangeForCheckBox(e), type: "checkbox", value: "", id: "agreement", required: true }), h("label", { class: "form-check-label", htmlFor: "agreement" }, "Agree to terms and conditions"))), h("div", { class: "form-group" }, h("button", { class: "btn btn-primary", type: "submit" }, "Submit form")))));
  }
};
MyForm.style = myFormScss;

export { MyForm as my_form };
