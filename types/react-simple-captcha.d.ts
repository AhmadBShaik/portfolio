declare module "react-simple-captcha" {
  export function loadCaptchaEnginge(length?: number): void;

  export function LoadCanvasTemplate(props?: any): JSX.Element;

  export function LoadCanvasTemplateNoReload(props?: any): JSX.Element;

  export function validateCaptcha(input: string): boolean;
}
