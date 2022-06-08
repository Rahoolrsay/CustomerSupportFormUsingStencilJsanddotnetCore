export declare class MyForm {
  email: string;
  phone: string;
  number: string;
  description: string;
  checkbox: boolean;
  selectValue: string[];
  message: string;
  handleSubmit(e: any): void;
  clearData(): void;
  postData(): Promise<void>;
  handleChangeForEmail(event: any): void;
  handleChangeForPhone(event: any): void;
  handleChangeForNumber(event: any): void;
  handleChangeForDescription(event: any): void;
  handleChangeForCheckBox(event: any): void;
  handleSelect(event: any): void;
  render(): any;
}
