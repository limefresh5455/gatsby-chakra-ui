import React from 'react';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function BackImage() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'} mt={20}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack w={'full'} ml={120} align={'flex-start'} spacing={6}>
          <Heading
            fontWeight={400}
            fontSize={{ base: '12xl', sm: '4xl', md: '4xl' }}
            lineHeight={'110%'}
            color={'green.400'}>
            Try today
          </Heading>
          <Heading
            fontWeight={700}
            fontSize={{ base: '12xl', sm: '4xl', md: '7xl' }}
            lineHeight={'110%'}
            color={'green.400'}>
            Set up June in <br />
            <Text as={'span'} color={'green.400'}>
              5 minutes
            </Text>
          </Heading>
          <Text
            color={'white'}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '3xl', md: '2xl' })}>
            Get instant product analytics reports in seconds not hours.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}