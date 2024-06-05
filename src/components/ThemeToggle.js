import React from 'react';
import { Box, Switch, useColorMode } from '@chakra-ui/react';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" top="10px" right="10px">
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
        Dark Theme
      </Switch>
    </Box>
  );
}

export default ThemeToggle;
