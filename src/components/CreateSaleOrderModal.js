import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

// Create a singleton-like function to generate sequential IDs
let idCounter = 0;

const generateSequentialId = () => {
  idCounter++;
  return idCounter;
};

function CreateSaleOrderModal({ onClose, onSave }) {
  const { isOpen, onClose: onModalClose } = useDisclosure({ isOpen: true });
  const [formState, setFormState] = useState({ id: 0, customerName: '', amount: '',  lastModified: new Date().toISOString() });

  useEffect(() => {
    setFormState((prevState) => ({ ...prevState, id: generateSequentialId() }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value, lastModified: new Date().toISOString() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
    onClose();
    onModalClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="customerName"
              value={formState.customerName}
              onChange={handleInputChange}
              placeholder="Customer Name"
              mb={3}
            />
            <Input
              type="number"
              name="amount"
              value={formState.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              mb={3}
            />
          
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="ghost" onClick={onModalClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateSaleOrderModal;
