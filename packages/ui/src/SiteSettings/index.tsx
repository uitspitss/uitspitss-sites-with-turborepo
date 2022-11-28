import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

type SiteSettingsProps = {
  changeLocale: () => void;
};

export const SiteSettings = ({ changeLocale }: SiteSettingsProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
          <Icon as={colorMode === 'light' ? FiSun : FiMoon} fontSize="xl" />
        }
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
      />
    </>
  );
};
