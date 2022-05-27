import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Box,
  Heading,
  Input,
  Button,
  useToast,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { setUserID } from '../store/slices/userSlice.js';
import { appendFeatures } from '../store/slices/featuresSlice.js';
import fakeData from '../db.json';

export default function Home() {
  const toast = useToast();
  const router = useRouter();
  //https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
  const {
    handleSubmit,
    register,
    setError, //! for api fetching: setError(name, {message: error})
    formState: { errors, isSubmitting },
  } = useForm();

  // console.log('errors', errors);
  const dispatch = useDispatch();
  // 載入時, 將所有 feature 存入 featuresSlice
  useEffect(() => {
    dispatch(appendFeatures(fakeData.features));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {
    //! POST to server

    console.log('data', data);
    dispatch(setUserID(data.userID));
    toast({
      title: 'Login your account',
      description: 'You are logged in',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    router.push('/platform');
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
        Enter Your User ID
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={5}>
          <FormControl isInvalid={errors.userID}>
            <Input
              type="text"
              id="userID"
              placeholder="User ID"
              {...register('userID', {
                required: 'User ID is required',
                minLength: {
                  value: 5,
                  message: 'User ID must be at least 5 characters',
                },
              })}
            />
            <FormErrorMessage>
              {errors.userID && errors.userID.message}
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Button mt={2} w="full" isLoading={isSubmitting} type="submit">
          Next
        </Button>
      </form>
    </Box>
  );
}
