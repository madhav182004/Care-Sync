import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async(element) => {
        const appID = 1582597809;
        const serverSecret = "3c231a0e08aa063941bc6ef03107696a";
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