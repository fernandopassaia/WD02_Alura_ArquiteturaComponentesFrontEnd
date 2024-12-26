import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeStyled,
} from 'styled-components'; //StyleComponents contém bibliotecas pra lidar com tema
import theme, { Theme } from "./theme";

// Hook para usar o Tema
export function useTheme(): Theme {
  return useThemeStyled() as unknown as any;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Provedor do Tema
export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}