import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;

      secondary: string;
      secondary_light: string;

      success: string;
      success_light: string;

      attention: string;
      attention_light: string;

      shape: string;
      title: string;
      text: string;
      text_dark: string;

      background: string,
    };

    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
