import { Box, Stack, Text } from '@chakra-ui/react';
import { useTranslation, Trans } from 'next-i18next';
import React from 'react';

/* eslint-disable-next-line */
export type ContactCompleteProps = {};

export const ContactComplete = (_props: ContactCompleteProps) => {
  const { t } = useTranslation();

  return (
    <Box pt="8" pb="16">
      <Stack spacing={{ base: '4', md: '6' }} textAlign="center">
        <Stack spacing="4">
          <Text fontWeight="semibold" color="accent" fontSize="3xl">
            {t('Submitted!')}
          </Text>
        </Stack>
        <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl" color="muted">
          <Trans>
            An auto-reply email has been sent to you.
            <br />
            Please check your inbox.
          </Trans>
        </Text>
      </Stack>
    </Box>
  );
};

export default ContactComplete;
