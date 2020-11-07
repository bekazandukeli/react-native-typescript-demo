import * as React from 'react';
import {Path, Svg} from 'react-native-svg';

export default function SearchIcon(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M6.5 0A6.5 6.5 0 0113 6.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 016.5 13a6.5 6.5 0 110-13zm0 2C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2z"
        fill={props.color}
      />
    </Svg>
  );
}
