import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import * as React from 'react';
import { FiFile, FiFolder, FiUsers } from 'react-icons/fi';
import { Logo } from '@/components/parts/Logo';
import { UserProfile } from '@/components/parts/UserProfile';
import { NavButton } from './NavButton';

export const Sidebar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
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
              <Link as={NextLink} href="/games">
                <NavButton label="Games" icon={FiFolder} />
              </Link>
              <Link as={NextLink} href="/songs">
                <NavButton label="Songs" icon={FiFile} />
              </Link>
              <NavButton label="Users" icon={FiUsers} />
            </Stack>
          </Stack>
          <Stack spacing={{ base: '5', sm: '6' }}>
            {isAuthenticated && (
              <UserProfile
                name={`${user?.name}`}
                image={`${user?.picture}`}
                email={`${user?.email}`}
              />
            )}
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
