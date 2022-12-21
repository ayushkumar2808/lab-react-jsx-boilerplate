import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  let imgdata = imageData();
  console.log(imgdata);
  return <>   
  <h1>Kalvium Library</h1>
  <div className='flex'>
  <img src={imgdata[1].img} alt=""  />
  <img src={imgdata[1].img} alt=""  />
  <img src={imgdata[1].img} alt=""  />
  <img src={imgdata[1].img} alt=""  />
  </div>
  </>
}

export default App;
