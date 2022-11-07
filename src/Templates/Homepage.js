import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Header from './Components/Header'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Rating } from '@mui/material';
const Homepage = () => {
    const [DAta, setDAta] = useState([]);
    const [Sortedrecent, setSortedrecent] = useState([]);
        const queryres = `
    {
      Page {
        pageInfo {
          total
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
const query=`{
  Page {
    pageInfo {
      total
    }
    media (type:ANIME,sort:START_DATE_DESC,) {
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
}`;
let variables = {

};

useEffect(() => {
    axios.post('https://graphql.anilist.co', {
        query,
        variables
      }).then(res=>{console.log(res.data);setDAta(res.data.data.Page.media);
        console.error(DAta);}).catch(err=>console.error(err));
    
    
}, [])

  return (
    <>
    <Header />
   <div className=" container-fluid p-0 ">
    <Carousel className='justify-content-center caroucel-show ' showThumbs={false}>
{DAta.slice(0,10).map(res=>(
  <div className='justify-content-center align-items-center  d-flex'>
                    <img src={res.bannerImage}  />
                    <div className='legend text-light container border top-50
                      p-2' style={{backgroundColor:"#222"}}>
                      <div className="row row-cols-md-2 overflow-scroll overflow-row">
                        <div className="col-md-3 d-flex justify-content-center">
                          <div class="card position-absolute cardoverflow">
                            <img class="card-img-top" src={res.coverImage.extraLarge} className="top-50 rounded" alt="Title"/>
                            
                          </div>
                        </div>
                        <div className="col-md-9 text-light" style={{fontFamily: 'Poppins'}} >
                          <h2 className='p-2 fw-bold '>{res.title.romaji}</h2><div><Rating readOnly value={res.averageScore/20} className="text-warning" /><span className='fw-bold fs-4 p-2'>{res.averageScore/20}</span></div>
                          <p   dangerouslySetInnerHTML={{__html:res.description}}>
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
              <h2 className='pb-0'>Recently Updated</h2>
              <hr className='mt-0 pt-0' />
             <div className="row row-cols-md-4">
              <div className="col-md-3">
              <div class="card">
                <img class="card-img-top" src="holder.js/100x180/" alt="Title"/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
              </div>
             </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="neonboxex rounded">f</div>
          </div>
        </div>
   </div>

    </>
  )
}

export default Homepage;