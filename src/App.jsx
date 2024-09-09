import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Com1 from './Firstcommponent'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const images = [
    {
      img: "https://th.bing.com/th/id/R.d492bd1e95dbe9cf9fd6ae008034d014?rik=0CEm8MFUTU0mPw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f8Ww0M0U.jpg&ehk=DRcL75viRagRiXIXKLm8JZk6kEb3bRL2eoQDt%2fjjH6A%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      img: "https://th.bing.com/th/id/OIP.eQ6aI2EHg4y3V4d3tMHUpQHaEK?pid=ImgDet&w=192&h=108&c=7"
    },
    {
      img: "https://th.bing.com/th/id/OIP.1LppgW_EyDH7jr06X2MvfwHaEo?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/OIP.iiz9_y-7ku4FZBxPcCrdQwHaNK?pid=ImgDet&w=188&h=333&c=7"
    },
    {
      img: "https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/OIP.ifRuTwmF0AZSEV1LuNX1TQHaEK?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/OIP.Ud8l4NEVdzRzcg13P_D5fgAAAA?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/R.104808820c1cb155133fb9616c6c4e0f?rik=CYRYQzIqwxQaaA&riu=http%3a%2f%2fwww.beautiful-views.net%2fviews%2fclouds-mountains-forest-river-1.jpg&ehk=4%2fPQN6S%2fvrIr1E7llOQ%2fH7k7dWiQlBBNPE62F7aCKNI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      img: "https://th.bing.com/th/id/OIP.HrYLPc77bYWghBRjFi1FaAHaF7?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/OIP.HiYisdmiG04UUxxQ3BDZIQHaFj?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://lp-cms-production.imgix.net/2019-06/da354ab06b154249510183e96c612d7a134c3283a29b5a966dcc48e62d5edd87.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
    },
    {
      img: "https://th.bing.com/th/id/OIP.SjiGgTVQeYnWURRzCqlKhQHaE6?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://th.bing.com/th/id/OIP.w6pWUoiAuQrNn2iIBtMvzwHaE8?rs=1&pid=ImgDetMain"
    },
    {
      img: "https://wallup.net/wp-content/uploads/2015/12/115234-nature-landscape-glaciers-mountain.jpg"
    },
    {
      img: "https://www.wallpaperflare.com/static/435/611/709/mountains-cosmiques-ridge-mountaineering-mountain-climbing-wallpaper.jpg"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"
    },
    {
      img: "https://wallpaper-house.com/data/out/8/wallpaper2you_288540.jpg"
    },
    {
      img: "https://th.bing.com/th/id/R.1ee970a8998155c4f8db10b4da2367ec?rik=DCnmJmI%2fOgxzXQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-p-lcS7ISEs4%2fUlV_2VABmzI%2fAAAAAAAAZBs%2f2ekktLADM1M%2fs1600%2fIcy%2bMountains%2bWallpapers%2b%2525281%252529.jpg&ehk=qecH70CwudUJcK03Eh5Shasj5ow%2byo%2b5w5chvEoJp%2bM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      img: "https://www.wallpaperflare.com/static/656/666/467/landscape-mountains-clouds-forest-wallpaper.jpg"
    },
    {
      img: "https://th.bing.com/th/id/R.6ee6689eb11ab614097e8450ac2bc92a?rik=KRw2BJtuh1JkwQ&pid=ImgRaw&r=0"
    },
  ]
  return (
    <div className='container'>
      <div className="heading">
        <h1>Image Gallery</h1>
      </div>
      <div className='innercontainer'>
        {images.map((image,index) => (
          <Com1
          key={index}
            img={image.img}
          />
        ))}
      </div>

    </div>
  )
}

export default App
