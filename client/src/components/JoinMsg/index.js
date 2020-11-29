import React from 'react';
import './joinMsgStyle.css';

export const JoinMsg = (props) => {
    console.log(props.status);
    return (
        <div className='join-msg'>
            { (props.status === 'alreadyMember') &&
            <p>looks like you're already on our mailing list!</p> }
            { (props.status === 'invalidEmail') &&
            <p>please enter a valid email address</p> }
            { (props.status === 'cantProcess') && <p>hmmm something's up... double check you've entered a valid email address and if it's still not working shoot us an email at beltchastity@gmail.com</p> 
            }
            { (props.status === 'yay') &&
            <p>Cheers!  We'll be in touch ;)</p> }
        </div>
    );
};