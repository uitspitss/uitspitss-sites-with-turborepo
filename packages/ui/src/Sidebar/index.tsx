import {
  CloseButton,
  Flex,
  Stack,
  IconButton,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Logo } from '../Logo';
import { NavButton } from './NavButton';

type SidebarProps = {
  pageItems: {
    name: string;
    // Next.js 依存にしないために render func を受ける
    wrapperFn?: (component: ReactNode) => JSX.Element;
  }[];
  selectedIndex?: number;
  changeLocale?: () => void;
};

export const Sidebar = (props: SidebarProps) => {
  const { pageItems } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      {!isOpen && (
        <IconButton
          onClick={onOpen}
          variant="ghost"
          icon={<FiMenu />}
          aria-label="Open sidebar"
          ref={btnRef}
        />
      )}
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
                  <Logo marginLeft={4} />
                  <CloseButton
                    pos="absolute"
                    top="8"
                    right="8"
                    onClick={onClose}
                  />
                  <Stack spacing="1">
                    {pageItems.map((item) =>
                      item.wrapperFn ? (
                        item.wrapperFn(<NavButton label={item.name} />)
                      ) : (
                        <NavButton key={item.name} label={item.name} />
                      ),
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};
