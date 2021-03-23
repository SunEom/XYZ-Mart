import React from 'react';

const AddedItem = ({ size, number, cost, sale, onCancel }) => {
  return (
    <div className="flex items-center justify-between pt-6 border-b border-t border-gray-400 border-solid pb-7 px-4 font-mont">
      <div className="text-sm">{size}</div>
      <div className="text-base font-bold flex items-center">
        <div className="font-normal text-xs text-center" style={{ width: 100 }}>
          {number}개
        </div>
        <div className="flex justify-end" style={{ width: 200 }}>
          <div>{new Intl.NumberFormat().format(cost * sale * number)}원</div>
          <button
            className="border border-solid border-black w-5 h-5 flex justify-center items-center ml-1"
            onClick={onCancel}
            value={size}
          >
            <i className="fas fa-times">
              <input type="hidden" value={size} />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedItem;
