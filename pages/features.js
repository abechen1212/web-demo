import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import fakeData from '../db.json';
import {
  Box,
  Heading,
  Stack,
  Checkbox,
  CheckboxGroup,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { platforms } from '../constants/platform';
import { appendUserPreferences } from '../store/slices/featuresSlice.js';

const defaultLayout = [
  { i: '1', x: 0, y: 0, w: 2, h: 2.8, featureType: 'warranty' },
  { i: '2', x: 2, y: 0, w: 2, h: 2.8, featureType: 'bikeInfo' },
  { i: '3', x: 4, y: 0, w: 2, h: 2.8, featureType: 'mileage' },
  { i: '4', x: 6, y: 0, w: 2, h: 2.8, featureType: 'maintenance' },
  { i: '5', x: 8, y: 0, w: 2, h: 2.8, featureType: 'iventory' },
  { i: '6', x: 0, y: 2, w: 3, h: 2, featureType: 'diagnosis' },
  { i: '7', x: 3, y: 2, w: 7, h: 2, featureType: 'parts' },
];

export default function Features() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectPlatform = useSelector((state) => state.features.selectPlatform);

  const { handleSubmit, control } = useForm({
    featurePerference: {},
  });

  const allfeatures = useSelector((state) => state.features.features);
  const featuresbyPlatform = allfeatures.filter(
    (item) => item.platform === selectPlatform
  );
  console.log('featuresbyPlatform', featuresbyPlatform);

  const onSubmit = (data) => {
    let selectedFeatures = [];
    console.log('select data', data);
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        const currentFeature = defaultLayout.find((item) => item.i === key);
        selectedFeatures.push(currentFeature);
      }
    }

    if (selectedFeatures.length < 4) {
      alert('Please select at least 4 features');
      return;
    }

    dispatch(appendUserPreferences(selectedFeatures));

    switch (selectPlatform) {
      case platforms.IOS:
        router.push('/custom-layout/mobile');
        break;
      case platforms.WINDOWS:
        router.push('/custom-layout/desktop');
        break;

      default:
        break;
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
        Choose Features
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box maxW="xs" borderWidth="1px" borderRadius="md" px={4} py={2} mt={4}>
          <CheckboxGroup>
            <Stack spacing={1} direction="column">
              {featuresbyPlatform.map((featureItem) => (
                <Controller
                  control={control}
                  name={`${featureItem.feature_id}`}
                  key={featureItem.feature_id}
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      size="md"
                      ref={ref}
                      isChecked={value}
                    >
                      {featureItem.name}
                    </Checkbox>
                  )}
                ></Controller>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
        <ButtonGroup gap="4" mt={3}>
          <Button colorScheme="red" onClick={() => router.back()}>
            Back
          </Button>
          <Button colorScheme="green" type="submit">
            Next
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
