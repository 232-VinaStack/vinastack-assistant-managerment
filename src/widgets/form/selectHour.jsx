import { Button, ButtonGroup } from '@material-tailwind/react';
import React, { useState } from 'react'

const SelectHour = ({ choose, setChoose }) => {
  const onClick = (item) => {
    setChoose(item);

  }
  return (
    <ButtonGroup variant="text" >
      {listHours.map(item => (
        <Button key={item.id} className={choose?.id == item?.id ? `border-solid border border-black` : ''} onClick={() => onClick(item)}>{item.hour}</Button>
      ))}
    </ButtonGroup>
  )
}
const listHours = [
  {
    id: 1, hour: '11:00 AM',
  },
  { id: 2, hour: '10:00 AM', },
  { id: 3, hour: '02:00 PM' }
]

export default SelectHour