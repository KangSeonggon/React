/*global kakao*/ 
import React, { useEffect , useState } from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom';

import {BsFillCameraFill} from 'react-icons/bs'
import { __RouterContext } from 'react-router';



import Chunmi from './review/chunmichun'
import Daemye from './review/daemyeong';
import Jegook from './review/jegook';
import Mable from './review/mable';
import Sangmi from './review/sangmi';
import Sobaku from './review/sobaku';
import Songgye from './review/songgye';
import Songhwa from './review/songhwa';
import Spaka from './review/spaka';
import Whygo from './review/whygo';
import Mexicali from './review/mexicali';
import Hayeon from './review/hayeon';
import Igyeong from './review/igyeong';
import Sinbal from './review/sinbal';


function Kakaomap(){

    
    
    // not used
    let history = useHistory();
    let [photoModal, c_photoModal] = useState('');


    // 분류 방법
    //음식종류
    let foodcate = ['Pork','Beef','Chicken','Fish','Noodle','Dimsum','Else']
    let [foodcategory, c_foodcategory] = useState(['start']);

    //지역 1:음식점 2:구
    let [location, c_location] = useState(['start']);
    let [location2, c_location2] = useState(['start']);

    //음식점
    let [totalloca, c_totalloca] = useState(true);

    
    // description = [위치카테고리, 이름, 주소, 위도, 경도, [음식분류]]
    let [positions, c_positions] = useState([
    {
        title: '송계옥',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">송계옥</div>', 
        latlng: new kakao.maps.LatLng(37.5447, 127.0593),
        description: ['성동','송계옥','서울 성동구 아차산로11길 11','37.5447', '127.0593',['Chicken']],
        review : <Songgye photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '외가집', 
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">외가집</div>', 
        latlng: new kakao.maps.LatLng(37.543706600475176, 127.05141790677251),
        description: ['성동','외가집','서울 성동구 연무장길 17', '37.543706600475176', '127.05141790677251',['Pork']],
        review : <Whygo photoModal={photoModal} c_photoModal={c_photoModal}  />

    },
    {
        title: '마블상회',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">마블상회</div>', 
        latlng: new kakao.maps.LatLng(37.543321, 127.054396),
        description: ['성동','마블상회','서울 성동구 연무장7길 7','37.543321','127.054396',['Pork','Beef']],
        review : <Mable photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '송화산시도삭면',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">송화산시도삭면</div>', 
        latlng: new kakao.maps.LatLng(37.5392, 127.0672),
        description: ['광진','송화산시도삭면','서울 광진구 아차산로30길 33','37.5392','127.0672',['Pork','Dimsum','Noodle']],
        review : <Songhwa photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '오징어 상미수산',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">오징어 상미수산</div>', 
        latlng: new kakao.maps.LatLng(37.557, 127.0766),
        description: ['광진','오징어 상미수산','서울특별시 광진구 군자동 면목로 34','37.557','127.0766',['Fish']],
        review : <Sangmi photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '천미천훠궈',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">천미천훠궈</div>', 
        latlng: new kakao.maps.LatLng(37.5565, 127.0798),
        description: ['광진','천미천훠궈','서울특별시 광진구 능동 천호대로110길 8-10','37.5565','127.0798',['Pork','Else']],
        review : <Chunmi photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '제국한우짝갈비',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">제국한우짝갈비</div>', 
        latlng: new kakao.maps.LatLng(37.5203, 127.036),
        description: ['강남','제국한우짝갈비','서울 강남구 언주로148길 14','37.5203','127.036',['Beef']],
        review : <Jegook photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '대명소곱창',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">대명소곱창</div>', 
        latlng: new kakao.maps.LatLng(37.5562, 127.0793),
        description: ['광진','대명소곱창','서울특별시 광진구 능동 능동로 298','37.5562','127.0793',['Beef']],
        review : <Daemye photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '스파카나폴리',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">스파카나폴리</div>', 
        latlng: new kakao.maps.LatLng(37.5489, 126.9156),
        description: ['마포','스파카나폴리','서울특별시 마포구 양화로6길 28','37.5489','126.9156',['Else']],
        review : <Spaka photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '소바쿠',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">소바쿠</div>', 
        latlng: new kakao.maps.LatLng(37.5527, 127.0888),
        description: ['광진','소바쿠','서울 광진구 천호대로 650','37.5527','127.0888',['Noodle']],
        review : <Sobaku photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '멕시칼리',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">멕시칼리</div>', 
        latlng: new kakao.maps.LatLng(37.5527, 127.0884),
        description: ['광진','멕시칼리','서울특별시 광진구 능동로36길 181','37.5527','127.0884',['Pork','Beef','Fish','Else']],
        review : <Mexicali photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '하연옥',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">하연옥</div>', 
        latlng: new kakao.maps.LatLng(35.194, 128.0607),
        description: ['진주','하연옥','경상남도 진주시 진주대로 1317-20','35.194','128.0607',['Noodle']],
        review : <Hayeon photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '이경문',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">이경문 순대곱창</div>', 
        latlng: new kakao.maps.LatLng(37.5731, 126.9908),
        description: ['종로','이경문 순대곱창','서울특별시 광진구 능동로36길 181','37.5731','126.9908',['Pork','Else']],
        review : <Igyeong photoModal={photoModal} c_photoModal={c_photoModal}  />
    },
    {
        title: '신발원',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">신발원</div>', 
        latlng: new kakao.maps.LatLng(35.1148, 129.0387),
        description: ['부산','신발원','부산광역시 동구 대영로243번길 62','35.1148','129.0387',['Dimsum']],
        review : <Sinbal photoModal={photoModal} c_photoModal={c_photoModal}  />
    }
    

    ]);
    let [copy_positions, c_copy_positions] = useState([...positions]);

    // // 사진 모달창
    // useEffect(() => {
    //     console.log(photoModal)
        
    // },[photoModal])

    // 구 카테고리
    useEffect(() => {

        let arr = []
        if (location2 == 'start') {
            // console.log('pass')
        }
        else {
            if (location2 == '어딘가') {
                for (var i = 0; i < positions.length; i ++) {
                    if ((['부산','진주']).includes(positions[i].description[0]) == true) {
                        let sortCategory = positions[i]
                        arr.push(sortCategory);
                    }
                }
            } else {
                for (var i = 0; i < positions.length; i ++) {
                    if (positions[i].description[0].includes(location2) == true) {
                        let sortCategory = positions[i]
                        arr.push(sortCategory);
                    }
                }
            }
            
            // 최종 정렬된 음식점
            c_copy_positions(arr);
            // console.log(arr);


            var mapContainer = document.getElementById('map'),
                mapOption = {
                    center: arr[0].latlng,
                    level: 7
            };
            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({zIndex:1});
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            for (var i = 0; i < arr.length; i ++) {
                var imageSize = new kakao.maps.Size(24, 35); 
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: arr[i].latlng, 
                    title : arr[i].title, 
                    image : markerImage 
                });
                var infowindow = new kakao.maps.InfoWindow({
                    content: arr[i].content
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
                c_location2('start');
                c_foodcategory('start');
                
    

        }
    },[location2])
    


    // 음식 카테고리
    useEffect(() => {
        let arr = []
        if (foodcategory == 'start') {
            // console.log('pass')
        }
        else {
            for (var i = 0; i < positions.length; i ++) {
                if (positions[i].description[5].includes(foodcategory) == true) {
                    let sortCategory = positions[i]
                    arr.push(sortCategory);
                }
            }
            // 최종 정렬된 음식점
            c_copy_positions(arr);

            var mapContainer = document.getElementById('map'),
                mapOption = {
                    center: arr[0].latlng,
                    level: 7
            };
            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({zIndex:1});
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            for (var i = 0; i < arr.length; i ++) {
                var imageSize = new kakao.maps.Size(24, 35); 
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: arr[i].latlng, 
                    title : arr[i].title, 
                    image : markerImage 
                });
                var infowindow = new kakao.maps.InfoWindow({
                    content: arr[i].content
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
                     
        }
        
    },[foodcategory])
    
    // 음식점 클릭시 이벤트
    useEffect(()=> {
        if (location == 'start') {
            // console.log("pass")
        }
        else {
        // console.log(location);
        var mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(location.description[3], location.description[4]),
                level: 2
            };
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        var imageSize = new kakao.maps.Size(24, 35); 
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(location.description[3], location.description[4]), 
            image : markerImage 
        });


        var infowindow = new kakao.maps.InfoWindow({
            content: location.content
        });

        infowindow.open(map, marker);}
        c_location2('start');
        c_foodcategory('start');


    },[location]);

    // 전체지도
    useEffect(()=>{
        
        c_copy_positions([...positions]);
        var mapContainer = document.getElementById('map'),
        mapOption = { 
            center: new kakao.maps.LatLng(37.5503,127.04), 
            level: 7
        };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});


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
            c_location('start');
            c_foodcategory('start');

            }, [totalloca])
 
    return (
        <section className='kakao'>
            <div className='kakaomap' id="map">
            </div>
            <div className='foodlist'>
                <div className='location'>
                {/* <BiArrowBack /> */}
                    <ul>
                        <li id='location_total'><h3><Link to='/dashboard/food' onClick={()=>{ c_totalloca(!totalloca) }}>TOTAL</Link></h3></li>
                        {foodcate.map(function(data,i){
                            return(
                            <li><Link to='/dashboard/food' key={i} onClick={() => {c_foodcategory(data);}}>{data}</Link></li>)
                        })}
                        
                    </ul>
                    <div className='location_sort'>
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('광진'); }} >광진</Link></li>                           
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('성동'); }} >성동</Link></li>
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('종로'); }} >종로</Link></li>
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('강남'); }} >강남</Link></li>
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('마포'); }} >마포</Link></li>
                            <li><Link to='/dashboard/food' onClick={ ()=>{c_location2('어딘가'); }} >어딘가</Link></li>

                    </div>
                    <div className='location_list'>
                        {copy_positions.map(function(data){
                            // console.log(data.title)
                            return(
                                <li><Link to='/dashboard/food' key={data.title} onClick={()=>
                                    {c_location(data);
                                }}>{data.description[0]} | {data.description[1]} | {data.description[2]}</Link> <span><BsFillCameraFill onClick={()=> { c_photoModal(data.description[1])}} /> </span></li>
                            )
                        })}
                    </div>
                    {positions.map(function(data){
                        // console.log(data.review)
                        return(
                            <>
                            {
                                photoModal === data.description[1]
                                ? data.review
                                : null
                            }
                            </>
                        )
                    })}
                    
                    
                </div>
            </div>
        </section>
        
        
    )
}

export default Kakaomap;