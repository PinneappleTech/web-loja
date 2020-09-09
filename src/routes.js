import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Caixa from './pages/Caixa';
import Contas from './pages/Contas';
import Produtos from './pages/Produtos';
import Vendas from './pages/Vendas';
import Funcionarios from './pages/Funcionarios';
import AddClientes from './pages/AddClientes';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/clientes" component={Clientes} />
    <Route path="/caixa" component={Caixa} />
    <Route path="/contas" component={Contas} />
    <Route path="/produtos" component={Produtos} />
    <Route path="/vendas" component={Vendas} />
    <Route path="/add-clientes" component={AddClientes} />
    <Route path="/funcionarios" component={Funcionarios} />
  </Switch>
);

export default Routes;
