import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

Ablum.propTypes = {
    album: PropTypes.object.isRequired,
};

function Ablum({ album }) {
    return (
        <div className='album'>
            <div className='album_thumbnail'>
                <img src={album.thumbnailUrl} alt={album.Name} />
            </div>
            <p className='album_name'>{album.Name}</p>
        </div>
    );
}

export default Ablum;