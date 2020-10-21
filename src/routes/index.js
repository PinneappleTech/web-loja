import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Clientes from '../pages/Clientes';
import Caixa from '../pages/Caixa';
import Contas from '../pages/Contas';
import Produtos from '../pages/Produtos';
import Vendas from '../pages/Vendas';
import Funcionarios from '../pages/Funcionarios';
import AddClientes from '../pages/AddClientes';
import InfoClient from '../pages/InfoClients';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/clientes" component={Clientes} isPrivate />
    <Route path="/caixa" component={Caixa} isPrivate />
    <Route path="/contas" component={Contas} isPrivate />
    <Route path="/produtos" component={Produtos} isPrivate />
    <Route path="/vendas" component={Vendas} isPrivate />
    <Route path="/add-clientes" component={AddClientes} isPrivate />
    <Route path="/funcionarios" component={Funcionarios} isPrivate />
    <Route path="/info-clientes/:id" component={InfoClient} isPrivate />
  </Switch>
);

export default Routes;
