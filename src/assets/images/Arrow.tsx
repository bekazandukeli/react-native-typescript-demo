import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

export default function Arrow(props) {
  return (
    <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
      <Path d="M0 1.41L4.58 6 0 10.59 1.41 12l6-6-6-6L0 1.41z" fill="#382A2C" />
    </Svg>
  );
}
