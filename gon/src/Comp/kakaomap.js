/*global kakao*/ 
import React, { useEffect } from 'react'
import { Route, Link, Switch, Routes } from 'react-router-dom';

function Kakaomap(){

  useEffect(()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '카카오',
        content:'<div>카카오</div>', 
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '생태연못', 
        content:'<div>생태연못</div>', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        title: '텃밭', 
        content:'<div>텃밭</div>', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        title: '근린공원',
        content:'<div>근린공원</div>', 
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    var imageSize = new kakao.maps.Size(24, 35); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng, 
        title : positions[i].title, 
        image : markerImage 
    });
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content 
    });
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }
    
    }, [])

    return (
        <section className='kakao'>
            <div className='kakaomap' id="map">
            </div>
            <div className='foodlist'>
                <div className='location'>
                    <ul>
                        <li id='location_total'><h3><Link>TOTAL</Link></h3></li>
                        <li><Link>loca1</Link></li>
                        <li><Link>loca2</Link></li>
                        <li><Link>loca3</Link></li>
                        <li><Link>loca4</Link></li>
                    </ul>
                    <div className='location_list'>
                        <div className='loca'>송계옥 | 서울 성동구 아차산로11길 11 </div>
                        <div className='loca'>1</div>
                        <div className='loca'>1</div>
                        <div className='loca'>1</div>
                    </div>
                </div>
            </div>
        </section>
        
        
    )
}

export default Kakaomap;