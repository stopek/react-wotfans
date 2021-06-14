import { pushGA } from "helpers/GA";
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTop({ history, children, ...props }) {
  useEffect(() => {
    pushGA(props.location.pathname);

    const unListen = history.listen(() => {
      window.scrollTo(0, 0);

      const location = history.location;
      pushGA(location.pathname);
    });

    return () => {
      unListen();
    };
  }, [history, props.location.pathname]);

  return <>{children}</>;
}

export default withRouter(ScrollTop);