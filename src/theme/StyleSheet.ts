import { Breakpoints } from '@skynexui/responsive_stylesheet';

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any; //generic (me permite passar qualquer chave e valor, para que eu não precise ficar adicionando um a um aqui)
}
