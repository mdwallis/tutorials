import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='author-meta'>
                <span className='name'>{props.name}</span>
                <span className='handle'>{props.handle}</span>
                <span className='time'>{props.time}</span>
            </div>
            <p>
                Learning React? Start Small.
            </p>
            <p>
                {'{'} author: <a className='author-tag' href='@mdwallis'>@mdwallis</a> {'}'}
            </p>
        </div>
    );
}

export default Header;
