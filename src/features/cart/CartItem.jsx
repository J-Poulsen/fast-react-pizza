import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQtyById } from './cartSlice';

function CartItem({ item }) {
  const { itemId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQtyById(itemId));

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity itemId={itemId} currentQuantity={currentQuantity} />
        <DeleteItem itemId={itemId} />
      </div>
    </li>
  );
}

export default CartItem;
