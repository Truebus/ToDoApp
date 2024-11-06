import { useState } from "react"
import { RiCalendarTodoFill } from "react-icons/ri";
import { TbSignRightFilled } from "react-icons/tb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
export const ToDoApp = () => {
    const [storedata, setStoreData] = useState([]);
    const [value, setValue] = useState('');
    const [isedit, setIsEdit] = useState(false);
    const [editindex, setEditIndex] = useState(null);
    const handletext = (e) => {
        setValue(e.target.value);
    }
    const handledata = () => {
        if (value.trim()) {
            if (isedit) {
                const updatedData = storedata.map((item, index) =>
                    index === editindex ? value : item
                );
                setStoreData(updatedData);
                setIsEdit(false);
                setEditIndex(null)
            } else {
                setStoreData([...storedata, value]);
            }
            setValue('')

        }
    }
    const del = (index) => {
        setStoreData((prev) => prev.filter((_, i) => i !== index))
    }
    const handledit = (index) => {
        setValue(storedata[index])
        setIsEdit(true)
        setEditIndex(index);
    }
    return (
        <div className="bg-gradient-to-r from-orange-200 via-purple-500 to-pink-200 h-full w-full p-5
        border-2 border-black rounded-3xl">
            <div className="h-auto border-4 border-yellow-400 w-full rounded-md
            p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <h1 id="todo" className="text-5xl font-bold shadow-lg shadow-black  text-white drop-shadow-lg">TODO LIST <RiCalendarTodoFill className="inline-block" /></h1>
                <div>
                    <div className="flex mt-4">
                        <label className="font-bold text-lg">Enter Your Text Here:- <TbSignRightFilled className="text-[40px] inline-block" /></label>
                        <input type="text" className="w-[750px] rounded-lg bg-sky-100 px-3
                        border-none outline-none hover:-translate-y-2 hover:transition-all duration-500 ease-in-out " placeholder="Enter your text here" onChange={handletext} value={value} />
                        <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 
                        ml-5 p-3 rounded-md" onClick={handledata}>
                            <IoIosAddCircleOutline className="font-bold m-auto" /><h3 className="font-semibold">{isedit ? "Update Task" : "Add Task"}</h3>
                        </button>
                    </div>
                    <div className="h-auto border-2 border-black mt-2">
                        <h1 className="font-bold text-yellow-300 text-4xl">Show Your Task Details:-</h1>
                        {storedata.map((x, index) => (
                            <div className="flex p-2">
                                <div className="flex">
                                    <p key={index} className="text-2xl text-left px-3">{x}</p>
                                    <div className="fixed left-[1050px]">
                                        <button type="button" onClick={() => handledit(index)} className="mb-2 ml-2 font-semibold p-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"><FaRegEdit /></button>

                                        <button type="button" onClick={() => del(index)} className="ml-2 font-semibold p-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"><MdOutlineDelete /></button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}