import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

import TableInfo from './TableInfo';
import data from 'Data/data.json'

export default function SDGSInfo() {

  const [selectedValue, setSelectedValue] = useState([])

  const onSelectValue = (selectedList, selectedItem) => {
    setSelectedValue((prev) => ([
      ...prev,
      selectedItem
    ]))
  }

  const onRemoveValue = (selectedList, removedItem) => {
    const filteredList = selectedValue.filter((item) => item.id !== removedItem.id)
    setSelectedValue(filteredList)
  }

  const averageSDGIndexScore = () => {
    return selectedValue.reduce((r, c) => r + Number(c['2020 SDG Index Score']), 0) / selectedValue.length
  }

  return (
    <div className="container mx-auto m-5">
      <div className='mb-5'>
        <Multiselect 
          options={data}
          displayValue="Country"
          onSelect={onSelectValue}
          onRemove={onRemoveValue}
          keepSearchTerm={true}
        />
      </div>
      <TableInfo data={selectedValue} />
      
      {selectedValue.length >= 2 && (
        <div className='mt-5'>
          <p>2020 SDG Index Score average: {averageSDGIndexScore()}</p>
        </div>
      )}
    </div>
  )
}