import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import styles from '../../styles/app.module.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Suggestion = (props) => {

    const disabled = {
        'cursor' : 'not-allowed'
    }

    return (
        <Aux>
            <div className={styles.Suggestion}>
                <div className={styles.Suggestion__mySuggestion}>
                   <h2 className={styles.mySuggestion__name}>{props.suggestion}</h2>
                   <p className={styles.mySuggestion__address}>{props.address}</p>
                </div>
                <button className={styles.Suggestion__button} onClick={props.suggested} disabled={!props.isDisabled} style={!props.isDisabled ? disabled : null }>GO!</button>
            </div>
        </Aux>
    )
}

export default Suggestion;