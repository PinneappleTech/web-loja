import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@annaStore:token');
    const user = localStorage.getItem('@annaStore:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });
  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/auth/login/', {
      username,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@annaStore:token', token);
    localStorage.setItem('@annaStore:user', JSON.stringify(user));

    setData({ token, user });
  }, []);
  const signOut = useCallback(() => {
    localStorage.removeItem('@annaStore:token');
    localStorage.removeItem('@annaStore:user');

    setData({});
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth só pode ser usado com o AuthProvider');
  }

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
export { AuthProvider, useAuth };
