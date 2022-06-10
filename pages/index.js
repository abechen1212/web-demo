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
import { setUser } from '../store/slices/userSlice.js';
import { appendFeatures } from '../store/slices/featuresSlice.js';
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/features');

  return {
    props: {
      features: res.data,
    }, // will be passed to the page component as props
  };
}

export default function Home({ features }) {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  // 載入時, 將所有 feature 存入 featuresSlice
  useEffect(() => {
    dispatch(appendFeatures(features));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
  const {
    handleSubmit,
    register,
    setError, //! for api fetching: setError(name, {message: error})
    formState: { errors, isSubmitting },
  } = useForm();

  // console.log('errors', errors);

  const onSubmit = async (data) => {
    // console.log('formdata', data);
    //! POST to server
    await axios
      .post('http://localhost:3000/api/login', { username: data.userName })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
        toast({
          title: 'Login your account',
          description: 'You are logged in',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        router.push('/platform');
      })
      .catch((err) => {
        console.log(err.response.data);
        setError('userName', { message: err.response.data.error });
      });
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
          <FormControl isInvalid={errors.userName}>
            <Input
              type="text"
              id="userName"
              placeholder="User ID"
              {...register('userName', {
                required: 'User ID is required',
                minLength: {
                  value: 5,
                  message: 'User ID must be at least 5 characters',
                },
              })}
            />
            <FormErrorMessage>
              {errors.userName && errors.userName.message}
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
