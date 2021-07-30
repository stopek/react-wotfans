import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ScrollTopInterface extends RouteComponentProps<any> {
  children: JSX.Element | JSX.Element[];
}

function ScrollTop({ history, children, ...props }: ScrollTopInterface) {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unListen();
    };
  }, [history, props.location.pathname]);

  return <>{children}</>;
}

export default withRouter(ScrollTop);
