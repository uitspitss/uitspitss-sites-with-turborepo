import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
        as={motion.button}
        variant="ghost"
        icon={
          <Icon as={colorMode === 'light' ? FiSun : FiMoon} fontSize="xl" />
        }
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="ease-in"
        key={colorMode}
      />
    </>
  );
};
