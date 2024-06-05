import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function EditSaleOrderModal({ order, onSave, onClose }) {
  const [editedOrder, setEditedOrder] = useState(order);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedOrder);
    onClose();
  };

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input name="customerName" value={editedOrder.customerName} onChange={handleChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Amount</FormLabel>
            <Input name="amount" value={editedOrder.amount} onChange={handleChange} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditSaleOrderModal;
