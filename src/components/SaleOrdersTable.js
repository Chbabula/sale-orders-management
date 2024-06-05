import React, { useState } from "react";
import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import EditSaleOrderModal from "./EditSaleOrderModal";
import { MdPersonOutline } from "react-icons/md";

function SaleOrdersTable({ orders, onEdit, onComplete, readOnly }) {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleModify = (order) => {
    setSelectedOrder(order);
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const handleComplete = (order) => {
    onComplete(order);
  };

  const handleSaveEdit = (editedOrder) => {
    if (typeof onEdit === "function") {
      onEdit(editedOrder);
      setIsEditMode(false);
      setSelectedOrder(null);
    }
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Amount</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id} bg={"EEEEEE"} px={4}>
              <Td>{order.id}</Td>
              <Td>
                {" "}
                <Flex alignItems="center" >
                  <Box mr={2} >
                    <MdPersonOutline
                      style={{
                        borderRadius: "50%",
                        border: "2px solid #333",
                        padding: "0.5rem",
                        fontSize: "2.5rem",
                        color: "5AB2FF",
                        borderColor: "EEEEEE",
                        backgroundColor: "EEEEEE"
                      }}
                    />
                  </Box>
                  <Box>{order.customerName}</Box>
                </Flex>
              </Td>
              <Td>{order.amount}</Td>

              <Td>{new Date(order.lastModified).toLocaleString()}</Td>
              <Td>
                <Menu>
                  <MenuButton as={Button} size="sm" disabled={readOnly}>
                    ...
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => handleModify(order)}>
                      Modify
                    </MenuItem>
                    <MenuItem onClick={() => handleComplete(order)}>
                      Complete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isEditMode && selectedOrder && (
        <EditSaleOrderModal
          order={selectedOrder}
          onSave={handleSaveEdit}
          onClose={handleCancelEdit}
        />
      )}
    </>
  );
}

export default SaleOrdersTable;
