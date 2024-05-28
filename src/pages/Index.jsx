import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />
          <StatBox icon={FaChartLine} label="Sales" value="1,200" change="+10%" />
          <StatBox icon={FaUsers} label="Customers" value="300" change="+2%" />
          <StatBox icon={FaShoppingCart} label="Orders" value="150" change="-1%" />
        </SimpleGrid>

        <HStack spacing={10} justify="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Text fontSize="xl" mb={4}>
              Sales Overview
            </Text>
            <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxNjg4MDc0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Text fontSize="xl" mb={4}>
              Revenue Breakdown
            </Text>
            <Image src="https://images.unsplash.com/photo-1707761918029-1295034aa31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXZlbnVlJTIwY2hhcnR8ZW58MHx8fHwxNzE2ODgwNzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue Chart" />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <HStack spacing={4}>
        <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound />
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
            {change}
          </StatHelpText>
        </Stat>
      </HStack>
    </Box>
  );
};

export default Dashboard;
