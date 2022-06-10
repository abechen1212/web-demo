import NextImage from 'next/image';
import { useSelector } from 'react-redux';
import { Box, Button, Heading } from '@chakra-ui/react';
import RGL, { WidthProvider } from 'react-grid-layout';
import DesktopLayout from '../../../components/layout/demo/Desktop.js';
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
} from '../../../components/desktop/features/index.js';

const ReactGridLayout = WidthProvider(RGL);

const defaultLayout = [
  { i: '2', x: 0, y: 0, w: 2, h: 2.8, featureType: 'warranty' },
  { i: '6', x: 2, y: 0, w: 2, h: 2.8, featureType: 'bikeInfo' },
  { i: '3', x: 4, y: 0, w: 2, h: 2.8, featureType: 'mileage' },
  { i: '4', x: 6, y: 0, w: 2, h: 2.8, featureType: 'maintenance' },
  { i: '7', x: 8, y: 0, w: 2, h: 2.8, featureType: 'iventory' },
  { i: '1', x: 0, y: 2, w: 3, h: 2, featureType: 'diagnosis' },
  { i: '5', x: 3, y: 2, w: 7, h: 2, featureType: 'parts' },
];

export default function Demo() {
  return (
    <DesktopLayout>
      <ReactGridLayout
        measureBeforeMount={true}
        compactType="vertical"
        cols={10}
        autoSize={true}
        isRearrangeable={true}
        isDraggable={false}
        // width={1530}
        // height={860}
        isBounded={true}
        isResizable={false}
        // onLayoutChange={onLayoutChange}
      >
        {defaultLayout.map((item) => {
          const { i, featureType, ...dataGrid } = item;
          return (
            <Box
              key={i}
              // bg="gray.200"
              data-grid={{ ...dataGrid }}
            >
              {/* if featureID = i, show components, so here will have lots of components */}
              {i === '1' && <Diagnosis mode="demo" />}
              {i === '2' && <Warranty />}
              {i === '3' && <Mileage />}
              {i === '4' && <Maintenance />}
              {i === '5' && <Parts />}
              {i === '6' && <BikeInfo />}
              {i === '7' && <Iventory />}
            </Box>
          );
        })}
      </ReactGridLayout>
    </DesktopLayout>
  );
}
