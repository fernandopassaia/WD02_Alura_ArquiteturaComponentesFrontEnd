import { typography } from './defaults/typography'; 

const theme = {
  typography,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants; //aqui retorna todas variantes de tema

export default theme;