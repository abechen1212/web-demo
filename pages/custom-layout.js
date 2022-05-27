import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Heading } from '@chakra-ui/react';
import RGL, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

const defaultLayout = [
  { i: 'a', x: 0, y: 0, w: 2, h: 2, featureType: 'Bike Info' },
  { i: 'b', x: 2, y: 0, w: 2, h: 2, featureType: 'Part Diagnosis' },
  { i: 'c', x: 4, y: 0, w: 2, h: 2, featureType: 'Warranty' },
  { i: 'd', x: 6, y: 0, w: 2, h: 2, featureType: 'Mileage' },
  { i: 'e', x: 8, y: 0, w: 2, h: 2, featureType: 'Maintenance Record' },
  { i: 'f', x: 0, y: 2, w: 2, h: 2, featureType: 'Stocks Management' },
  { i: 'g', x: 2, y: 2, w: 8, h: 2, featureType: 'Parts' },
];

export default function GridLayout() {
  const userPreferences = useSelector(
    (state) => state.features.userPreferences
  );
  console.log(userPreferences);
  const [state, setState] = useState({
    layout: [],
  });

  const onLayoutChange = (layout) => {
    console.log(layout);
    setState({ layout: layout });
  };

  const stringifyLayout = () => {
    return state.layout.map((l) => {
      return (
        <div className="layoutItem" key={l.i} style={{ marginLeft: '1rem' }}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  };

  return (
    <Box
      px={4}
      pt={3}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" size="lg">
        Setting Application Layout
      </Heading>
      <div style={{ display: 'flex' }}>{stringifyLayout()}</div>
      <Box
        mt={2}
        style={{
          // overFlow: 'hidden',
          minHeight: '860px',
          width: '1530px',
          border: '1px solid red',
        }}
      >
        <Box
          style={{
            height: '75px',
            width: '1530px',
            border: '1px solid red',
          }}
        >
          navbar
        </Box>
        <ReactGridLayout
          className="custom-layout"
          style={{
            // overFlow: 'hidden',
            minHeight: '785px',
            width: '1530px',
            border: '1px solid black',
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
          {defaultLayout.map((item) => {
            const { i, featureType, ...dataGrid } = item;
            return (
              <Box key={i} bg="gray.200" data-grid={{ ...dataGrid }}>
                {featureType}
                {/* if featureID = i, show components, so here will have lots of components */}
              </Box>
            );
          })}
        </ReactGridLayout>
      </Box>
    </Box>
  );
}
