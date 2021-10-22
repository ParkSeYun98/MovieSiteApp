import React from 'react'
import { Col } from 'antd'

function GridCards(props) {
    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}> 
            {/*  한 column이 24사이즈, large 일때 사진 하나당 6사이즈 설정 =  한 줄에 4 사진
            medium일때 (화면 줄이면) 한줄에 3 사진
            xs일때 (가장 작을때) 한줄에 1 사진 */}
                <div style={{ position: 'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
        <Col lg={6} md={8} xs={24}> 
        {/*  한 column이 24사이즈, large 일때 사진 하나당 6사이즈 설정 =  한 줄에 4 사진
        medium일때 (화면 줄이면) 한줄에 3 사진
        xs일때 (가장 작을때) 한줄에 1 사진 */}
            <div style={{ position: 'relative'}}>
                
                <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />
                
            </div>
        </Col>
        )
    }
}

export default GridCards
