import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Host.css';


function HostSpot() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [cost, setCost] = useState(0);
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [ state, setState] = useState('');
    const [zip, setZip] = useState();
    const [country, setCountry] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imageLi, setImageLi] = useState([]);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const spotInfo = {
            address: address,
            title: title,
            cost: cost,
            description: description,
            city: city,
            state: state,
            zip: zip,
            country: country,
            userId: sessionUser.id
        }
        const newSpotId = await dispatch(spotReducer.postSpot(spotInfo))
        const url = {url: imageLi}
        dispatch(spotReducer.postImage(url, newSpotId))
    }

    const handleClick = () => {
        let newImages = [...imageLi, imgUrl]
        setImageLi(newImages);
        setImgUrl('')
    }

    return (
        <div className='host__container'>
            <form className='spot-form' onSubmit={handleSubmit}>
                <div className='host-title'>
                    <label className='title'>Host a New Spot</label>
                </div>
                <div className='spot-form-title'>
                    <label className='spot-form-title-label'>
                        Title:
                    </label>
                    <input className='spot-form-title-input input' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className='spot-form-address'>
                    <label className='spot-form-address-label'>
                        Address:
                    </label>
                    <input className='spot-form-address-input input' value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                </div>
                <div className='spot-form-cost'>
                    <label className='spot-form-cost-label'>
                        Cost:
                    </label>
                    <input className='spot-form-cost-input input' value={cost} onChange={(e) => {setCost(e.target.value)}}/>
                </div>
                <div className='spot-form-description'>
                    <label className='spot-form-description-label'>
                        Description:
                    </label>
                    <input className='spot-form-description-input input' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div className='spot-form-city'>
                    <label className='spot-form-city-label'>
                        City:
                    </label>
                    <input className='spot-form-city-input input' value={city} onChange={(e) => {setCity(e.target.value)}}/>
                </div>
                <div className='spot-form-state'>
                    <label className='spot-form-state-label'>
                        State:
                    </label>
                    <input className='spot-form-state-input input' value={state} onChange={(e) => {setState(e.target.value)}}/>
                </div>
                <div className='spot-form-zip'>
                    <label className='spot-form-zip-label'>
                        Zip Code:
                    </label>
                    <input className='spot-form-zip-input input' value={zip} onChange={(e) => {setZip(e.target.value)}}/>
                </div>
                <div className='spot-form-country'>
                    <label className='spot-form-country-label'>
                        Country:
                    </label>
                    <input className='spot-form-country-input input' value={country} onChange={(e) => {setCountry(e.target.value)}}/>
                </div>
                <div className='spot-form-iamges'>
                    <label className='spot-form-images-label'>
                        Images:
                    </label>
                    <input className='input spot-form-images-input'value={imgUrl} onChange={(e)=> {setImgUrl(e.target.value)}}/>
                    <button type='button' onClick={handleClick}>Add Image</button>
                    <ul>
                        {imageLi.map((image) => {
                            return (
                                <li key={image+Math.random()}>{image}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default HostSpot;
