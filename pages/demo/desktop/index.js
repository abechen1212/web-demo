import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
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
  { i: '1', x: 0, y: 0, w: 2, h: 2.8, featureType: 'warranty' },
  { i: '2', x: 2, y: 0, w: 2, h: 2.8, featureType: 'bikeInfo' },
  { i: '3', x: 4, y: 0, w: 2, h: 2.8, featureType: 'mileage' },
  { i: '4', x: 6, y: 0, w: 2, h: 2.8, featureType: 'maintenance' },
  { i: '5', x: 8, y: 0, w: 2, h: 2.8, featureType: 'iventory' },
  { i: '6', x: 0, y: 2, w: 3, h: 2, featureType: 'diagnosis' },
  { i: '7', x: 3, y: 2, w: 7, h: 2, featureType: 'parts' },
];

// react buffer to image
// const img = new Buffer.from(data).toString('base64');

export default function Demo() {
  const buildData = useSelector((state) => state.build.buildData);
  console.log('buildData', buildData);

  //! How to convert byte array to base64 string display on react
  // const base64String = (imgByteAry) =>
  //   btoa(String.fromCharCode(...new Uint8Array(imgByteAry)));

  // useEffect(() => {
  //   getBuildData(userID);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userID]);

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
      >
        {/* <NextImage src={base64String} height="150px" width="150px" /> */}
        {buildData?.layout?.map((item) => {
          const { i, ...dataGrid } = item;
          return (
            <Box
              key={i}
              // bg="gray.200"
              data-grid={{ ...dataGrid }}
            >
              {/* if featureID = i, show components, so here will have lots of components */}
              {i === '1' && <Warranty />}
              {i === '2' && <BikeInfo />}
              {i === '3' && <Mileage />}
              {i === '4' && <Maintenance />}
              {i === '5' && <Iventory />}
              {i === '6' && <Diagnosis mode="demo" />}
              {i === '7' && <Parts />}
            </Box>
          );
        })}
      </ReactGridLayout>
    </DesktopLayout>
  );
}
