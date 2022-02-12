import React from 'react'

import s from './hocwelcome.module.css';


export default function HocWelcome(Component: any) {

    return function () {
        return (
                <div className={s.globalHocWrapper}>
                    <div className={s.hocWrapper}>
                            <h2>Hello:) nice to meet you</h2>

                            <Component />

                        </div>
                </div>
        )
    }

}
