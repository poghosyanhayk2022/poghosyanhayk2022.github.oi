import React, { useEffect, useState } from "react";
import classes from '../News/news.module.css'
import { Link } from "react-router-dom";
const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = '37c495fccae74d379cc142f0bf5f6819';
        const category = 'general';
        const url = `https://newsapi.org/v2/top-headlines?country=US&apiKey=37c495fccae74d379cc142f0bf5f6819`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
            console.log(news, 'NEWS');
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={classes.newsRoot}>
            <div className={classes.conteiner}>
                  <h1>News Feed</h1>
                <div className={classes.items}>
                {news.map((article, index) => (
                    <div className={classes.item} key={index}>
                        <h2>{article.author}</h2>
                        <p>{article.title}</p>
                        <p>{article.description}</p>
                        <img src={article.urlToImage} alt="" />
                        <span>{article.publishedAt}</span>
                    </div>
                ))}
        </div>
                </div>
            </div>
    );
};

export default News;