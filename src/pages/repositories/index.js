import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
// import { Container } from './styles';

const Repositories = () => (
  <View>
    <Header title="Repositórios" />

  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

// propriedade estática
Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};
// navigationOptions é a propriedade que o react-native
// vai buscar dentro de cada página para ver configurações específicas

export default Repositories;
