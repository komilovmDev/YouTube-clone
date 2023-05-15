import { AiOutlineSearch } from 'react-icons/ai'
import {HiHome} from 'react-icons/hi'
import {MdVideoLibrary , MdSubscriptions , MdOutlineVideoLibrary , MdOutlineHistory} from 'react-icons/md'
import {RiVideoLine} from 'react-icons/ri'
import {BiTimeFive , BiLike, BiTime} from 'react-icons/bi'

function Home() {
    return (
        <div className="flex w-full h-full flex-col">
            <nav className="w-full h-16 border flex justify-between pl-8 pr-8 items-center">
                <div className='h-full flex items-center justify-center'>
                    <img className="w-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" />
                </div>
                <div className='flex w-96 border justify-center items-center rounded-3xl p-1'>
                    <input type="text" className='flex-1 border-none focus:outline-none' />
                    <button className='w-8 pl-2'><AiOutlineSearch /></button>
                </div>
                <div className='h-full flex items-center justify-center'>
                    <img className='w-12 rounded-full border border-black' src="data:image/png;base64,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" alt="" />
                </div>
            </nav>
            <div className='w-full h-full'>
                <div className='h-full w-72 border bg-slate-600'>
                    <ul>
                        <li><button><HiHome/></button><span>Home</span></li>
                        <li><button><MdOutlineVideoLibrary/></button><span>Shorts</span></li>
                        <li><button><MdSubscriptions/></button><span>Subscription</span></li>
                    </ul>
                    <ul>
                        <li><button><MdVideoLibrary/></button><span>Libray</span></li>
                        <li><button><MdOutlineHistory/></button><span>Story</span></li>
                        <li><button><RiVideoLine/></button><span>Your videos</span></li>
                        <li><button><BiTime/></button><span>Watch Later</span></li>
                        <li><button><BiLike/></button><span>Liked</span></li>
                    </ul>
                    <ul>
                        <li><img src="https://yt3.googleusercontent.com/yUWaoReTNy7cBYSeuZDzTPty1LKcmih8p9BZBL-T0X7hDNcvwHMxaqaLIe7iMviA_ygGyb2n=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>SHOH Gaminguz</span></li>
                        <li><img src="https://yt3.googleusercontent.com/Zhh6IgGmUBnxzFBCaRI9ZLx0FbWIQStxs5H8auojHkQi8Hb1X7nPe8l9YKEiJmKwo07P0FPtjg=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>ALIY PUBGM</span></li>
                        <li><img src="https://yt3.googleusercontent.com/mMvovaxnq0ykebQFcZv_T5Sm5kji66B_LQjSRXQltfrT8WldPup3m0t67u4ZRef0b9rzrccS0g=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>Aslamboi PUBGM</span></li>
                        <li><img src="https://yt3.googleusercontent.com/S0-Ulumsw0588ELp2HLJwI1OFj2eSHhq1LD1_5tCncsyzbz8V6ataAwu-c8b0gKWyqF4iBvNsw=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>Temur Khatamov</span></li>
                        <li><img src="https://yt3.googleusercontent.com/YDIW2KdeSgbleNYuSUMgEBX5vJHo9kTwfrn_gTZwcT6jaHJyh0W4MIP9EHR9z5eTb6dx6R3ZXw=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>IXA LIVE</span></li>
                        <li><img src="https://yt3.googleusercontent.com/AOBwaOWuq5DYkvcwt3zWwHLfzIkHJ8qHfs7E5nsXwZ0IYt6W29VIymN1ontGsUO_AJ8ir7g7=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>Green71</span></li>
                        <li><img src="https://yt3.googleusercontent.com/ytc/AGIKgqMRPWtrdfIqqxK3Pae_RlhfiMOlKHOTg4KxU3Ya=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>Autotuninguz</span></li>
                        <li><img src="https://yt3.googleusercontent.com/uUF3pPAlUBu2gufiVSinID9S_t7FamTGaBk8jGCvSSV0cWDcOE67IHTbDitvIhS3puy4LYhm=s176-c-k-c0x00ffffff-no-rj" alt="" /><span>SHOH Gaminguz</span></li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home