import {
  CloseButton,
  Flex,
  Stack,
  Icon,
  IconButton,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Logo } from '../Logo';
import { SiteSettings } from '../SiteSettings';
import { NavPageItem } from '../types/NavPageItem';
import { NavButton } from './NavButton';

type SidebarProps = {
  pageItems: NavPageItem[];
  selectedIndex?: number;
  changeLocale: () => void;
};

export const Sidebar = (props: SidebarProps) => {
  const { pageItems, changeLocale } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        icon={<Icon as={FiMenu} fontSize="xl" />}
        aria-label="Open sidebar"
        ref={btnRef}
      />
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerContent>
          <Flex as="section" minH="100vh" bg="bg-canvas">
            <Flex
              flex="1"
              bg="bg-surface"
              boxShadow={useColorModeValue('sm', 'sm-dark')}
              maxW={{ base: 'full', sm: 'xs' }}
              py={{ base: '6', sm: '8' }}
              px={{ base: '4', sm: '6' }}
            >
              <Stack justify="space-between" spacing="1" width="full">
                <Stack spacing="8" shouldWrapChildren>
                  <Flex justify="space-between">
                    <Logo marginLeft={4} />
                    <CloseButton onClick={onClose} />
                  </Flex>
                  <Stack spacing="1">
                    {pageItems.map((item) =>
                      item.wrapperFn ? (
                        item.wrapperFn(
                          <NavButton
                            key={item.name}
                            label={item.name}
                            icon={item.icon}
                          />,
                        )
                      ) : (
                        <NavButton
                          key={item.name}
                          label={item.name}
                          icon={item.icon}
                        />
                      ),
                    )}
                  </Stack>
                </Stack>
                <Stack>
                  <Flex justify="space-around">
                    <SiteSettings changeLocale={changeLocale} />
                  </Flex>
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};
