import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import symptomsData from "./../../data/symptoms.json"
import { useState,useEffect } from 'react';
import { useCallback } from 'react';

const limit = 3;

export default function SelectSymptoms({ clinic, setSymptoms,symptoms }) {
  const [listSymptoms, setListSymptoms] = useState([])
  const [limitReached, setLimitReached] = useState(false);
  const onSelect = useCallback((_,newValues) => {
    setSymptoms(newValues);
    setLimitReached(newValues.length >= limit);
  }, [limit]);

  const changeSymptoms = () => {
    const newListSymtoms = symptomsData.filter(item => item.dep_id == clinic?.id);
    setListSymptoms(newListSymtoms);
    setSymptoms([]);
    setLimitReached(false);
  }
  const checkDisable = useCallback(option => limitReached && !symptoms.includes(option), [limitReached, symptoms]);

  useEffect(() => {
    changeSymptoms();

  }, [clinic])

  return (

    <Autocomplete
      multiple
      size='small'
      id="tags-outlined"
      options={listSymptoms}
      getOptionDisabled={checkDisable}
      getOptionLabel={(option) => option.name}
      getOptionKey={(option) => option.index}
      filterSelectedOptions
      onChange={onSelect}
      value={symptoms}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select symptoms (max 3 symptoms)"
          placeholder="Symptoms"
          
        />
      )}
    />

  );
}
