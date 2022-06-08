import type { Components, JSX } from "../types/components";

interface MyForm extends Components.MyForm, HTMLElement {}
export const MyForm: {
  prototype: MyForm;
  new (): MyForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
