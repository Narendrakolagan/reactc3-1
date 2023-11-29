import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  return (
    <li className={`${className} card`}>
      <div className="textContainer">
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button">show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
