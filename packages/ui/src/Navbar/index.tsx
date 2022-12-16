import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Show,
  Spacer,
  Hide,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Logo } from '../Logo';
import { Sidebar } from '../Sidebar';
import { SiteSettings } from '../SiteSettings';
import { NavPageItem } from '../types/NavPageItem';

type NavbarProps = {
  pageItems: NavPageItem[];
  locale: string;
  selectedIndex?: number;
  changeLocale: () => void;
};

/**
 * including Sidebar
 * @param props
 * @returns ReactElement
 */
export const Navbar = (props: NavbarProps) => {
  const { pageItems, selectedIndex, changeLocale } = props;

  const tabIndex = useMemo(() => selectedIndex ?? 0, [selectedIndex]);

  return (
    <>
      <Show above="md">
        <Box as="section">
          <Box as="nav" bg="bg-surface">
            <Container py={{ base: '4', lg: '5' }}>
              <HStack spacing="10" justify="space-between">
                <Logo />
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
                            </Tab>,
                          )
                        ) : (
                          <Tab
                            key={item.name}
                            fontSize="md"
                            _selected={{ color: 'accent' }}
                          >
                            {item.name}
                          </Tab>
                        ),
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
                  <SiteSettings changeLocale={changeLocale} />
                </Flex>
              </HStack>
            </Container>
          </Box>
          <Divider />
        </Box>
      </Show>
      <Hide above="md">
        <Sidebar {...{ pageItems, selectedIndex, changeLocale }} />
      </Hide>
    </>
  );
};
