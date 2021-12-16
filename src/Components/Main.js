import React, { useState, useEffect } from 'react'
import './Main.css'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'

const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    return (
        <div className='mainContent'>
            <div className="punkContainer">
                <img src={activePunk?.image_original_url} alt="" className="selectedPunk" />
            </div>
            <div className="punkHighlight">
                <div className="punkDetails" style={{ color: '#fff' }}>
                    <div className="title">{activePunk?.name} <span className="itemNumber"> #{activePunk?.token_id}</span></div>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src={activePunk.owner.profile_img_url} alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div className="address">{activePunk.owner.address}</div>
                            <div className="ownerHandle">{activePunk.owner.handle}</div>
                        </div>
                        <div className="links">
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
