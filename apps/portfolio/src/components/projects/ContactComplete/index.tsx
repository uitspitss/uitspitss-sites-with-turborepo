import { Box, Stack, VStack, Text } from '@chakra-ui/react';
import { useTranslation, Trans } from 'react-i18next';

type ContactCompleteProps = unknown;

export const ContactComplete = (_props: ContactCompleteProps) => {
  const { t } = useTranslation('common');

  return (
    <Box pt="8" pb="16">
      <VStack spacing={{ base: '4', md: '6' }} textAlign="center">
        <Stack spacing="4">
          <Text fontWeight="semibold" color="accent" fontSize="3xl">
            {t('Submitted!')}
          </Text>
        </Stack>
        <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" color="muted">
          <Trans t={t}>
            An auto-reply email has been sent to you.
            <br />
            Please check your inbox.
          </Trans>
        </Text>
      </VStack>
    </Box>
  );
};

export default ContactComplete;
