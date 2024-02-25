import React from "react";
import { Box, Button, Container, Heading, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaRobot, FaComments, FaBrain } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Simulación de interacciones con agentes desarrollados en Rivet
  const handleAgentInteraction = (agentName) => {
    // Aquí se realizaría la integración con el agente de Rivet correspondiente
    toast({
      title: `Interactuando con ${agentName}`,
      description: "Esta es una simulación de la interacción con un agente de Rivet.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} as="article">
        <Heading as="h1" size="2xl">
          Integración de Agentes Rivet
        </Heading>
        <Text fontSize="xl">Esta es una aplicación web de ejemplo que integra tres agentes desarrollados en Rivet.</Text>
        <Box>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={() => handleAgentInteraction("Agente 1")}>
              Agente 1
            </Button>
            <Button leftIcon={<FaComments />} colorScheme="blue" onClick={() => handleAgentInteraction("Agente 2")}>
              Agente 2
            </Button>
            <Button leftIcon={<FaBrain />} colorScheme="purple" onClick={() => handleAgentInteraction("Agente 3")}>
              Agente 3
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
