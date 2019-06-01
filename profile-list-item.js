'use strict';

const e = React.createElement;

class ProfileListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (this.props.range) {
          return e(
            "div",
            { className: "food-menu" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-9 col-sm-8" },
                React.createElement(
                  "h3",
                  { className: "food-menu-title white-text text-bold" },
                  this.props.title
                ),
                React.createElement(
                  "div", { className: "food-menu-detail white-text"},
                  this.props.description
                )
              ),
              React.createElement(
                "div", {
                className: "col-md-3 col-sm-4 food-menu-price-detail"},
                React.createElement(
                  "h3",
                  { className: "food-menu-price white-text text-medium" },
                  this.props.range
                )
              )
            )
          );
      }
      return e(
            "div",
            { className: "food-menu" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-md-12 col-sm-11" },
                React.createElement(
                  "h3",
                  { className: "food-menu-title white-text text-bold" },
                  this.props.title
                ),
                React.createElement(
                  "div", { className: "food-menu-detail white-text"},
                  this.props.description
                )
              )
            )
          );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.profile_list_item')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const title = domContainer.dataset.title;
    const description = domContainer.dataset.description;
    const range = domContainer.dataset.range;
    ReactDOM.render(
      e(ProfileListItem, { title: title, description: description, range: range }),
      domContainer
    );
  });

//
//"use string";
//
//class ProfileListItem extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//    
//    render() {
//        return React.createElement("div", {
//  class: "food-menu"
//}, React.createElement("div", {
//  class: "row"
//}, React.createElement("div", {
//  class: "col-md-9 col-sm-8"
//}, React.createElement("h3", {
//  class: "food-menu-title white-text text-bold"
//}, "this.props.title"), React.createElement("div", {
//  class: "food-menu-detail white-text"
//}, "Numerous classes completed ranging from Android development to Machine Learning and Self-Driving Cars.")), React.createElement("div", {
//  class: "col-md-3 col-sm-4 food-menu-price-detail"
//}, React.createElement("h3", {
//  class: "food-menu-price white-text text-medium"
//}, "2016 - Ongoing"))));
//      return e(
//        <div class="food-menu">
//          <div class="row">
//            <div class="col-md-9 col-sm-8">
//              <h3 class="food-menu-title white-text text-bold">this.props.title</h3>
//              <div class="food-menu-detail white-text">Numerous classes completed ranging from Android development to Machine Learning and Self-Driving Cars.</div>
//            </div>
//            <div class="col-md-3 col-sm-4 food-menu-price-detail">
//              <h3 class="food-menu-price white-text text-medium">2016 - Ongoing</h3>
//            </div>
//          </div>
//        </div>
//      )
//    }
//}
//
//document.querySelectorAll('.profile_list_item')
//  .forEach(domContainer => {
//    ReactDOM.render(ProfileListItem, domContainer);
//})
//const domContainer = document.querySelector('#profile_list_item');
//ReactDOM.render(ProfileListItem, domContainer);