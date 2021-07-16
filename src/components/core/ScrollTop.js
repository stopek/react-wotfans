import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTop({ history, children, ...props }) {
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
