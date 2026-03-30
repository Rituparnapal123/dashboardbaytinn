// import React from 'react'


import type {IconType} from 'react-icons';

interface topbarProps {
    title?: string,
    text?: string,
    Searchicon? : IconType,
    Notification? : IconType,
    SettingGear? : IconType
} 

const RightTopBar: React.FC<topbarProps> = ({title, text, Searchicon, Notification, SettingGear}) => {
  return (
    <>
        {/* RightTopBar */}
        <div className='right-top-row'>
            <div className='right-top-row-left'>
                { title &&
                    <h1>{title}</h1>
                }
                { text &&
                    <p>{text}</p>
                }
            </div>
            <div className='right-top-row-right'>
                <ul>
                    {Searchicon && 
                    <li><Searchicon /></li>
                    }                    
                    {Notification &&
                    <li>
                        <Notification/>
                        <span className='notification-counter'>1</span>
                    </li>
                    }
                    {SettingGear &&
                    <li><SettingGear/></li>
                    }
                </ul>
            </div>

        </div>

    </>
  )
}

export default RightTopBar