import ImagePicker from 'react-native-image-picker';

export const chooseFile = (setFile: any) => {
  ImagePicker.showImagePicker({
    title: 'Selecione uma imagem',
      customButtons: [
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
  }, (response: any) => {
  
    if (response.didCancel) {
      console.log('Usuário cancelou escolha.');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      setFile({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri
      });
    }
  });
}