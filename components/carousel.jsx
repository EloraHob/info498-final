import { useState } from "react";
import { Box, Flex, Text, IconButton, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Card from "./TechnologyPage/case-study-cards";

// Renders a reusable carousel 
const Carousel = ({ items, renderItem, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box py={8} bg="#F5F5F5">
      <Heading as="h2" size="2xl" pb={8} pt={5} textAlign="center">
        {sectionTitle}
      </Heading>
      <Flex align="center" justify="center" mb={4}>
        <IconButton
          aria-label="Previous item"
          icon={<ChevronLeftIcon boxSize={6} color="white" />}
          onClick={handlePrev}
          mr={5}
          bg="#FF6F00"
          borderRadius="full"
          _hover={{ bg: "orange.600", transform: "scale(1.1)" }}
          _active={{ bg: "orange.700", transform: "scale(1.2)" }}
          transition="transform 0.3s"
        />

        {renderItem(items[currentIndex])}

        <IconButton
          aria-label="Next item"
          icon={<ChevronRightIcon boxSize={6} color="white" />}
          onClick={handleNext}
          ml={5}
          bg="#FF6F00"
          borderRadius="full"
          _hover={{ bg: "orange.600", transform: "scale(1.1)" }}
          _active={{ bg: "orange.700", transform: "scale(1.2)" }}
          transition="transform 0.3s"
        />
      </Flex>

      <Flex align="center" justify="center" py={5} pb={10}>
        {items.map((item, index) => (
          <Box
            key={index}
            w={4}
            h={4}
            borderRadius="full"
            bg={index === currentIndex ? "#FF6F00" : "gray.300"}
            mx={3}
            onClick={() => setCurrentIndex(index)}
            cursor="pointer"
            transition="background-color 0.3s"
            _hover={{ bg: "gray.400" }}
          />
        ))}
      </Flex>
    </Box>
  );
};

// Renders the videos for a video carousel
function VideoCarousel({sectionTitle}) {
  const videos = [
    {
      id: 1,
      description: "Critical Race Theory: Last Week Tonight with John Oliver (2022)",
      url: "https://www.youtube.com/embed/EICp1vGlh_U"
    },
    {
      id: 2,
      description: "Critical race theory: Experts break down what it actually means (2021)",
      url: "https://www.youtube.com/embed/svj_6w0EUz4"
    },
    {
      id: 3,
      description: "Creator Of Term 'Critical Race Theory' Kimberlé Crenshaw Explains What It Really Is (2021)",
      url: "https://www.youtube.com/embed/n4TAQF6ocLU"
    },
    {
      id: 4,
      description: "Ethical tech with Tracy Chou (Block Party) and Ellen Pao (Project Include) (2019)",
      url: "https://www.youtube.com/embed/3SizoPAquXY"
    }
  ];

  const renderVideoPlayer = (video) => (
    <Box
      w="50%"
      h="400px"
      boxShadow="0px 0px 15px rgba(1, 1, 1, 0.7)"
      mx={10}
    >
      <iframe
        width="100%"
        height="100%"
        src={video.url}
        title={video.description}
        frameBorder="0"
        allowFullScreen
      />
    </Box>
  );

  return (
    <Carousel items={videos} renderItem={renderVideoPlayer} sectionTitle={sectionTitle} />
  );
}

// Renders the cards for a card carousel
function CardCarousel({sectionTitle}) {
    const cards = [
        {
            image: '/images/technology/case-studies/ellen-pao.jpeg',
            year: 2019,
            name: 'Ellen Pao',
            organization: 'Project Include',
            description: `Project Include started as dinner brainstorming sessions on how to make tech meaningfully more diverse.\n\nBigger companies are really stuck. They embedded all of these biases into all of their operations... So we focused on startups because we thought, that's where you are going to see the change. It was clear working with these startups that you can get to a much better place than the big tech companies are today.\n\nWe saw that the top startups in our program could get to very high numbers of underrepresented groups in their workforces, so it gives me hope that people can do that across all types of startups and eventually across all of tech, but we are still a long way from getting there.`
        },
        {
            image: '/images/technology/case-studies/kate-turner.jpeg',
            year: 2020,
            name: 'Kate Turner',
            organization: 'MediaLab',
            description: `When we have decision-makers that are predominantly coming from one kind of perspective, education, or lived experience, this contributes to the creation of inequity throughout technology\’s design and implementation in society. Everything from gentrification to facial recognition software not accurately categorizing faces of color — these issues stem ultimately from inequity in innovation practices.\n\n[At MediaLab] We ask big questions, like how do the different experiences of marginalized people shape their needs? How can they inform our design questions, what sorts of products we create, how technology is used? How can we include and celebrate diversity in design, implementation, and policy — rather than erase or criminalize it?`
        },
        {
            image: '/images/technology/case-studies/tracy-chou.jpeg',
            year: 2021,
            name: 'Tracy Chou',
            organization: 'Block Party',
            description: `I\’d spent a lot of time looking at how the lack of diversity and representation in teams meant that products were built in a skewed way. For instance, nondiverse teams of people who generally don\’t get targeted with abuse and harassment don\’t tend to build protections against that in their apps— it felt like many people were approaching this problem purely from a business angle, because they didn\’t know what it was like to experience it themselves. Some people were building machine-learning models to detect toxic content and thought that would solve the problem.\n\nLast summer, as part of Mozilla\’s Fix the Internet incubator, I was asked to do a Reddit AMA in an effort to grow Block Party. Within 10 or 15 minutes of the AMA starting, trolls took over the thread, presenting bad-faith arguments and burying all my answers. By the time the Reddit moderators locked the thread many, many hours later, there were thousands of comments, the majority of which were awful, terrible things. It was a really traumatic experience.`
        },
    ];

  const renderCard = (card) => (
    <Card
      imageSrc={card.image}
      year={card.year}
      name={card.name}
      organization={card.organization}
      description={card.description}
    />
  );

  return (
    <Carousel items={cards} renderItem={renderCard} sectionTitle={sectionTitle} />
  );
}

export { VideoCarousel, CardCarousel };
