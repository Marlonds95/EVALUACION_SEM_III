import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#228B22', // Color primario
    accent: '#7FFF00', // Color de acento
    background: '#FFFFFF', // Color de fondo
    surface: '#FFFFFF', // Color de superficie
    text: '#000000', // Color de texto
    placeholder: '#A9A9A9', // Color del marcador de posición
    disabled: '#CCCCCC', // Color de elementos deshabilitados
    error: '#FF0000', // Color de error
  },
};