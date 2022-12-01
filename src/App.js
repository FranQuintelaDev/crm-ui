import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Opportunities from './pages/Opportunities';
import OpportunitiesClientsList from './pages/OpportunitiesClientsList';
import OpportunitiesDetail from './pages/OpportunitiesDetail';
import OpportunitiesList from './pages/OpportunitiesList';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
          <Route path="/opportunities" element={<Opportunities />}>
          <Route
              path="/opportunities/clients"
              element={<OpportunitiesClientsList />}
            />
            <Route
              path="/opportunities/:opportunityId"
              element={<OpportunitiesDetail />}
            />
            <Route path="" element={<OpportunitiesList />} />
          </Route>
        </Routes>
      </Layout>
    );
  }
}
