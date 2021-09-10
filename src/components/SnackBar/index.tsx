import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { error, attention } from '../../constants/color';
import { Warnings } from '../../types/index';

interface IProps {
  message: string;
  visible: boolean;
  type: string;
  onClose(): void;
}
const Toast = ({ message, visible, type, onClose }: IProps) => {

  return (
    <Snackbar
      visible={visible}
      style={{ backgroundColor: type === Warnings.ERROR ? error : attention }}
      onDismiss={onClose}
      // action={{
      //   label: 'Fechar',
      //   color: '#fff',
      //   onPress: () => console.log("eeee"),
      // }}
    >
      {message}
    </Snackbar>
  )
}

export default Toast;