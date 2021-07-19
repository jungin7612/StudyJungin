import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import WhoamIPAge from './pages/WhoAmI';
import ReportCardPAge from './pages/ReportCard';
import DailyPlannerPAge from './pages/DaliyPlanner';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
       <Switch>
        <Route path="/" exact>
          <WhoamIPAge />
        </Route>
        <Route path="/reportcard">
          <ReportCardPAge />
        </Route>
        <Route path="/dailyplan">
          <DailyPlannerPAge />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
