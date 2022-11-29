import story from '../styles/Story.module.css'
import Story1Image from '../assets/story1.png'
const Story = () => {
  return (
    <div className={story.container}>
      <h2>ep1 inviting participants</h2>
      <img src={Story1Image} height="70%" width="85%"/>
      <span>explore</span>
      <h3>bu da bir başlıktır neticesinde <br/> ve iki satırı da kaplamaktadır</h3>
    <div>
    <div></div>
    <div></div>
    </div>
      <p>we came all this way to explore the Moon, and the most important thing is that we discovered the Earth.” 50 years after the Apollo launch, this still holds true for space exploration today, even more so in terms of climate change mitigation.</p>
    </div>
  )
}

export default Story