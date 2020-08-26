import React from 'react';
import './App.css';
import SocialCard from '../SocialCard/SocialCard';

function App() {
    return (
        <div className='container'>
            <SocialCard
                name='Michael D. Wallis'
                handle='@TheHumbleDev'
                time='3h ago'
                authorName='Michael D. Wallis'
                authorImage=''
                numReplies='5'
                numRetweets='12'
                numLikes='15'
                />
        </div>
    );
}

export default App;
