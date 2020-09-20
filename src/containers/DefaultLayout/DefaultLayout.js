import React, { Component, Suspense } from 'react';
import { Image, Container } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Images } from '../../images';
import routes from '../../routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));
const Page500 = React.lazy(() => import('../../views/Pages/Page500'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center"></div>

  render() {
    return (
      <div>
        <Suspense fallback={this.loading()} >
          <DefaultHeader {...this.props} />
        </Suspense>
        <Suspense fallback={this.loading()} >
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route exact path="*" name="Page 404" render={props => <Page404 {...props}/>} />
            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </Suspense>
        <Suspense fallback={this.loading()}>
          <DefaultFooter />
        </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
