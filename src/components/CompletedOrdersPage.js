import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function CompletedOrdersPage({ completedOrders }) {
  return (
    <div>
      <h2>Completed Sale Orders</h2>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Amount</Th>
            <Th>Last Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
          {completedOrders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.amount}</Td>
              <Td>{new Date(order.lastModified).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default CompletedOrdersPage;
