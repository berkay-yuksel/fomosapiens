import banner from '../styles/Banner.module.css'

import PlutoImage from '../assets/plt.jpg'

const Banner = () => {
  return (
    <div className={banner.container}>
        <h1> FOMO<br/><div>_SAPIENS</div></h1>
        
  <img alt='pluto' src={PlutoImage} />
  <p>We fomoed so much that we<br/>have passed to the next level of<br/>evolution as 'fomo-sapiens'.</p>
  <span className={banner.halo}> </span>
    </div>
    
  )
}

export default Banner