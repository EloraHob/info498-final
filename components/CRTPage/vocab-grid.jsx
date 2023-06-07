import React from 'react';
import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { MdSchool, MdPerson, MdEqualizer, MdMenuBook, MdPublic, MdPeople, MdDomain } from 'react-icons/md';
import { GiBlindfold } from 'react-icons/gi'

const terms = [
    {
        term: 'Intersectionality',
        definition:
            'The concept that individuals experience overlapping systems of oppression and discrimination based on their intersecting social identities (e.g., race, gender, class).',
        icon: MdSchool,
    },
    {
        term: 'Color-blindness',
        definition:
            'The belief that race is not important and should not be considered. CRT scholars argue that colorblindness is a form of racism, as it ignores the ways in which race continues to impact people\'s lives.',
        icon: GiBlindfold,
    },
    {
        term: 'Implicit Bias',
        definition:
            'Unconscious attitudes or beliefs that can lead to unfair or discriminatory behavior. CRT scholars argue that implicit bias is a major factor in racism and other forms of oppression.',
        icon: MdPerson,
    },
    {
        term: 'Equity',
        definition:
            'The concept of fairness and justice, aiming to ensure that all individuals have access to the resources and opportunities necessary to thrive, while addressing historical and systemic disadvantages.',
        icon: MdEqualizer,
    },
    {
        term: 'Counterstorytelling',
        definition:
            'Narratives and personal testimonies that challenge dominant narratives and expose the lived experiences of marginalized communities, highlighting the impact of racism and oppression.',
        icon: MdMenuBook,
    },
    {
        term: 'Racialization',
        definition:
            'The process by which social, cultural, and political meanings are attached to race, creating categories and hierarchies that shape social relations and power dynamics.',
        icon: MdPublic,
    },
    {
        term: 'Race',
        definition:
            'CRT scholars define race as a social construct, rather than a biological one. This means that race is not something that is inherent in people, but rather something that is created by society.',
        icon: MdPeople,
    },
    {
        term: 'Systemic Racism',
        definition: 'The institutional and structural practices, policies, and norms that perpetuate racial inequality and discrimination within a society.',
        icon: MdDomain,
    },
];

const Card = ({ term, definition, icon: IconComponent }) => {
    return (
        <Box
            p={2}
            m={4}
            boxSize={'xs'}
            boxShadow="md"
            borderRadius="md"
            border={'2px solid #2C5282'}
            transition="all 0.3s"
            _hover={{
                boxShadow: 'xl',
                border: '2px solid orange',
                transform: 'scale(1.05)',
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={3}
                transition="all 0.3s"
                _hover={{
                    transform: 'scale(1.1)',
                }}
            >
                <Icon
                    boxSize={24}
                    as={IconComponent}
                    color="#2C5282"
                    _hover={{
                        color: 'orange',
                    }}
                />
            </Box>
            <Heading textAlign="center" size="md">
                {term}
            </Heading>
            <Text mt={2} m={3} >{definition}</Text>
        </Box>
    );
};

const TermCards = () => {
    return (
        <Box>
            <Box display={'flex'} justifyContent="center" pt={10}>
            <Heading>
                KEY CONCEPTS AND TERMINOLOGY
            </Heading>
        </Box>
        <Box display="flex" justifyContent="center" p={8}>
            <Box display="flex" flexWrap="wrap" justifyContent="center" maxWidth="1200px">
                {terms.map((term) => (
                    <Card key={term.term} term={term.term} definition={term.definition} icon={term.icon} />
                ))}
            </Box>
        </Box>
        </Box>
    );
};


export default TermCards;
