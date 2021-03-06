
import React from 'react';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux-stuff/actions/products'
import {Button, FormGroup, FormControl} from 'react-bootstrap';
export const REQUEST_GET_URL = 'http://search.testapp123.com/search-result';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
        }
    }

    handleClick() {
        this.props.dispatch(fetchProducts(REQUEST_GET_URL+'?q='+this.state.value));
        browserHistory.push('/search-result-page');
    }

    getValue(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className="text-center searchPageContent">
                <h1 className="searchTitle">SEARCH OUR SITE</h1>
                <div className="searchForm oSearchForm0">
                    <div className="input-group">
                        <input type="search" placeholder="Search" onChange={(e) => this.getValue(e)}/>
                        <span className="input-group-btn">
                            <button className="btn searchBtn" onClick={() => this.handleClick()}>Submit</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

const productsStateToProps = state => (
    {
        products: state.products,
    }
);
  
export default connect(productsStateToProps)(SearchIndex)

