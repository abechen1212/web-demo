import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
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

const CheckBoxComponent = ({ featureID, functionName, togglePreference }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    togglePreference(featureID);
  };
  return (
    <Checkbox isChecked={checked} onChange={handleChange} size="md">
      {functionName}
    </Checkbox>
  );
};

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log(fakeData.features);
  const features = [...fakeData.features];
  const defaultValues = features.reduce(
    (previous, current) => ({ ...previous, [current.id]: false }),
    {}
  );
  const [selectedFeatures, setSelectedFeatures] = useState(defaultValues);

  const togglePreference = (featureID) => {
    setSelectedFeatures({
      ...selectedFeatures,
      [featureID]: !selectedFeatures[featureID],
    });
  };

  const handleSubmit = () => {
    router.push('/custom-layout');
  };

  // 將 user 選擇的 features 存入 featuresSlice
  useEffect(() => {
    let selectedFeatureIDs = [];
    for (let [key, value] of Object.entries(selectedFeatures)) {
      if (value) {
        selectedFeatureIDs.push(key);
      }
    }
    dispatch(appendUserPreferences(selectedFeatureIDs));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFeatures]);

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

      <Box maxW="xs" borderWidth="1px" borderRadius="md" px={4} py={2} mt={4}>
        <CheckboxGroup>
          <Stack spacing={1} direction="column">
            {features.map((functionItem) => (
              <CheckBoxComponent
                featureID={functionItem.id}
                functionName={functionItem.name}
                key={functionItem.id}
                togglePreference={togglePreference}
              />
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
      <ButtonGroup gap="4" mt={3}>
        <Button colorScheme="green" onClick={handleSubmit}>
          Next
        </Button>
        <Button colorScheme="red" onClick={() => {}}>
          Back
        </Button>
      </ButtonGroup>
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
