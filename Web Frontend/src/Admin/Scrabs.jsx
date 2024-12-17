import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from 'react-icons/rx';
import { TbLoader3 } from 'react-icons/tb';
import useIsAdmin from '../Hooks/useIsAdmin';
import URL from '../Url';

const Scrabs = () => {
    const [isprocessing, setIsprocessing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [action, setAction] = useState('none');
    const [isAdmin, adminData] = useIsAdmin();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [chnaged, setChanged] = useState(true);
    const [scrabDetails, setScrabDetails] = useState({
        name: '',
        price: '',
        unit: '',
        icon: ''
    });
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(`${URL}/api/v1/urbanscrapman/scrab/getrates`);
                setData(res.data);
            } catch (e) {
                setError(true);
                console.log(e);
            }
        };
        fetchdata();
    }, [chnaged]);

    const handleopen = (action) => {
        if (isOpen) {
            setScrabDetails({
                name: '',
                price: '',
                unit: '',
                icon: ''
            });
        }
        setAction(action);
        setIsOpen(!isOpen);
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setScrabDetails({ ...scrabDetails, [name]: value });
    };

    const handleAddScrab = async (e) => {
        e.preventDefault();
        setIsprocessing(true);
        if (!scrabDetails.name || !scrabDetails.price || !scrabDetails.unit || !scrabDetails.icon) return alert('All Fields Are Required');

        const details = { ...scrabDetails };

        try {
            const res = await axios.post(`${URL}/api/v1/urbanscrapman/scrab/addscrab`, details, {
                headers: { "Authorization": "Bearer " + adminData.token }
            });

            if (res.status === 201) {
                setChanged(!chnaged);
                setIsOpen(false);
                setIsprocessing(false);
                alert('Scrab Added Successfully');
            }
        } catch (e) {
            setIsprocessing(false);
            console.log(e);
            alert('Something Went Wrong');
        }
    };

    const handleUpdateScrab = async (e) => {
        e.preventDefault();
        setIsprocessing(true);
        if (!scrabDetails.name || !scrabDetails.price || !scrabDetails.unit || !scrabDetails.icon) return alert('All Fields Are Required');

        try {
            const res = await axios.patch(`${URL}/api/v1/urbanscrapman/scrab/updatescrab/${activeId}`, scrabDetails, {
                headers: { "Authorization": "Bearer " + adminData.token }
            });

            if (res.status === 200) {
                setChanged(!chnaged);
                setIsOpen(false);
                setIsprocessing(false);
                alert('Scrab Updated Successfully');
            }
        } catch (e) {
            setIsprocessing(false);
            console.log(e);
            alert('Something Went Wrong');
        }
    };
    

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <aside className="w-full lg:w-64 bg-gray-100 p-4 flex justify-center items-center">
                <h1 className="text-lg font-bold">Urban Scrabman</h1>
            </aside>

            <main className="flex-1 bg-white p-4">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-700">All Scrabs</h1>
                    <button
                        className="bg-green-600 flex items-center gap-2 text-white px-4 py-2 rounded-md"
                        onClick={() => handleopen('Add Scrab')}
                    >
                        <IoMdAdd size={24} /> Add Scrab
                    </button>
                </header>

                <div className="rounded-2xl overflow-scroll scrollbar">
                    <table className="min-w-full border bg-white text-nowrap">
                        <thead className="bg-green-600 text-white">
                            <tr>
                                <th className="py-2 px-4">Icon</th>
                                <th className="py-2 px-4">Name</th>
                                <th className="py-2 px-4">Price</th>
                                <th className="py-2 px-4">Unit</th>
                                <th className="py-2 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {error ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4 text-red-500">Error Fetching Data</td>
                                </tr>
                            ) : (
                                data.map(scrab => (
                                    <tr key={scrab._id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4">
                                            <img src={scrab.icon} alt={scrab.name} className="w-16 h-16 object-contain" />
                                        </td>
                                        <td className="py-2 px-4 capitalize">{scrab.name}</td>
                                        <td className="py-2 px-4">₹ {scrab.price}</td>
                                        <td className="py-2 px-4">{scrab.unit}</td>
                                        <td className="py-2 px-4">
                                            <button
                                                className="bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-1"
                                                onClick={() => { handleopen('Update Scrab'); setScrabDetails(scrab); setActiveId(scrab._id); }}
                                            >
                                                <CiEdit /> Update
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[500px] relative">
                        <RxCross2
                            className="absolute top-4 right-4 cursor-pointer"
                            size={24}
                            onClick={() => handleopen('none')}
                        />
                        <h2 className="text-xl font-semibold mb-4 text-center">{action}</h2>
                        <form className="flex flex-col gap-4">
                            <input type="text" name="name" placeholder="Name" value={scrabDetails.name} onChange={handlechange} className="border p-2 rounded" />
                            <input type="text" name="price" placeholder="Price" value={scrabDetails.price} onChange={handlechange} className="border p-2 rounded" />
                            <input type="text" name="unit" placeholder="Unit" value={scrabDetails.unit} onChange={handlechange} className="border p-2 rounded" />
                            <input type="text" name="icon" placeholder="Icon URL" value={scrabDetails.icon} onChange={handlechange} className="border p-2 rounded" />
                            <button
                                className="bg-green-600 text-white py-2 rounded-md"
                                onClick={(e) => action === 'Update Scrab' ? handleUpdateScrab(e) : handleAddScrab(e)}
                            >
                                {isprocessing ? <TbLoader3 className="animate-spin mx-auto" /> : action}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scrabs;
