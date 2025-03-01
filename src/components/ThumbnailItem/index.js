import './index.css'

const ThumbnailItem = props => {
  const {eachImage, eachimgid, check} = props
  const imgid = () => {
    eachimgid(eachImage.id)
  }

  const specialclass = check ? 'special' : ''

  return (
    <li>
      <img
        src={eachImage.thumbnailUrl}
        alt={eachImage.thumbnailAltText}
        onClick={imgid}
        className={`img-style ${specialclass}`}
      />
    </li>
  )
}

export default ThumbnailItem
