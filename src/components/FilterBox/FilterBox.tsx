import './FilterBox.scss';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { showAllBooks, showLikedBooks } from '../../slices/booksSlice';

export default function FilterBox(): JSX.Element {
  const dispatch = useDispatch();
  const [isAllShown, setIsAllShown] = useState(true);

  const handleShowBooks = () => {
    isAllShown ? dispatch(showLikedBooks()) : dispatch(showAllBooks());
    setIsAllShown(!isAllShown);
  };

  return (
    <div className="filter-box">
      <button
        className={`filter-box__button filter-box__button_show-${isAllShown ? 'liked' : 'all'}`}
        onClick={handleShowBooks}
      >{`Показать ${isAllShown ? 'избранные' : 'все'}`}</button>
    </div>
  );
}
