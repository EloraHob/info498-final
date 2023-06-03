import React from 'react';
import { Box, Text, Grid, IconButton, Tooltip, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button} from '@chakra-ui/react';
import { InfoIcon, ExternalLinkIcon } from '@chakra-ui/icons';

// Array of quotes and video clip details
const quotesAndClips = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Tech Company',
    quote: 'Critical Race Theory provides a framework to understand how systemic racism manifests in the tech industry and enables us to address and dismantle those structures.',
    videoUrl: 'https://www.youtube.com/watch?v=xyz123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Software Engineer',
    quote: 'As a person of color working in tech, CRT has helped me navigate and challenge the biases and microaggressions I face on a daily basis. It\'s essential for creating a more inclusive industry.',
    videoUrl: 'https://www.youtube.com/watch?v=abc456',
  },
  // Add more quotes and clips as needed
];

function ExplorePage() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const bgColor = 'white';
  const textColor = 'gray.800';

  return (
    <Box p={8} bg={bgColor}>
      <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center" color={textColor}>
        Explore CRT in the Tech Industry
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
        {quotesAndClips.map((item) => (
          <Box
            key={item.id}
            p={8}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
            textAlign="center"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
            cursor="pointer"
            onClick={() => openModal(item)}
            bg={'gray.100'}
          >
            <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
              {item.name}
            </Text>
            <Text fontSize="lg" fontStyle="italic" mb={6} color={textColor}>
              "{item.quote}"
            </Text>
            <Tooltip label="Learn more" hasArrow placement="top">
              <IconButton
                icon={<InfoIcon />}
                variant="outline"
                size="lg"
                aria-label="Learn more"
                color={'gray.500'}
                _hover={{ color: 'gray.700' }}
              />
            </Tooltip>
          </Box>
        ))}
      </Grid>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent bg={bgColor} color={textColor}>
          <ModalHeader>{selectedItem?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" fontStyle="italic" mb={4}>
              "{selectedItem?.quote}"
            </Text>
            <Box mb={4} borderRadius="md" overflow="hidden">
              <iframe
                width="100%"
                height="400"
                src={selectedItem?.videoUrl}
                title="Video Clip"
                allowFullScreen
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              as="a"
              href={selectedItem?.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<ExternalLinkIcon />}
              variant="solid"
              colorScheme="teal"
              mr={2}
            >
              Watch Full Video
            </Button>
            <Button variant="ghost" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ExplorePage;
