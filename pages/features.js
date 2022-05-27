import { useDispatch } from 'react-redux';
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

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    featurePerference: {},
  });
  // console.log(fakeData.features);
  const features = [...fakeData.features];
  console.log(features);

  const onSubmit = (data) => {
    let selectedFeatureIDs = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        selectedFeatureIDs.push(key);
      }
    }
    dispatch(appendUserPreferences(selectedFeatureIDs));
    console.log(data);
    router.push('/custom-layout');
  };

  return (
    <Box
      px={4}
      pt={3}
      mt={2}
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
              {features.map((functionItem) => (
                <Controller
                  control={control}
                  name={`${functionItem.id}`}
                  key={functionItem.id}
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      size="md"
                      ref={ref}
                      isChecked={value}
                    >
                      {functionItem.name}
                    </Checkbox>
                  )}
                ></Controller>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
        <ButtonGroup gap="4" mt={3}>
          <Button colorScheme="green" type="submit">
            Next
          </Button>
          <Button colorScheme="red" onClick={() => {}}>
            Back
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch(`http://localhost:3001/features`);
// 	const data = await res.json();

// 	// Pass data to the page via props
// 	return { props: { data } };
// }
