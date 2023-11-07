declare module 'react-native-google-fonts' {
  export type FontInfo = {
    family: string;
    source: {uri: string};
  };

  export function useFonts(fonts: {
    [fontFamily: string]: string | FontInfo;
  }): [boolean];
}
