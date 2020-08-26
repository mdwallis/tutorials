import React from 'react';
import './Body.css';
import authorImage from '../../images/author-logo.jpg';

const Body = (props) => {
    return (
        <div className='body'>
            <div className='content-header'>
                <div className='logo'>
                    DEV
                </div>
                <div className='title'>
                    Learning React? Start Small.
                </div>
                <div className='author-container'>
                    <div className='author'>
                        <span className='name'>
                            {props.authorName}                        </span>
                        <div className='image'>
                            <img src={authorImage} alt='Michael D. Wallis' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='content-details'>
                <p className='title'>Learning React? Start Small.</p>
                <p className='message'>Can't pry yourself away from tutorials? The cure is to make tiny little experienment apps.</p>
                <p className='website'>dev.to</p>
            </div>
        </div>
    );
};

export default Body;
