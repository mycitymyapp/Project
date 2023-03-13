import React, { useState, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

function Popup() {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const handleModalOpen = () => {
    setModalVisible(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleModalClose = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const slideFromBottom = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [600, 0],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text style={styles.button}>Open Popup</Text>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity onPress={handleModalClose} style={styles.backdrop}>
          <Animated.View style={[styles.modal, slideFromBottom]}>
            <TouchableOpacity onPress={handleModalClose}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalText}>This is the popup window!</Text>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 18,
    color: '#007aff',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 20,
    height: '50%',
  },
  closeButton: {
    fontSize: 20,
    color: '#007aff',
    alignSelf: 'flex-end',
  },
  modalText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default Popup;