import React from 'react';
import {G, Rect, Path, Circle, Line, Polygon, Defs, Svg} from 'react-native-svg';

export default {

    bookmark:{
         svg:<G transform="translate(-261 -297)"><Rect class="a" width="104" height="138" transform="translate(261 297)"/><Path class="b" d="M52,0l52,53H0Z" transform="translate(261 382)"/></G>
    },

    downArrow:{
        svg: <Path className="a" d="M7.5,0,15,13H0Z" transform="translate(15 13) rotate(180)"/>
    },

    options:{
        svg: <G transform="translate(-171 -189)">
            <circle className="a" cx="3.5" cy="3.5" r="3.5" transform="translate(171 189)"/>
            <circle className="a" cx="3.5" cy="3.5" r="3.5" transform="translate(171 211)"/>
            <circle className="a" cx="3.5" cy="3.5" r="3.5" transform="translate(171 200)"/>
        </G>
    },

    settings: {
        svg: <Path id="Path_292" data-name="Path 292" class="cls-1"
                   d="M18.7,12.536a7.832,7.832,0,0,0,.06-.936,5.918,5.918,0,0,0-.072-.936L20.712,9.08a.5.5,0,0,0,.12-.612l-1.92-3.324a.488.488,0,0,0-.588-.216l-2.388.96a7.03,7.03,0,0,0-1.62-.936l-.36-2.544A.479.479,0,0,0,13.476,2H9.636a.467.467,0,0,0-.468.408l-.36,2.544a7.219,7.219,0,0,0-1.62.936L4.8,4.928a.475.475,0,0,0-.588.216L2.292,8.468a.465.465,0,0,0,.12.612L4.44,10.664a5.655,5.655,0,0,0-.012,1.872L2.4,14.12a.5.5,0,0,0-.12.612L4.2,18.056a.488.488,0,0,0,.588.216l2.388-.96a7.03,7.03,0,0,0,1.62.936l.36,2.544a.488.488,0,0,0,.48.408h3.84a.459.459,0,0,0,.468-.408l.36-2.544a7.219,7.219,0,0,0,1.62-.936l2.388.96a.475.475,0,0,0,.588-.216l1.92-3.324a.465.465,0,0,0-.12-.612l-2-1.584ZM11.556,15.2a3.6,3.6,0,1,1,3.6-3.6A3.611,3.611,0,0,1,11.556,15.2Z"
                   transform="translate(-2.222 -2)"/>
    },
}
