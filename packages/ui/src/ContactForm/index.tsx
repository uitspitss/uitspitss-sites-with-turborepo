import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: z.string(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export type ContactFormProps = {
  onSubmit: (data: FormData) => Promise<void>;
};

export const ContactForm = (props: ContactFormProps) => {
  const { onSubmit } = props;
  const { t } = useTranslation('ui');

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onValid = useCallback(
    async (data: FormData) => {
      await onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <Container minW={{ base: 'xs', sm: 'sm', md: 'md' }} maxW="lg">
      <form onSubmit={handleSubmit(onValid)} noValidate>
        <Stack spacing="10">
          <FormControl isRequired isInvalid={errors.email && dirtyFields.email}>
            <FormLabel htmlFor="email" variant="floating" size="md">
              {t('email address')}
            </FormLabel>
            <Input id="email" size="md" type="email" {...register('email')} />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={errors.name && dirtyFields.name}>
            <FormLabel htmlFor="name" variant="floating" size="md">
              {t('name')}
            </FormLabel>
            <Input id="name" size="md" {...register('name')} />
            {errors.name && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            isInvalid={errors.subject && dirtyFields.subject}
          >
            <FormLabel htmlFor="subject" variant="floating" size="md">
              {t('subject')}
            </FormLabel>
            <Input id="subject" size="md" {...register('subject')} />
            {errors.subject && (
              <FormErrorMessage>{errors.subject.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            isRequired
            isInvalid={errors.message && dirtyFields.message}
          >
            <FormLabel htmlFor="message" variant="floating" size="md">
              {t('message')}
            </FormLabel>
            <Textarea
              id="message"
              size="md"
              as={TextareaAutosize}
              minRows={5}
              {...register('message')}
            />
            {errors.message && (
              <FormErrorMessage>{errors.message.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" isLoading={isSubmitting}>
            {t('submit')}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
