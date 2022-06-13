import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  Box,
  Heading,
  Input,
  Button,
  ButtonGroup,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import axios from 'axios';

export default function Information() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLayout = useSelector((state) => state.build.layout);
  const userID = useSelector((state) => state.user.userID);
  const selectPlatform = useSelector((state) => state.features.selectPlatform);

  // console.log('userLayout', userLayout);
  // useEffect(() => {
  //   if (userID === '') {
  //     router.push('/');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //https://jasonwatmore.com/post/2021/09/13/react-hook-form-display-custom-error-message-returned-from-api-request
  const {
    handleSubmit,
    register,
    setError, //* for api fetching: setError(name, {message: error})
    formState: { errors, isSubmitting },
  } = useForm();
  console.log(errors);

  const [image, setImage] = useState('');
  const convert2Base64 = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  //傳送欄位 layout, app_name, version, description, logo_image, platform, user_id, logo_image

  const onSubmit = async (data) => {
    if (data.logoImg[0]) {
      console.log('logoImg', data.logoImg[0]);
      await convert2Base64(data.logoImg[0]);
      console.log('image', image);
    }

    const postData = {
      app_name: data.appName,
      description: data.description,
      layout: JSON.stringify(userLayout),
      version: data.version,
      platform: selectPlatform,
      user_id: userID,
      logo_image: image,
    };

    console.log('postData', postData);

    try {
      const res = await axios.post('http://localhost:3000/api/build', postData);
      // console.log(res);
      if (res.data.status === 'success') {
        //! router.push('/download');
      }
    } catch (error) {
      console.log(error);
    }
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
        Key In App Information
      </Heading>
      {/* {image ? <img src={image} width="450" /> : null} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={5}>
          <FormControl isInvalid={errors.appName}>
            <FormLabel htmlFor="appName">App Name</FormLabel>
            <Input
              type="text"
              id="appName"
              {...register('appName', {
                required: 'App name is required',
              })}
            />
            <FormErrorMessage>
              {errors.appName && errors.appName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.logoImg}>
            <FormLabel htmlFor="logoImg" mt={2}>
              Upload your logo
            </FormLabel>
            <input
              type="file"
              id="logoImg"
              {...register('logoImg', {
                required: 'App logo is required',
              })}
            />
            <FormErrorMessage>
              {errors.logoImg && errors.logoImg.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description}>
            <FormLabel htmlFor="description" mt={2}>
              App Description
            </FormLabel>
            <Textarea
              id="description"
              placeholder=""
              {...register('description', {
                required: 'Description is required',
              })}
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.version}>
            <FormLabel htmlFor="version" mt={2}>
              Version
            </FormLabel>
            <Input
              type="text"
              id="version"
              {...register('version', {
                required: 'Version is required',
              })}
            />
            <FormErrorMessage>
              {errors.version && errors.version.message}
            </FormErrorMessage>
          </FormControl>

          <ButtonGroup gap="4" mt={4} w="full" justifyContent="center">
            <Button colorScheme="red" onClick={() => {}}>
              Back
            </Button>
            <Button colorScheme="green" isLoading={isSubmitting} type="submit">
              Next
            </Button>
          </ButtonGroup>
        </Box>
      </form>
    </Box>
  );
}
