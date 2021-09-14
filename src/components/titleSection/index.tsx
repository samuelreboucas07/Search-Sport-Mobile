import React from 'react';
import { View } from 'react-native';
import { Divider, Subheading } from 'react-native-paper';
import { styles } from './styles';

interface IProps {
  title: string;
  style?: object;
}

const TitleSection = ({title, style}: IProps) => {
  return (
    <View style={style}>
      <Subheading style={styles.title}>{title}</Subheading>
      <Divider style={styles.divider} />
    </View>
  )
}

export default TitleSection;