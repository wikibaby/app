import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Button from '../../components/Button';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import { COLORS } from '../../styles';
import Logo from '../../images/wb-logo.png';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  buttons: {
    flexDirection: 'row',
  },
  error: {
    height: 28,
    justifyContent: 'center',
    width: window.width,
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.errorText,
    fontSize: 14,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  logo: {
    width: 125,
    height: 125,
  },
});

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={Logo}
        />
      </View>

      <InputWrapper>
        <GenericTextInput
          placeholder="Email"
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          placeholder="Senha"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="Confirme a senha"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        : null}
      </InputWrapper>

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button text="Login" onPress={signIn} />
        <Button text="Criar Conta" onPress={createAccount} />
      </View>

      <KeyboardSpacer />
    </View>
  );
};

SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;
