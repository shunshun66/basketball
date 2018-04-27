require('./Advimgs.less');
import { Carousel } from 'antd-mobile'
import PropTypes from 'prop-types'
const propTypes = {
    imgs: PropTypes.array.isRequired,
}
function Advimgs ({ imgs, imgHeight=170 }){ 

    return (
        <div>
            <Carousel autoplay={true} infinite={true}>
                {
                    imgs.length > 0 ? imgs.map( (item, index) => (
                    <a key={index} href="#"
                       style={{
                            display: 'inline-block',
                            width: '100%',
                            height: imgHeight
                        }}
                    >
                        <img src={item} alt="" className="advimg"/>
                    </a>
                    )): ''
                }
            </Carousel>
         </div>
    );
};
Advimgs.propTypes = propTypes
export default Advimgs ;