import Image from 'next/image';
import {
    Box,
    Flex, // Import Flex component
    Heading,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

const articleData = [
    {
        image: '/images/resources/articles/crt-article.png',
        site: 'CRT is being taught in K-12 schools.',
        title: 'What Is Critical Race Theory? And Does It Fulfill the Civil Rights Movement or Betray It?',
        link: 'https://fee.org/resources/what-is-critical-race-theory-and-does-it-fulfill-the-civil-rights-movement-or-betray-it/?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wbrqqtJANjw7a87I2mraLScPa3gsV5sr9BAuICSXm8pKEumNgNw-IaAtrDEALw_wcB',
    },
    {
        image: '/images/resources/articles/nyt.webp',
        site: 'New York Times',
        title: 'Lesson of the Day: `Critical Race Theory: A Brief History`',
        link: 'https://www.nytimes.com/2021/09/20/learning/lesson-of-the-day-critical-race-theory.html',
    },
    {
        image: '/images/resources/articles/mit.jpeg',
        site: 'MIT News',
        title: 'Study finds gender and skin-type bias in commercial artificial-intelligence systems',
        link: 'https://news.mit.edu/2018/study-finds-gender-skin-type-bias-artificial-intelligence-systems-0212',
    },
    {
        image: '/images/resources/articles/kate.jpeg',
        site: 'MIT News',
        title: 'Anti-racism in technology and policy design',
        link: 'https://news.mit.edu/2020/anti-racism-technology-and-policy-design-kate-turner-0904',
    },
    {
        image: '/images/resources/articles/diverse.webp',
        site: 'MIT Technology Review',
        title: 'Why it\’s so hard to make tech more diverse',
        link: 'https://www.technologyreview.com/2021/06/30/1026564/tech-diversity-harassment-block-party-tracy-chou/',
    },
    {
        image: '/images/technology/case-studies/ellen-pao.jpeg',
        site: 'USA Today',
        title: "Sorry, Facebook and Google, Ellen Pao says startups will fix Silicon Valley's diversity problem",
        link: 'https://www.technologyreview.com/2021/06/30/1026564/tech-diversity-harassment-block-party-tracy-chou/',
    },
];

export default function Articles() {
    return (
        <Flex direction={'column'} justify={'center'} align={'center'} py={20}>
            <Heading as={'h2'} fontSize={'5xl'} pb={20}>
                ARTICLES
            </Heading>
            <Flex flexWrap="wrap" justifyContent="center" gap={10}>
                {articleData.map((article, index) => (
                    <Box
                        key={index}
                        maxW={'445px'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}
                        mb={6}
                    >
                        <Box
                            h={'200px'}
                            bg={'gray.100'}
                            pos={'relative'}
                        >
                            <Image
                                src={article.image}
                                alt={article.title}
                                layout={'fill'}
                                objectFit={'cover'}
                            />
                        </Box>
                        <Box p={6}>
                            <Text
                                color={'orange.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}
                            >
                                {article.site}
                            </Text>
                            <Heading
                                color={'gray.700'}
                                fontSize={'2xl'}
                                fontFamily={'body'}
                                mb={4}
                            >
                                {article.title}
                            </Heading>
                            <Button colorScheme="orange" as="a" href={article.link} target="_blank" rel="noopener noreferrer">
                                Check it out
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
}
