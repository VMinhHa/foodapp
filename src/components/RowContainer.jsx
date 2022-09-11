import React, { forwardRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { useSnackbar } from 'notistack'

const RowContainer = forwardRef(({ flag, data}, ref) => {
  
  // const [items, setItems ] = useState([])
  const { enqueueSnackbar } = useSnackbar();

  const [{cartItems}, dispatch] = useStateValue();
  
  const addToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (index >= 0) {
        item.qty += 1;
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: [...cartItems],
        });
        enqueueSnackbar('Item added to cart', { variant: 'success' });
    } else {
        item.qty = 1;
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: [...cartItems, item],
        });
        enqueueSnackbar('Item added to cart', { variant: 'success' });
      }
      // dispatch({
      //   type: actionType.SET_CART_ITEMS,
      //   cartItems: [...cartItems, item],
      // });
      // enqueueSnackbar('Add to cart success', { variant: 'success' });
    };
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  return (
    <div
      ref={ref}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth 
      ${flag 
        ? 'overflow-x-scroll scrollbar-none' 
        : 'overflow-x-hidden flex-wrap justify-center'
        }`
      }>
        {data && data.length > 0 ? 
          data.map((item, index) => (
            <div key={index} className='w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[300px] 
              bg-cardOverlay rounded-lg 
              py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg
              flex flex-col items-center justify-evenly relative'>
            <div className='w-full flex items-center justify-between'>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
                className="w-40 h-[140px] -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageUrl} alt="" 
                  className='w-full h-full object-contain'
                />
              </motion.div>

              {/* <motion.img
                whileHover={{
                scale: 1.2,
              }} src={item?.imageUrl} alt="" 
                className='w-40 object-contain h-[140px] -mt-8 drop-shadow-2xl'
              /> */}

              <motion.div 
                whileTap={{
                scale: 0.75,
                }}
                // onClick={() => setItems([...cartItems, item])}
                onClick={() => addToCart(item)}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center 
                  cursor-pointer hover:shadow-md'>
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>

            <div className='w-full flex flex-col items-end justify-end'>
              <p className='text-textColor font-semibold text-base md:text-lg '>{item?.title}</p>
              <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>
                    $</span> {item?.price}
                </p>
              </div>

              <div className="flex items-center">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Five star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
        </div>
        )) : 
          <div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound} className="h-340" />
            <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>  
          </div>}
    </div>
  )
})

export default RowContainer;