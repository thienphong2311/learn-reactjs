import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumlist = [
        {
            Id: 1,
            Name: 'Vpop',
            thumbnailUrl: 'https://photo-zmp3.zmdcdn.me/banner/f/0/7/8/f078acf06dad53f7a449d30ac55f3715.jpg'
        },

        {
            Id: 2,
            Name: 'Kpop',
            thumbnailUrl: 'https://photo-zmp3.zmdcdn.me/banner/e/f/c/2/efc268f474748a75b885501d1f9ac937.jpg'
        },

        {
            Id: 3,
            Name: 'Hot Trend',
            thumbnailUrl: 'https://photo-zmp3.zmdcdn.me/banner/d/8/2/c/d82c20c060ca7f27d749c62244884c41.jpg'
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <Albumlist albumList={albumlist} />
        </div>
    );
}

export default AlbumFeature;