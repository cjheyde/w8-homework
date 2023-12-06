import * as React from "react";

// HOC
export function withColor(Component) {
  return class extends React.Component {
    state = {
      primaryColor: true,
    };

    handleClick = () =>
      this.setState((s) => ({
        primaryColor: !s.primaryColor,
      }));

    componentDidMount() {
      console.log("withColor componentDidMount");
    }

    render() {
      return (
        <Component
          {...this.props}
          primaryColor={this.state.primaryColor}
          togglePrimaryColor={this.handleClick}
        />
      );
    }
  };
}
