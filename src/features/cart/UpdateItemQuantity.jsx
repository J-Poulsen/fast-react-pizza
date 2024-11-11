import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQty, increaseItemQty } from './cartSlice';

function UpdateItemQuantity({ itemId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type='round' onClick={() => dispatch(decreaseItemQty(itemId))}>
        -
      </Button>
      <span className='text-sm font-medium'>{currentQuantity}</span>
      <Button type='round' onClick={() => dispatch(increaseItemQty(itemId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
