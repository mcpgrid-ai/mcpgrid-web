import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="pace pace-active">
      <div
        className="pace-progress"
        data-progress-text="100%"
        data-progress="99"
        style={{ transform: 'translate3d(100%, 0px, 0px)' }}
      >
        <div className="pace-progress-inner"></div>
      </div>
      <div className="pace-activity"></div>
    </div>
  );
};

export default Loading;
