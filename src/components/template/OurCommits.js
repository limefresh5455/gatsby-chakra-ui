import React from 'react';
import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit, FaAdn } from 'react-icons/fc';

const Feature = ({ title, text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        bg={iconBg}
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        mb={1}>
        {icon}
      </Flex>
      <VStack align={'start'}>
        <Text fontWeight={700} fontSize={{ base: '12xl', sm: '4xl', md: '2xl' }}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </VStack>
    </Stack>
  );
};

export default function OurCommits() {
  return (
    <Stack w={'full'} align={'flex-start'} mt={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our commitment
          </Text>
          <Heading
            fontWeight={700}
            fontSize={{ base: '12xl', sm: '4xl', md: '7xl' }}
            lineHeight={'110%'}>
            Your user <br />
            <Text as={'span'}>
              data is safe
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            We take your security seriously and take measures to ensure your data stays safe
          </Text>
          <Feature
            icon={
              <Icon as={FaAdn} color={'yellow.500'} w={14} h={14} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            title={''}
            text={
              'SOC 2 Type II in-progress'
            }
          />     
        </Stack>
        <Flex p={4}>
          <Container maxW={'6xl'} mt={10}>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={FcAssistant} color={'yellow.500'} w={14} h={14} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                title={'GDPR Ready'}
                text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
              />
              <Feature
                icon={<Icon as={FcDonate} color={'green.500'} w={14} h={14} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                title={'CCPA compliant'}
                text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
              />
              <Feature
                icon={
                  <Icon as={FcInTransit} color={'purple.500'} w={14} h={14} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                title={'Secure servers'}
                text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
              />
            </Stack>
          </Container>
        </Flex>
      </SimpleGrid>
    </Stack>  
  );
}