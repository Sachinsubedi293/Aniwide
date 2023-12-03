import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Rating } from '@mui/material';
import RecentLaunch from './Components/recentLaunch';
const Homepage = () => {
  const [DAta, setDAta] = useState([]);
  const query = `
    {
      Page(perPage:10){
        pageInfo {
          total
          perPage
        }
        media (type:ANIME,sort:POPULARITY_DESC) {
          id
          title{
            english
            native
            romaji
          }
          coverImage{
            extraLarge
          }
          description
          bannerImage
          genres
          isAdult
         format
          averageScore
          startDate {
            year
            month
            day
          }
        }
      }
    }
`;
  // 
  let variables = {

  };

  useEffect(() => {
    axios.post('https://graphql.anilist.co', {
      query,
      variables
    }).then(res => {
      console.log(res.data.data.Page.media); setDAta(res.data.data.Page.media);
    }).catch(err => console.error(err));


  }, [])

  return (
    <>
      <Header />
      <div className=" container-fluid p-0 ">
        <Carousel className='justify-content-center caroucel-show ' showThumbs={false}>
          {DAta.map(res => (
            <div className='justify-content-center align-items-center  d-flex' key="aqwq1">
              <img src={res.bannerImage} />
              <div className='legend text-light container border top-50
                      p-2' style={{ backgroundColor: "#222" }}>
                <div className="row row-cols-md-2 overflow-scroll overflow-row">
                  <div className="col-md-3 d-flex justify-content-center">
                    <div className="card position-absolute cardoverflow">
                      <img className="card-img-top top-50 rounded" src={res.coverImage.extraLarge} alt="Title" />

                    </div>
                  </div>
                  <div className="col-md-9 text-light" style={{ fontFamily: 'Poppins' }} >
                    <h2 className='p-2 fw-bold '>{res.title.romaji}</h2><div><Rating readOnly value={res.averageScore / 20} className="text-warning" /><span className='fw-bold fs-4 p-2'>{res.averageScore / 20}</span></div>
                    <p dangerouslySetInnerHTML={{ __html: res.description }}>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="container-fluid mt-5 row row-cols-md-2">
          <div className="col-md-8">
            <div className="neonboxex rounded p-2 ">
              <h2 className='pb-0 ps-2 pt-2'>Recently Updated</h2>
              <hr className='mt-0 pt-0' />
              <RecentLaunch/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="neonboxex rounded"><h2 className='pb-0 ps-2 pt-2'>Archives</h2></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Homepage;