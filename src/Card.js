import React from 'react';

const Card = (props) => {
    return (
        <div style={{ paddingLeft: '100px' }}>
            <br /><br />
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                    {props.name}
                </div>
                <div>{props.login}</div>
                <div>{props.followers} followers</div>
            </div>
        </div>
    );
};

export default Card;