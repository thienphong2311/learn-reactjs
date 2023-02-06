import PropTypes from 'prop-types';
import React from 'react';
import Ablum from '../Album';
import './styles.scss';

Albumlist.propTypes = {
    albumList: PropTypes.array,
};

Albumlist.defaulProps = {
    albumList: [],
}

function Albumlist({ albumList }) {
    return (
        <div>
            <ul className='album-list'>
                {albumList.map(album => (
                    <li key={album.Id}>
                        <Ablum album={album} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Albumlist;