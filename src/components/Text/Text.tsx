import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import theme from "@src/theme/theme";
import React from 'react';

interface TextProps {
  variant?: 'display1';
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
  styleSheet, 
  variant,
  ...props
}: TextProps) {
  //Eu irei receber a variante da página que chamar o Text (como a HomeScreen). A linha abaixo irá pegar
  //essa variante dentro do arquivo typrography pelo array. Ira receber todas as propriedades e então
  //propagar essa variante para o BaseComponent
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,//repasso o textVariante para o component principal
        ...styleSheet,
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'//digo que meu DEfault é o Body2 (que é um tamanho médio razoável)
};