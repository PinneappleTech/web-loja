import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { currency, RG, CEP, CPF } from '../../utils/masked';
import { Container, Error } from './styles';

function InputForm({ name, label, mask, ...rest }) {
  const inputRef = useRef(null || '');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    if (error !== undefined) {
      setErrorField(true);
    }
  }, [error]);
  const handleInputFocus = useCallback(() => {
    setErrorField(false);
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  const masked = useCallback(
    e => {
      switch (mask) {
        case 'currency':
          currency(e);
          break;
        case 'rg':
          RG(e);
          break;
        case 'cep':
          CEP(e);
          break;
        case 'cpf':
          CPF(e);
          break;
        default:
          break;
      }
    },
    [mask],
  );
  return (
    <>
      <Container
        isErrored={errorField}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <label htmlFor={fieldName}>{label}</label>
        {mask ? (
          <input
            name={fieldName}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
            defaultValue={defaultValue}
            onKeyUp={e => masked(e)}
            {...rest}
          />
        ) : (
          <input
            name={fieldName}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
            defaultValue={defaultValue}
            {...rest}
          />
        )}
        {errorField && <Error>{error}</Error>}
      </Container>
    </>
  );
}

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
};

InputForm.defaultProps = {
  mask: undefined,
};

export default InputForm;
