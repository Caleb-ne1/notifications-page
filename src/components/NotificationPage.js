import React, { useState } from 'react'
import Notifications from '../Data/notifications.json';

export function NotificationPage() {
    const unseenNotifications = Notifications.filter(notification => notification.seen !== "true");
    const unseenCount = unseenNotifications.length;

    const [notifications, setNotifications] = useState(Notifications);

    const markAllAsSeen = () => {
        const updatedNotifications = notifications.map(notification => ({
          ...notification,
          seen: "true"
        }));
        setNotifications(updatedNotifications);
    };

    return (
        <div className='notification-page'>
            <div className='notification-page-header'>
                <div className='page-header-left'>
                    <h2>Notifications</h2>
                    <h2 className='notification-count'>{unseenCount}</h2>
                </div>
                <div>
                    <p className="mark-all" onClick={markAllAsSeen}>Mark all as read</p>
                </div>
            </div>

            <div className='notification-container-wrapper'>
            {Notifications.map((notification, index) => {
                return (
                    <div  className={`notification-container ${notification.seen !== "true" ? 'unseen' : ''}`} key={index}>
                        <div>
                            <img className='profile-pic' src={notification.profile_pic} alt="" />
                        </div>
                        <div>
                            <p className='notification-cont'><span className='name'>{notification.name}</span> {notification.notification_text}<span className='notification-about'> {notification.notification_about}</span>{notification.seen !== "true" && <div className="dot"></div>}</p>
                            <p className='notification-time'>{notification.time}</p>
                            {notification.message && <p className="message">{notification.message}</p>}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
