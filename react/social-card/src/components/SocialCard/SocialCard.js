import React from 'react';
import './SocialCard.css';
import Header from './Header';
import Body from './Body';
import IconPanel from './IconPanel';

const SocialCard = (props) => {
    return (
        <article className='social-card'>
            <img className='avatar'
                 src='https://en.gravatar.com/avatar'
                 alt='Name' />
            <div className='content'>
                <Header
                    name={props.name}
                    handle={props.handle}
                    time={props.time} />
                
                <Body
                    authorName={props.authorName}
                    authorImage={props.authorImage} />
                
                <IconPanel
                    numReplies={props.numReplies}
                    numRetweets={props.numRetweets}
                    numLikes={props.numLikes} />
            </div>
        </article>
    );
}

export default SocialCard;
