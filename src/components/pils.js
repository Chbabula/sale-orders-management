import React from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Pill = ({ image, text, onClick }) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center" // Center horizontally
      bg="gray.800"
      borderRadius="md"
      px={2}
      py={1}
      mr={2}
      mb={2}
      mt={2}
      color="white"
      cursor="pointer"
      _hover={{ bg: 'blue.600' }}
      onClick={onClick}
      maxW="80%" // Ensure the pill does not take full width
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    >
      <Image src={image} alt={text} boxSize="20px" borderRadius="full" mr={2} />
      <span>{text}</span>
      <IconButton
        ml={2}
        variant="unstyled"
        color="white"
        aria-label="Remove"
        icon={<CloseIcon />}
        onClick={onClick}
        size="xs"
      />
    </Box>
  );
};

export default Pill;
