import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageWrapper}>
            <div className={s.avatarWrapper}>
                <img className={s.avatar} src={props.avatar} alt=""/>
            </div>

            <div className={s.messageContent}>
                <div className={s.triangle}></div>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
