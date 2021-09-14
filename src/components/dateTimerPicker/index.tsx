import React, { useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker'

interface IProps {
  open: boolean;
  setOpen(open: boolean): void;
  date: Date;
  setDate(date: Date): void;
}
const DatePickerChosen = ({ open, setOpen, date, setDate }: IProps) => {

  return (
    <>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        onDateChange={setDate}
      />
    </>
  )
};

export default DatePickerChosen;