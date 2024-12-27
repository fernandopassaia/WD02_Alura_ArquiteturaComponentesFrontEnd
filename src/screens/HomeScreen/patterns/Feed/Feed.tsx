import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Olá pessoas!
      </Button>
      <Button.Base href="https://github.com/omariosouto">
        <Image
          styleSheet={{
            width: '128px',
            height: '128px',
            borderRadius: '100%',
          }}
          src="https://avatars.githubusercontent.com/u/9318556?s=400&u=1d6ddfd40dacde1ebab7c5fea9bf4ef62cf18179&v=4"
          alt="Imagem de perfil do Fernando Passaia"
        />
      </Button.Base>
      <Link href="https://youtube.com/DevSoutinho">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}