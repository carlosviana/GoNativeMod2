import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{repository.full_name}</Text>
    <View style={styles.infoContainer}>
      <Icon name="star" size={12} style={styles.infoIcon} />
      <Text style={styles.infoText}>{repository.stargazers_count}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Icon name="code-fork" size={12} style={styles.infoIcon} />
      <Text style={styles.infoText}>{repository.forks_count}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Icon name="eye" size={12} style={styles.infoIcon} />
      <Text style={styles.infoText}>{repository.watches_count}</Text>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watches_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
