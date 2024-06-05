import React, { useState, useRef } from "react";
import { Input, Box, UnorderedList, ListItem, Image } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';

const Wireframe = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const inputRef = useRef(null);

  // Dummy user data
  const mockUsers = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", image: "https://via.placeholder.com/150" },
    { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@example.com", image: "https://via.placeholder.com/150" },
    // Add more mock user data as needed
  ];

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm("");
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter((selectedUser) => selectedUser.id !== user.id);
    setSelectedUsers(updatedUsers);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.value === "" && selectedUsers.length > 0) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUser);
    }
  };

  return (
    <Box position="relative">
      <Box display="flex" alignItems="center" bg="gray.200" borderRadius="md" height="40px" pl={2}>
        {selectedUsers.map((user) => (
          <Box
            key={user.id}
            display="flex"
            alignItems="center"
            bg="gray.700"
            color="white"
            borderRadius="md"
            px={2}
            py={1}
            mr={2}
          >
            <Image src={user.image} alt={`${user.firstName} ${user.lastName}`} w={6} h={6} borderRadius="full" mr={2} />
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <CloseIcon ml={2} cursor="pointer" onClick={() => handleRemoveUser(user)} />
          </Box>
        ))}
        <Input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search For Orders..."
          onKeyDown={handleKeyDown}
          variant="unstyled"
          pl={2}
          height="100%" // Ensure the input height matches the container
          flex="1" // Ensure the input takes the remaining space
        />
      </Box>
      <UnorderedList mt={2} pl={0}>
        {mockUsers.map((user) => (
          <ListItem
            key={user.id}
            onClick={() => handleSelectUser(user)}
            cursor="pointer"
            display="flex"
            alignItems="center"
            mt={2}
          >
            <Image src={user.image} alt={`${user.firstName} ${user.lastName}`} w={8} h={8} borderRadius="full" mr={2} />
            <span>{user.firstName} {user.lastName}</span>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Wireframe;
