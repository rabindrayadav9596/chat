import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./";
import HospitalIcon from "../assets/hospital.png";
import Logout from "../assets/logout.png";
import Chat from "../assets/chat.png";

const cookies = new Cookies();

const SideBar = ({logout}) =>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar_icon1">
            <div className="icon1__inner">
                <img src={Chat} alt="ChatIcon" width="30" />
            </div>
        </div>

        <div className="channel-list__sidebar_icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={Logout} alt="LogoutIcon" width="30" />
            </div>   
        </div>
    </div>  
);

const CompanyHeader = () =>(
    <div className="channel-list__header">
        <div className="channel-list__header__text">
            Chat App
        </div>
    </div>
)

const ChannelListContainer = () => {
    const logout = ({logout}) =>{
        cookies.remove("token");
        cookies.remove("userId");
        cookies.remove("username");
        cookies.remove("fullName");
        cookies.remove("hashedPassword");
        cookies.remove("phoneNumber");

        window.location.reload();

    }
    return (
        <div className="channel-list-container__wrapper">
           <SideBar logout={logout} />
           <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList 
                    filter = {{}}
                    channelRenderFilterFn ={() => {} }
                    List = {(listProps) =>(
                        <TeamChannelList
                            {...listProps}
                            type = "team"
                        />

                    )}
                    // Preview = {(previewProps)=>(
                    //     <TeamChannelPreview
                    //         {...previewProps}
                    //         type = "team"
                    //     />
                    // )}

                    />

                <ChannelList 
                    filter = {{}}
                    channelRenderFilterFn ={() => {} }
                    List = {(listProps) =>(
                        <TeamChannelList
                            {...listProps}
                            type = "messaging"
                        />

                    )}
                    // Preview = {(previewProps)=>(
                    //     <TeamChannelPreview
                    //         {...previewProps}
                    //         type = "messaging"
                    //     />
                    // )}

                    />
           </div>
        </div>
    );
}

export default ChannelListContainer;
