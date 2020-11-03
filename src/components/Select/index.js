import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container, IconContainer, SelectConatiner, Error } from './styles';

const Select = ({ name, icon: Icon, options, label, placeholder, ...rest }) => {
  const selectRef = useRef(null);
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
    setIsFilled(!!selectRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container label={label}>
      <label htmlFor={name}>{label}</label>
      <SelectConatiner
        isErrored={errorField}
        isFilled={isFilled}
        isFocused={isFocused}
        placeholder={placeholder}
      >
        <select
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={selectRef}
          defaultValue={defaultValue}
          value={defaultValue}
          {...rest}
        >
          {label && (
            <option value="" selected disabled>
              {`${placeholder}`}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {Icon && (
          <IconContainer>
            <Icon size={22} color="#FFC92E" />
          </IconContainer>
        )}
      </SelectConatiner>
      {errorField && <Error>{error}</Error>}
    </Container>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.func,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Select.defaultProps = {
  icon: undefined,
};

export default Select;
