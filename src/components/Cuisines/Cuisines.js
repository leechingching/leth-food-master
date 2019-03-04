import React, { Component } from 'react';
import axios from 'axios';
import Guide from '../Guide/Guide';
import styles from '../../styles/app.module.scss';
import Select from 'react-select'

class Cuisines extends Component {
  state = {
    error: false,
    optionList: [],
    value: null,
    getValue: false,
    changed: false
  }
  componentDidMount() {
        const config = { headers: {'user-key': process.env.REACT_APP_WEATHER_API_KEY } };
    // The dault search value "American food"
      // If the user selected an option & submitted, we update the sortData value with the id
      axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=2891` , config) 
          .then(res => {
              this.setState({optionList: res.data.cuisines})
              //console.log(this.state.optionList)
          })
          .catch(error => {
              this.setState({error: true})
          })
  }
  
    getOption = (event) => {
        event.preventDefault();
        let newVal = {...this.state.value}
        newVal = event.target.value
        this.setState({value: + newVal, changed: true})
        console.log('current Value is: ' + newVal)
        return newVal
    }

    // CallCuisineId = () => {
    //   this.props.onCuisineClick(this.props.id); // Call with cuisine id
    // };

    render() {
      // const onChanged = this.state.getValue
        const CuisinesCopy = [...this.state.optionList]
     // console.log(CuisinesCopy)
        const cuisineItems = CuisinesCopy.map((item) => {
        return(
            <option key={item.cuisine.cuisine_id.toString()} value={ item.cuisine.cuisine_id } >{item.cuisine.cuisine_name}</option>
        )
      })

      return (
        <div className={styles.Cuisines}>
            <div className={styles.CuisinesSelect}>
                <div className={styles.select__container}>
                    <select className={styles.CuisinesSelect} onChange={this.getOption}>
                        <option className={styles.CuisinesSelectOptions} value="1">Please select a cusion</option>
                        { cuisineItems }
                    </select>
                </div>
                <Guide getOption={this.getOption} updated={this.state.changed} value={this.state.value}/>
            </div>
        </div>

        )
    }
  }
  
  export default Cuisines;
  