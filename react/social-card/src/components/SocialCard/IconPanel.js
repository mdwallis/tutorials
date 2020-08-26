import React from 'react';
import './IconPanel.css';

const IconPanel = (props) => {
    return (
        <ul className='actions'>
            <li>
                <button>
                    <i className='far fa-comment' aria-hidden='true'></i>
                    <span className='sr-only'>Reply</span>
                    <span className='count'>{props.numReplies}</span>
                </button>
            </li>
            <li>
                <button>
                    <i className='fas fa-retweet' aria-hidden='true'></i>
                    <span className='sr-only'>Retweet</span>
                    <span className='count'>{props.numRetweets}</span>
                </button>
            </li>
            <li>
                <button>
                    <i className='fas fa-heart' aria-hidden='true'></i>
                    <span className='sr-only'>Like</span>
                    <span className='count'>{props.numLikes}</span>
                </button>
            </li>
            <li>
                <button>
                    <a href={'mailto:email@email.com&subject=Email Social Card'}>
                    <i className='far fa-envelope' aria-hidden='true'></i>
                    <span className='sr-only'>Email</span>
                    </a>
                </button>
            </li>
        </ul>
    );
};

export default IconPanel;
