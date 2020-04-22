import React from 'react';
import * as Icon from 'react-feather';

function Footer(props) {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>
      <a
        href="https://ethiopia-covid19.slack.com/"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Slack />
        <span>Ethiopia COVID-19 Response Team</span>
      </a>
      <a
        className="button excel"
        href="https://docs.google.com/spreadsheets/d/1wFUxclZN5IZgnKXlXol2TIrWZ3UW2SLnDwQzZyRW11k/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Database />
        <span>Crowdsourced Patient Database&nbsp;</span>
      </a>
      <a
        href="https://twitter.com/lia_tadesse"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{justifyContent: 'center'}}
      >
        <Icon.Twitter />
        <span>Dr. Liya Twitter</span>
      </a>
      <a
        href="https://t.me/sewasew_covid19_bot"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.MessageCircle />
        <span>Sewasew Telegram bot</span>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
