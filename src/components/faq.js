import axios from 'axios';
import React, {useState, useEffect} from 'react';

function FAQ(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    axios
      .get(process.env.REACT_APP_API_URL + '/api/website_data.json')
      .then((response) => {
        setFaq(response.data['faq']);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      {faq.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            <h2 className="question">{faq.question}</h2>
            <h2
              className="answer"
              dangerouslySetInnerHTML={{__html: faq.answer}}
            ></h2>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
