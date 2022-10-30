import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useColorMode,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { ReactNode, useMemo } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaLanguage } from 'react-icons/fa';
import { Logo } from '../Logo';

type NavbarProps = {
  pageItems: {
    name: string;
    // Next.js 依存にしないために render func を受ける
    wrapperFn?: (component: ReactNode) => JSX.Element;
  }[];
  selectedIndex?: number;
  changeLocale?: () => void;
};

export const Navbar = (props: NavbarProps) => {
  const { pageItems, selectedIndex, changeLocale } = props;

  const { colorMode, toggleColorMode } = useColorMode();
  const tabIndex = useMemo(() => selectedIndex ?? 0, [selectedIndex]);

  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {/* TODO: changes displays by breakpoints */}
            <Flex justify="space-between" flex="1">
              <Tabs
                colorScheme="blue"
                isFitted
                variant="unstyled"
                isLazy
                index={tabIndex}
              >
                <TabList>
                  {pageItems.map((item) =>
                    item.wrapperFn ? (
                      item.wrapperFn(
                        <Tab fontSize="md" _selected={{ color: 'accent' }}>
                          {item.name}
                        </Tab>
                      )
                    ) : (
                      <Tab
                        key={item.name}
                        fontSize="md"
                        _selected={{ color: 'accent' }}
                      >
                        {item.name}
                      </Tab>
                    )
                  )}
                </TabList>
                <TabIndicator
                  mt="4"
                  height={1}
                  borderTopRadius="md"
                  bg="accent"
                />
              </Tabs>
              <Spacer />
              {changeLocale && (
                <IconButton
                  variant="ghost"
                  icon={<Icon as={FaLanguage} fontSize="xl" />}
                  aria-label="Toggle Language EN/JP"
                  onClick={changeLocale}
                />
              )}
              <IconButton
                variant="ghost"
                icon={
                  <Icon
                    as={colorMode === 'light' ? FiSun : FiMoon}
                    fontSize="xl"
                  />
                }
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
              />
            </Flex>
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  );
};
