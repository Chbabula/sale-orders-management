import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import LoginPage from './components/LoginPage';
import ThemeToggle from './components/ThemeToggle';
import SaleOrdersTable from './components/SaleOrdersTable';
import CreateSaleOrderModal from './components/CreateSaleOrderModal';
import EditSaleOrderModal from './components/EditSaleOrderModal';
import CompletedOrdersPage from './components/CompletedOrdersPage';
import Wireframe from './components/Wireframe';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [saleOrders, setSaleOrders] = useState({ active: [], completed: [] });
  const [modalContent, setModalContent] = useState(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.className = colorMode;
  }, [colorMode]);

  const handleLogin = (username, password) => {
    if (username === 'babu' && password === 'babu123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const addSaleOrder = (order) => {
    setSaleOrders((prevOrders) => ({
      ...prevOrders,
      active: [...prevOrders.active, order],
    }));
  };

  const editSaleOrder = (editedOrder) => {
    setSaleOrders((prevOrders) => ({
      ...prevOrders,
      active: prevOrders.active.map((order) =>
        order.id === editedOrder.id ? editedOrder : order
      ),
    }));
  };

  const completeSaleOrder = (order) => {
  const updatedActiveOrders = saleOrders.active.filter((o) => o.id !== order.id);

  
  setSaleOrders((prevOrders) => ({
    active: updatedActiveOrders,
    completed: [...prevOrders.completed, order],
  }));
};

  const openCreateOrderModal = () => {
    setModalContent(<CreateSaleOrderModal onClose={() => setModalContent(null)} onSave={addSaleOrder} />);
  };

  const openEditOrderModal = (order) => {
    setModalContent(<EditSaleOrderModal order={order} onClose={() => setModalContent(null)} onSave={editSaleOrder} />);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Container maxW="container.xl">
      <ThemeToggle />
      <Box position="relative">
        <Tabs index={activeTab} onChange={(index) => setActiveTab(index)}>
          <TabList>
            <Tab>Active Sale Orders</Tab>
            <Tab>Completed Sale Orders</Tab>
            <Tab>ALL Products</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SaleOrdersTable
                orders={saleOrders.active}
                onEdit={openEditOrderModal}
                onComplete={completeSaleOrder}
              />
            </TabPanel>
            <TabPanel>
              <CompletedOrdersPage completedOrders={saleOrders.completed} />
            </TabPanel>
            <TabPanel>
              <Wireframe /> 
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button
          position="fixed"
          bottom="20px"
          right="20px"
          onClick={openCreateOrderModal}
          colorScheme="blue"
        >
          + Sale Order
        </Button>
      </Box>
      {modalContent}
    </Container>
  );
}

export default App;
