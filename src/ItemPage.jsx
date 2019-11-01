import React from "react";
import Header from "./Header.jsx";
//import {phones} from "./mydatabase.js";
import PropTypes from "prop-types";

class ItemPage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    fetch(`/api/items/${this.props.match.params.itemId}`)
    .then( res =>{
      return res.json();
    })
    .then( item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err =>{
      console.log("item page ",err);
    });
  };

    render(){
        //console.log("this.props", this.props);
        //console.log("itemID", this.props.match.params.itemId);

        //console.log("this.state", this.state);

        return (
          <>
            <Header/>
            <div className={"itemContainer"}>
                <img src={this.state.imgSrc} />
                <div className={"item_title"}>{this.state.title}</div>
                <div className={"item_price"}>{this.state.price}</div>
                {item.title}
            </div>
          </>
        );
    }
}


ItemPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ItemPage;

//