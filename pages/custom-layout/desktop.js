import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Button, Heading } from '@chakra-ui/react';
import RGL, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {
  Warranty,
  BikeInfo,
  Diagnosis,
  Parts,
  Iventory,
  Maintenance,
  Mileage,
} from '../../components/desktop/features/index.js';
import { appendLayout } from '../../store/slices/buildSlice';

const ReactGridLayout = WidthProvider(RGL);

const defaultLayout = [
  { i: '1', x: 0, y: 0, w: 2, h: 2.8, featureType: 'warranty' },
  { i: '2', x: 2, y: 0, w: 2, h: 2.8, featureType: 'bikeInfo' },
  { i: '3', x: 4, y: 0, w: 2, h: 2.8, featureType: 'mileage' },
  { i: '4', x: 6, y: 0, w: 2, h: 2.8, featureType: 'maintenance' },
  { i: '5', x: 8, y: 0, w: 2, h: 2.8, featureType: 'iventory' },
  { i: '6', x: 0, y: 2, w: 3, h: 2, featureType: 'diagnosis' },
  { i: '7', x: 3, y: 2, w: 7, h: 2, featureType: 'parts' },
];

export default function Desktop() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userPreferences = useSelector(
    (state) => state.features.userPreferences
  );
  const userID = useSelector((state) => state.user.userID);

  useEffect(() => {
    if (userID === '') {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('userID', userID);
  console.log('userPreferences', userPreferences);

  const [layout, setLayout] = useState([]);

  const onLayoutChange = (layout) => {
    console.log(layout);
    setLayout(layout);
  };

  const stringifyLayout = () => {
    return layout.map((l) => {
      return (
        <div className="layoutItem" key={l.i} style={{ marginLeft: '1rem' }}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  };

  const handleLayoutSubmit = () => {
    dispatch(appendLayout(layout));
    console.log('Submit layout!');
    router.push('/information');
  };

  return (
    <Box
      px={4}
      pt={3}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mb={10}
    >
      <Heading as="h1" size="lg" my={3}>
        Setting Application Layout
      </Heading>
      {/* <div style={{ display: 'flex' }}>{stringifyLayout()}</div> */}
      <Box
        mt={2}
        style={{
          // overFlow: 'hidden',
          minHeight: '860px',
          width: '1530px',
          // border: '1px solid red',
          // color: '#D8D8D8',
        }}
        color="#D8D8D8"
        backgroundColor="#0D172A"
        userSelect="none"
      >
        <Box
          as="nav"
          height="15vh"
          display="flex"
          justifyContent="start"
          alignItems="center"
          mx={8}
        >
          <Heading>Service Tool Demo</Heading>
        </Box>
        <ReactGridLayout
          style={{
            minHeight: '770px',
            width: '1530px',
            // border: '1px solid black',
          }}
          measureBeforeMount={true}
          compactType="vertical"
          cols={10}
          autoSize={true}
          isRearrangeable={true}
          // width={1530}
          // height={860}
          isBounded={true}
          isResizable={false}
          onLayoutChange={onLayoutChange}
        >
          {userPreferences.map((item) => {
            const { i, ...dataGrid } = item;
            return (
              <Box
                key={i}
                color="#D8D8D8"
                // bg="gray.200"
                data-grid={{ ...dataGrid }}
                // position="relative"
              >
                {/* if featureID = i, show components, so here will have lots of components */}
                {i === '1' && <Warranty />}
                {i === '2' && <BikeInfo />}
                {i === '3' && <Mileage />}
                {i === '4' && <Maintenance />}
                {i === '5' && <Iventory />}
                {i === '6' && <Diagnosis />}
                {i === '7' && <Parts />}
              </Box>
            );
          })}
        </ReactGridLayout>
      </Box>
      <Box mt={3}>
        <Button onClick={handleLayoutSubmit}>Submit</Button>
      </Box>
    </Box>
  );
}
