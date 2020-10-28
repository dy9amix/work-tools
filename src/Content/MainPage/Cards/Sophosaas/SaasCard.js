import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './SaasCard.css'
import createlogo from './Create Subscriber.png';
import decommlogo from './Decommission.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateSubscriber from "./CreateSubscriber/CreateSubscriber.1";
import Decommission from './Decommission/Decommision';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
const styles = StyleSheet.create({
    contentpage:{
        position:"absolute",
        paddingTop:"40px"
    }
    ,imageicons:{
        height:'190px',
        width: '80px',
        justifyContent:'center',
        borderRadius:'10px',
        paddingTop:"30px",
        paddingBottom:"80px",
        },
    separator: {
        paddingTop: '20px',
        borderTop: '0.5vh solid ',
        padding:0,
        left:0,
        marginTop: '10px',
        opacity: 0.06
    },
    text:{
        paddingTop:'30px',
        fontFamily: 'Muli',
        fontSize: '20px',
        fontWeight:'bold',
        textAlignLast:'center',
        lineHeight: '12px',
        letterSpacing: '0.2px',
        color: 'black',
    }
    }
)

const SaasCard = (props) => {
    const {auth_token} = props
    return(
    <div className={css(styles.contentpage)}>   
    <Row>
        <Router>
            <Link to="/sophosaas/createsubscriber">
                <div className= 'tc dib br3 backcolor ba b--light-gray pa3 ma2 bw2 pointer w5'>
                    <img alt='robots' src= {createlogo} className={css(styles.imageicons)}/>
                    <div className={css(styles.separator)}></div>
                    <div>
                        <p className={css(styles.text)}>Create Subscriber</p>
                    </div>
                </div>
            </Link>
            <Link to="/sophosaas/decommission">
            <div className= 'tc dib br3 ba backcolor b--light-gray pa3 ma2 bw2 pointer w5'>
                <img alt='robots' src= {decommlogo} className={css(styles.imageicons)}/>
                <div className={css(styles.separator)}></div>
                <div>
                    <p className={css(styles.text)}>Decommission</p>
                </div>
            </div>
            </Link>
            <Switch>
                <Route path="/sophosaas/createsubscriber">
                    <CreateSubscriber auth_token={auth_token}/>
                </Route>
                <Route path="/sophosaas/decommission" >
                    <Decommission auth_token={auth_token}/>
                </Route>
            </Switch>
        </Router>
    </Row>
    </div> 
    )
}

export default SaasCard;