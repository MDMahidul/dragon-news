import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
      <div className="bg-secondary bg-opacity-25 text-center py-4 my-4">
        <h4 className="mb-4">Q-Zone</h4>
        <div>
          <img className="mb-4" src={qzone1} alt="" />
          <img className="mb-4" src={qzone2} alt="" />
          <img className="mb-2" src={qzone3} alt="" />
        </div>
      </div>
    );
};

export default QZone;