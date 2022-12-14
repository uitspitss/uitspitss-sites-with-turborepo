import { Divider, Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { FiFile, FiFolder, FiUsers } from 'react-icons/fi';
import { Logo } from '@/components/parts/Logo';
import { UserProfile } from '@/components/parts/UserProfile';
import { NavButton } from './NavButton';

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <Logo />
          <Stack spacing="1">
            <NavButton label="Games" icon={FiFolder} />
            <NavButton label="Songs" icon={FiFile} />
            <NavButton label="Users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Divider />
          <UserProfile name="login name" image="" email="mail@example.com" />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
