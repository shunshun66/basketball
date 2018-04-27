require('./MainBanner.less');
import { Control } from 'react-keeper';
const Imglist = ({ bannerMetas, bannerLink }) => {
  if(bannerMetas.isHomeBannerModels) {
    return (
      <div> {
        bannerMetas.homeBannerModels ? bannerMetas.homeBannerModels.map((item, key) => {
            return <img onClick={bannerLink} className="banner-image" key={'banner' + key} src={item.imgUrl} />
        }) : ''
      }
      </div>
    )
  }
  return null
}

function MainBanner({ bannerMetas, corpId }) {
  function bannerLink(item) {
    Control.go(item.linkUrl)
  }
  return (
    <div className="banner-slider">
      <Imglist bannerMetas={bannerMetas} bannerLink={() => { bannerLink()}}/>
    </div>
  );
};

export default MainBanner;