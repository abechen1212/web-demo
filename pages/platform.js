import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  ButtonGroup,
  Button,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { setSelectPlatform } from '../store/slices/featuresSlice.js';
import { resetUser } from '../store/slices/userSlice.js';

import { platforms } from '../constants/platform';

export default function Platform() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const defaultPlatforms = Object.values(platforms);
  // console.log('defaultPlatform', defaultPlatforms);
  // console.log('errors', errors);
  const onSubmit = (data) => {
    dispatch(setSelectPlatform(data.platform));
    router.push('/features');
  };

  const handleBack = () => {
    dispatch(resetUser());
    router.back();
  };

  return (
    <Box
      px={4}
      pt={3}
      mt={2}
      h="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" size="lg">
        Choose Platform
      </Heading>
      <form style={{ marginTop: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.platform}>
          <RadioGroup>
            <Stack direction="column">
              {defaultPlatforms.map((platform) => (
                <Radio
                  key={platform}
                  value={platform}
                  {...register('platform', {
                    required: 'Please select a platform',
                  })}
                >
                  {platform}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <FormErrorMessage>
            {errors.platform && errors.platform.message}
          </FormErrorMessage>
        </FormControl>
        <ButtonGroup gap="4" mt={4}>
          <Button colorScheme="red" onClick={handleBack}>
            Back
          </Button>
          <Button colorScheme="green" isLoading={isSubmitting} type="submit">
            Next
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
