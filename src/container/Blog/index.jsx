import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import data from '../../config/data.json';
import './index.css';

class Blog extends Component {
  state = {
    posts: [],
  };

  componentWillMount() {
    axios.get('https://api.rss2json.com/v1/api.json', {
      params: { rss_url: 'https://medium.com/feed/@serenali' }
    })
      .then(response => {
        this.setState({
          posts: response.data.items.slice(0, 6)
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="blog container">
        <div className="blog-header">
          <p className="blog-text">
            { data.blog.text }
          </p>
          <a
            target="_blank"
            href={data.blog.mediumLink}
          >
            <button className="blog-button">
              Medium Profile
            </button>
          </a>
        </div>
        <div className="posts">
          {
            this.state.posts.map(post => (
              <div className="post">
                <a
                  key={post.pubDate}
                  target="_blank"
                  href={post.link}
                >
                  <h2>{post.title}</h2>
                </a>
                  <p>
                    {moment(post.pubDate).format('MMMM Do, YYYY')} &#8729; Serena Li
                  </p>
                  <p>
                    {post.content.substr(post.content.indexOf('<p>') + 3, 150)}...
                  </p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Blog;


