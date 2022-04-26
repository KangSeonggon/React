/*global kakao*/ 
import React, { useEffect , useState } from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom';

import {BiArrowBack} from 'react-icons/bi'


function Kakaomap(){

    
    
    // not used
    let history = useHistory();
    let [foodlist, c_foodlist] = useState([
        ['성수','송계옥','서울 성동구 아차산로11길 11','37.5447', '127.0593'],
        ['성수','외가집','서울 성동구 연무장길 17', '37.543706600475176', '127.05141790677251'],
        ['성수','뚝도농원','서울 성동구 아차산로 82', '37.54512711388241', '127.05325203784035'],
        ['성수','마블상회','서울 성동구 연무장7길 7','37.543321','127.054396'],
        ['건대','송화산시도삭면','서울 광진구 아차산로30길 33','37.5392','127.0672'],
        ['군자','오징어 상미수산','서울특별시 광진구 군자동 면목로 34','37.557','127.0766']
    ]);


    // 분류 방법
    //음식종류
    let [foodcategory, c_foodcategory] = useState(['start']);

    //지역
    let [location, c_location] = useState(['start']);

    //음식점
    let [totalloca, c_totalloca] = useState(true);

    
    // description = [위치카테고리, 이름, 주소, 위도, 경도, [음식분류]]
    let [positions, c_positions] = useState([
    {
        title: '송계옥',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">송계옥</div>', 
        latlng: new kakao.maps.LatLng(37.5447, 127.0593),
        description: ['성수','송계옥','서울 성동구 아차산로11길 11','37.5447', '127.0593',['Chicken']]
    },
    {
        title: '외가집', 
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">외가집</div>', 
        latlng: new kakao.maps.LatLng(37.543706600475176, 127.05141790677251),
        description: ['성수','외가집','서울 성동구 연무장길 17', '37.543706600475176', '127.05141790677251',['Pork']]
    },
    {
        title: '뚝도농원', 
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">뚝도농원</div>', 
        latlng: new kakao.maps.LatLng(37.54512711388241, 127.05325203784035),
        description: ['성수','뚝도농원','서울 성동구 아차산로 82', '37.54512711388241', '127.05325203784035',['Duck']]
    },
    {
        title: '마블상회',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">마블상회</div>', 
        latlng: new kakao.maps.LatLng(37.543321, 127.054396),
        description: ['성수','마블상회','서울 성동구 연무장7길 7','37.543321','127.054396',['Pork','Beef']]
    },
    {
        title: '송화산시도삭면',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">송화산시도삭면</div>', 
        latlng: new kakao.maps.LatLng(37.5392, 127.0672),
        description: ['건대','송화산시도삭면','서울 광진구 아차산로30길 33','37.5392','127.0672',['Pork','Dimsum','Noodle']]
    },
    {
        title: '오징어 상미수산',
        content:'<div class="overlaybox" style="width:150px;height:50px; background:var(--color-dark); color:var(--color-white); text-align:center;">오징어 상미수산</div>', 
        latlng: new kakao.maps.LatLng(37.557, 127.0766),
        description: ['군자','오징어 상미수산','서울특별시 광진구 군자동 면목로 34','37.557','127.0766',['Fish']]
    }
    
    ]);
    let [copy_positions, c_copy_positions] = useState([...positions]);

    // 음식 카테고리
    useEffect(() => {
        
        c_positions(copy_positions);
        let arr = []
        if (foodcategory == 'start') {
            console.log('pass')
        }
        else {
            for (var i = 0; i < positions.length; i ++) {
                if (positions[i].description[5].includes(foodcategory) == true) {
                    let sortCategory = positions[i]
                    arr.push(sortCategory);
                }
            }

            c_positions(arr);
            console.log(arr);


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
                c_location('start');
    

        }
    },[foodcategory])
    
    // 음식점 클릭시 이벤트
    useEffect(()=> {
        if (location == 'start') {
            console.log("pass")}
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


    },[location]);

    // 전체지도
    useEffect(()=>{
        c_foodcategory('start');
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
                        
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Pork');}}>Pork</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Beef');}}>Beef</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Chicken');}}>Chicken</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Fish');}}>Fish</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Noodle');}}>Noodle</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Dimsum');}}>Dimsum</Link></li>
                        <li><Link to='/dashboard/food' onClick={() => {c_foodcategory('Else');}}>Else</Link></li>
                    </ul>
                    <div className='location_list'>
                        {positions.map(function(data){
                            return(
                                <li><Link to='/dashboard/food' onClick={()=>{c_location(data);
                                console.log(data);}}>{data.description[0]} | {data.description[1]} | {data.description[2]}</Link></li>
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
        
        
    )
}

export default Kakaomap;