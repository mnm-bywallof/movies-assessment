import React from 'react';
import FourKLogo from './constants/4k-fullhd.png'
import EightKLogo from './constants/8k.png'
import Dolby from './constants/FPB_Logo.svg.png'

const Support = ()=>{
    return (
        <ul style={{display:'flex', flexFlow:'row',justifyContent:'center',columnGap:'10px'}}>
            <li style={style.li}><img src={FourKLogo} height={'50px'} width={'auto'}/></li>
            {/* <li style={style.li}><img src={EightKLogo} height={'50px'} width={'auto'}/></li> */}
            <li style={style.li}><img src={Dolby} height={'50px'} width={'auto'}/></li>
        </ul>
    );
}

const style = {
    li: {
        display:'block'
    }
}

export default Support;