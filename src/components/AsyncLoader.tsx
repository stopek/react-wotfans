import * as React from 'react';

interface IProps {}

interface IState {}

export default class AsyncLoader extends React.Component<IProps & LoadableExport.LoadingComponentProps, IState> {
  public render(): JSX.Element {
    if (this.props.error) {
      return (
        <h3>
          Could not load content. <button onClick={this.props.retry}>Retry</button>
        </h3>
      );
    } else if (this.props.timedOut) {
      return (
        <h2>
          Taking longer than expected... <button onClick={this.props.retry}>Retry</button>
        </h2>
      );
    } else if (this.props.pastDelay) {
      return <h2>Loading...</h2>;
    } else {
      return <>.</>;
    }
  }
}
