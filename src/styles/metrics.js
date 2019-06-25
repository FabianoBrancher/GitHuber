import { Dimensions } from 'react-native';

// retorna a largura e altura do celular do usuário
// conseguimos fazer adaptações dentro da interface
// baseado na altura e largura (ex: deixar de mostrar algo)
const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
