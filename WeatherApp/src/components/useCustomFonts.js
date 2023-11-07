// import {useState, useEffect} from 'react';
// import {useFonts} from 'react-native-google-fonts/Noto Sans';

// const useCustomFont = (fontFamily, fontPath) => {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   useEffect(() => {
//     const fontsToLoad = {
//       [fontFamily]: fontPath,
//     };

//     // Define a separate function to load fonts
//     const loadFonts = async () => {
//       const [loaded] = await useFonts(fontsToLoad);

//       if (loaded) {
//         setFontLoaded(true);
//       }
//     };

//     loadFonts(); // Call the function to load fonts
//   }, [fontFamily, fontPath]);

//   return fontLoaded;
// };

// export default useCustomFont;
