import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllFlight, addFlight } from "../store/flight";
import iconLocation from '../assets/img/icons/Frame.svg'
import iconBookedClass from '../assets//img/icons/Vector (3).svg'
import iconBookedGuests from '../assets//img/icons/Vector (1).svg'


const Form = () => {

    const flights = useSelector(selectAllFlight)
    const dispatch = useDispatch()

    const initFormData = {
        bookedFrom: '',
        bookedTo: '',
        bookedDate: '',
        bookedGuests: 1,
        bookedClass: ''
    }

    const [formData, setFormData] = useState(initFormData)

    const onInputChange = (event) => {
        
        const {name, value} = event.target

        switch(name){
            case 'from': return setFormData({...formData, bookedFrom: value})
            case 'to': return setFormData({...formData, bookedTo: value})
            case 'date': return setFormData({...formData, bookedDate: value})
            case 'guests': return setFormData({...formData, bookedGuests: value})
            case 'ticketclassName': return setFormData({...formData, bookedClass: value})
            default: 
        }

    }

     const totalFlight = (() => flights.length)()

     const onFormSubmit = (event) => {

        event.preventDefault()

        if(totalFlight >= 3) return alert("You can't booked more then 3 flight")
        
        const newFlightData = {...formData}

        setFormData(initFormData)

        dispatch(addFlight(newFlightData))

    }

    return(
        <>
        {/* <!-- Input Data --> */}
            <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form onSubmit={onFormSubmit} className="first-hero lws-inputform">
                {/* <!-- From --> */}
                <div className="des-from">
                    <p>Destination From</p>
                    <div className="flex flex-row">
                    <img src={iconLocation} alt="" />
                    <select onChange={onInputChange} value={formData.bookedFrom} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                        <option value="" hidden>Please Select</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                    </select>
                    </div>
                </div>

                {/* <!-- To --> */}
                <div className="des-from">
                    <p>Destination To</p>
                    <div className="flex flex-row">
                    <img src={iconLocation} alt="" />
                    <select onChange={onInputChange} value={formData.bookedTo} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                        <option value="" hidden>Please Select</option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                    </select>
                    </div>
                </div>

                {/* <!-- Date --> */}
                <div className="des-from">
                    <p>Journey Date</p>
                    <input onChange={onInputChange} value={formData.bookedDate} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                </div>

                {/* <!-- Guests --> */}
                <div className="des-from">
                    <p>Guests</p>
                    <div className="flex flex-row">
                    <img src={iconBookedGuests} alt="" />
                    <select onChange={onInputChange} value={formData.bookedGuests} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                        <option value="" hidden>Please Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                    </select>
                    </div>
                </div>

                {/* <!-- className --> */}
                <div className="des-from !border-r-0">
                    <p>className</p>
                    <div className="flex flex-row">
                    <img src={iconBookedClass} alt="" />
                    <select onChange={onInputChange} value={formData.bookedClass} className="outline-none px-2 py-2 w-full" name="ticketclassName" id="lws-ticketclassName" required>
                        <option value="" hidden>Please Select</option>
                        <option>Business</option>
                        <option>Economy</option>
                    </select>
                    </div>
                </div>

                <button disabled={ totalFlight >= 3} className="addCity" type="submit" id="lws-addCity">
                    <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="text-sm">Book</span>
                </button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form;