import React, { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
      <VStack as="form" onSubmit={handleSubmit} spacing={4} w="300px">
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit" colorScheme="blue" w="full">Login</Button>
      </VStack>
    </Box>
  );
}

export default LoginPage;
