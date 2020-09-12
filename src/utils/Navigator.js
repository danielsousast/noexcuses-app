import React from 'react';
import Navigator from '../routes/index';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  Navigator.navigate({name, params});
}
