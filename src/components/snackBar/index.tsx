import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { error, attention, success } from '../../constants/color';
import { Warnings } from '../../types/index';

interface IProps {
  message: string;
  visible: boolean;
  type: Warnings;
  onClose(): void;
}
const Toast = ({ message, visible, type, onClose }: IProps) => {
  
  const handleColor = (type: Warnings) => {
    switch (type) {
      case Warnings.ERROR:
        return error;
      case Warnings.ATTENTION:
        return attention;
      case Warnings.SUCCESS:
        return success;
      default:
        return success;
    }
  };

  return (
    <Snackbar
      visible={visible}
      style={{ backgroundColor: handleColor(type) }}
      onDismiss={onClose}
    >
      {message}
    </Snackbar>
  )
}

export default Toast;