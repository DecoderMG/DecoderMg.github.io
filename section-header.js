'use strict';

const sectionHeader = React.createElement;

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (this.props.description) {
        return sectionHeader(
          "div",
          { className: "text-center mb-80" },
          React.createElement(
            "h2",
            { className: "section-title text-uppercase" },
            this.props.title),
            React.createElement(
              "p",
              { className: "section-sub" },
              this.props.description
            )
        );
      }
      return sectionHeader(
          "div",
          { className: "text-center mb-80" },
          React.createElement(
            "h2",
            { className: "section-title text-capitalize" },
            this.props.title
          )
        )
  }
}

document.querySelectorAll('.section-header')
  .forEach(domContainer => {
    const title = domContainer.dataset.title;
    const description = domContainer.dataset.description;
    ReactDOM.render(
      e(SectionHeader, { title: title, description: description }),
      domContainer
    );
  });