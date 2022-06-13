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
import DesktopLayout from '../../../components/layout/demo/Desktop.js';
import { setUser } from '../../../store/slices/userSlice.js';
import { appendBuildData } from '../../../store/slices/buildSlice';
import axios from 'axios';

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  //https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
  const {
    handleSubmit,
    register,
    setError, //* for api fetching: setError(name, {message: error})
    formState: { errors, isSubmitting },
  } = useForm();

  // console.log('errors', errors);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        username: data.userName,
      });
      const userID = res.data.user_id;
      const buildResponse = await axios.get(
        `http://localhost:3000//api/build/${userID}`
      );
      dispatch(setUser(res.data));
      dispatch(appendBuildData(buildResponse.data));
      // console.log(res.data);
      toast({
        title: 'Login your account',
        description: 'You are logged in',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      router.push('/demo/desktop');
    } catch (error) {
      console.log(error.response.data);
      setError('userName', { message: error.response.data.error });
    }
  };

  return (
    <DesktopLayout>
      <Box
        px={4}
        pt={3}
        h="90vh"
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
                borderColor="white"
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
          <Button
            mt={2}
            w="full"
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Next
          </Button>
        </form>
      </Box>
    </DesktopLayout>
  );
}
