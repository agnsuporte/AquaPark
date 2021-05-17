import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const AquaParkPicker = props => {
  const {data, mode, selectedValue, onValueChange} = props;
  return(
    <Picker
      mode={mode ?  "dropdown" : "dialog"}
      selectedValue={selectedValue}
      onValueChange={ itemValue => onValueChange(itemValue) }
   >
      {
        data.map(i => <Picker.Item key={i.id} label={i.label} value={i.id} />)
      }
    </Picker>
  );
}

export default AquaParkPicker;
