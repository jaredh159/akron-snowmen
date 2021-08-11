import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const Virtuoso: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        'bg-[#9c7c62] p-5 text-center text-white text-opacity-80 antialiased',
        className,
      )}
    >
      <p>
        Interested in our <em className="underline">landscaping services</em> when the
        snow stops falling? Click here.
      </p>
    </div>
  );
};

export default Virtuoso;
