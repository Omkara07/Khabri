import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);    

    const updateNews = async()=>{
        props.updateProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        props.updateProgress(30)
        let parsedData = await data.json();
        props.updateProgress(70)
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.updateProgress(100)
    }

    useEffect(() => {
        updateNews();
        document.title = `${capitalize(props.category)} - Khabari`
      }, []);

    const fetchMoreData = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults)
        setLoading(false)
    }

    // const handlePrevClick =()=>{
    //     setPage(page-1)
    //     updateNews();
    // }
    
    // const handleNextClick =()=>{
    //     setPage(page+1)
    //     updateNews();
    // }
    
    return (
      <>
        <h1 className='text-center' style={{color: props.mode==="light"? "black" : "white" , margin: "35px 0px", marginTop: "90px"}}>Khabari - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Loading/>}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading/>}
        >
            <div className="contianer mx-5">
                <div className="row">
                    {articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem mode={props.mode} title={element.title} description={element.description} date={element.publishedAt} author={element.author} source={element.source.name}
                        imageUrl={element.urlToImage?element.urlToImage:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/breaking-news-jpeg-1652142986.jpg"} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} type="button" className="btn btn-dark my-3" onClick={handlePrevClick}>&larr; Prevous</button>
            <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark my-3" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
};
