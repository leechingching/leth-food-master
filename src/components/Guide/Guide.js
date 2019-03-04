import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from 'axios';

import Suggestion from '../../components/Suggestion/Suggestion';

class Guide extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.value + ' in Guide')
    }

    state = {
        names: [],
        suggestion: null,
        address: null,
        suggested: false,
        list: [],
        updatedList: false
    }
    
    // https://developers.zomato.com/api/v2.1/search?entity_id=2891&entity_type=city&cuisines=168&sort=rating

    componentDidMount() {
        this.getZomato()
    }

    componentDidUpdate(prevProps, prevState) {
        
        if(prevProps.value !== this.props.value) {
                this.getZomato()
                this.setState({updatedList:true})
                console.log('The state is updated in the Guide component')
            
        }
    }

    getZomato() {
        const config = { headers: {'user-key': process.env.REACT_APP_WEATHER_API_KEY } };
        // The dault search value "American food"
        // If the user selected an option & submitted, we update the sortData value with the id
        axios.get(`/search?entity_id=2891&entity_type=city&count=50&sort=rating$&cuisines=${this.props.value}` , config) 
            .then(res => {
                this.setState({names: res.data.restaurants})
                console.log(this.state.names)
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    // Get the Suggestion
    getSuggestion = (event) => { 
        
        event.preventDefault();

        const newName = [...this.state.names]
    
        if(this.state.getList) {

            const uniKeys = [...(new Set(newName.map((name, i) => {
                return(
                    <li key={i}>
                        <span>Name: { name.restaurant.name }</span>
                    </li>
                )
            })))]

        
            return uniKeys
        }

        let rSuggestion
        let rAddress

        if(this.state.names) {
            let randomR = this.state.names[Math.floor(Math.random()*this.state.names.length)];
            rSuggestion = randomR.restaurant.name
            rAddress = randomR.restaurant.location.address
            //console.log(randomR.restaurant.name)
            this.setState({suggestion: rSuggestion, address: rAddress})
        } 
    }


    // Get the Json
    getRestaurantsHandler = () => {
        this.setState({getList: true})
    }

    render () {
        
        return (
            <Aux>
                <Suggestion suggested={ this.getSuggestion } suggestion={this.state.suggestion} address={this.state.address} isDisabled={this.state.updatedList}/>
                {/* <RestaurantList getList={ this.getRestaurantsHandler } rList={ this.getRestaurantList() }/> */}
            </Aux>
        )
    }
}

export default Guide;


// How about get the cusine list on DidMoutn
// Then update the axios in a clicked function
