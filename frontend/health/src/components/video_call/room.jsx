import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async(element) => {
        const appID = 1157184846;
        const serverSecret = "e664cf01a64791c6431cd0e7096e6a06";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(), 
            "Madhav Mundhra");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks : [
                {
                    name: 'Copy Link',
                    url: `https://localhost:3000/video/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }

    return (
        <div>
            <div ref={ myMeeting } />
        </div>
    )
};

export default RoomPage;