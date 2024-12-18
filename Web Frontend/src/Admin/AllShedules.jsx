import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from 'react-icons/rx';
import { TbLoader3 } from 'react-icons/tb';
import axios from 'axios';
import useIsAdmin from '../Hooks/useIsAdmin';
import URL from '../Url';
import { toast , Bounce } from 'react-toastify';

const AllShedules = () => {
  const [isprocessing, setIsprocessing] = useState(false)
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [IsAdmin, adminData] = useIsAdmin();
  const [option, setOptions] = useState('all')
  const [isOpen, setIsOpen] = useState(false);
  const [activeData, setActiveData] = useState({})
  const [chnaged, setChanged] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)


  const handleopen = (data) => {
    setActiveData(data)
    setIsOpen(!isOpen);
  };

  const handleUpdateStatus = async () => {
    setIsprocessing(true);
    try {
      const res = await axios.patch(`${URL}/api/v1/urbanscrapman/shedule/updatestatus/${activeData._id}`, { "body": "nothhing" }, {
        headers: { "Authorization": "Bearer " + adminData.token }
      });

      if (res.status === 200) {
        setChanged(!chnaged);
        setIsOpen(!isOpen)
        setIsprocessing(false);
        return toast.success('Marked Completed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      })
      }
    } catch (e) {
      setIsprocessing(false);
      console.log(e);
      return toast.success('Unable To Update Status', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/urbanscrapman/shedule/getallshedule?page=${page}&limit=${limit}&option=${option}`, {
          headers: { "Authorization": "Bearer " + adminData.token }
        });
        console.log(res.data);
        setProducts(res.data);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    fetchdata();
  }, [chnaged , limit , page , option]);


  return (
    <div className='w-full h-auto flex flex-col lg:flex-row'>
      <div className='w-full lg:w-64 h-auto lg:h-[100vh] bg-gray-100 flex justify-center items-center p-4'>
        <h1 className="text-lg font-bold">Urban Scrabman</h1>
      </div>


      <div className='w-full flex-1 bg-white'>

        <div className='w-full py-6 flex flex-wrap items-center justify-center gap-5 shadow-lg px-4'>
          <div className='w-full sm:w-64 h-28 bg-gradient-to-r from-red-500 to-red-400 rounded-2xl flex flex-col justify-center items-start p-5 shadow-md'>
            <h1 className='text-xl font-bold text-white tracking-[1px]'>Total Schedules</h1>
            <h1 className='text-2xl font-bold text-white'>566</h1>
          </div>
          <div className='w-full sm:w-64 h-28 bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl flex flex-col justify-center items-start p-5 shadow-md'>
            <h1 className='text-xl font-bold text-white tracking-[1px]'>Total Weight</h1>
            <h1 className='text-2xl font-bold text-white'>1120</h1>
          </div>
          <div className='w-full sm:w-64 h-28 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex flex-col justify-center items-start p-5 shadow-md'>
            <h1 className='text-xl font-bold text-white tracking-[1px]'>Total Scraps</h1>
            <h1 className='text-2xl font-bold text-white'>120</h1>
          </div>
          <div className='w-full sm:w-64 h-28 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl flex flex-col justify-center items-start p-5 shadow-md'>
            <h1 className='text-xl font-bold text-white tracking-[1px]'>Pickups Confirmed</h1>
            <h1 className='text-2xl font-bold text-white'>340</h1>
          </div>
        </div>


        <div className="p-4 sm:p-6 bg-gray-100 overflow-x-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-700 capitalize">Shedules and Pickups</h1>


          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <div className='flex gap-4'>
              <select name='option' className="border rounded p-2 w-full sm:w-auto text-gray-700 cursor-pointer" onChange={(e) => setOptions(e.target.value)}>
                <option value='all'>All Categories</option>
                <option value='Completed'>Completed</option>
                <option value='Upcoming'>Upcoming</option>
              </select>
              <select name='limit' className="border rounded p-2 w-full sm:w-auto text-gray-700 cursor-pointer" onChange={(e) => setLimit(e.target.value)}>
                <option value=''>Limit</option>
                <option value='10'>10</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </div>
          </div>


          <div className="rounded-2xl overflow-x-auto">
            <table className="min-w-full bg-white border text-nowrap">
              <thead className="bg-green-600 text-white sticky top-0">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Phone Number</th>
                  <th className="py-2 px-4 text-left">Weight</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Time Slot</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  error ? (
                    <tr className="border-b">
                      <td colSpan={7} className="text-center py-4">
                        <p className="font-semibold uppercase text-red-500">Error In Fetching Data</p>
                      </td>
                    </tr>
                  ) : (
                    products?.map((product) => (
                      <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                        <td className="py-3 px-4">{product.createdBy?.name}</td>
                        <td className="py-3 px-4">+91 {product.createdBy?.phoneNumber}</td>
                        <td className="py-3 px-4">{product.weight}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-gray-200 rounded text-sm">
                            {product.pickUpDate}
                          </span>
                        </td>
                        <td className="py-3 px-4">{product.timeSlot}</td>
                        <td className={`py-3 px-4 font-semibold capitalize ${product.status === 'Completed' ? 'text-green-600' : 'text-yellow-400'}`}>
                          {product.status}
                        </td>
                        <td className="py-3 px-4 flex gap-2">
                          <button className='bg-blue-600 p-2 rounded-md' onClick={() => handleopen(product)}><FaEye className='text-white' /></button>
                          <button className='bg-green-600 p-2 rounded-md' onClick={() => handleopen(product)}><CiEdit className='text-white' /></button>
                        </td>
                      </tr>
                    ))
                  )
                }
              </tbody>
              <tfoot>

                <tr>
                  <th className="py-3 px-4" colSpan={7}>
                    <nav aria-label="Page navigation example">
                      <ul class="flex justify-between">
                        <li>
                          <a href="#" class={`flex items-center justify-center  px-3 h-10 ms-0 leading-tight text-green-600 bg-white border  border-green-300 rounded-lg hover:bg-green-100 hover:text-gray-700 ${page==1 ? 'hidden' : 'flex'}`} onClick={()=>  setPage(page-1)}>Previous</a>
                        </li>

                        <li>
                          <a href="#" class={`flex items-center justify-center px-3 h-10 leading-tight text-green-600 bg-white border border-green-300 rounded-lg hover:bg-green-100 hover:text-gray-700 ${page == Math.ceil(4/limit) ? 'hidden' : 'flex'}`} onClick={()=> setPage(page+1)}>Next</a>
                        </li>
                      </ul>
                    </nav>
                  </th>
                </tr>

              </tfoot>
            </table>
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[500px] relative">
                <RxCross2
                  className="absolute top-4 right-4 cursor-pointer"
                  size={24}
                  onClick={() => handleopen('none')}
                />
                <h2 className="text-xl font-semibold mb-4 text-center">Information</h2>
                <div className="flex flex-col gap-4">
                  <p className='font-bold'>Name : <span className='font-medium'>{activeData.createdBy?.name}</span> </p>
                  <p className='font-bold'>Phone Number : <span className='font-medium'>{activeData.createdBy?.phoneNumber}</span> </p>
                  <p className='font-bold'>Weight : <span className='font-medium'>{activeData.weight}</span> </p>
                  <p className='font-bold'>Date : <span className='font-medium'>{activeData.pickUpDate}</span> </p>
                  <p className='font-bold'>Time Slot : <span className='font-medium'>{activeData.timeSlot}</span> </p>
                  <p className='font-bold'>Address : <span className='font-medium'>{activeData.address}</span> </p>
                  <p className='font-bold'>Pincode: <span className='font-medium'>{activeData.pinCode}</span> </p>
                  <p className='font-bold'>Landmark: <span className='font-medium'>{activeData.landMark}</span> </p>
                  <p className='font-bold'>Status: <span className={`font-medium ${activeData.status === 'Completed' ? 'text-green-600' : 'text-yellow-400'}`}>{activeData.status}</span> </p>

                  {
                    activeData.status === 'Completed' ?
                      ""
                      :
                      <button
                        className="bg-green-600 text-white py-2 rounded-md font-bold"
                        onClick={handleUpdateStatus}
                      >
                        {isprocessing ? <TbLoader3 className="animate-spin mx-auto" /> : "Mark As Completed"}
                      </button>
                  }
                  <button
                    className="bg-green-600 text-white py-2 rounded-md font-bold"
                    onClick={handleopen}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllShedules;
