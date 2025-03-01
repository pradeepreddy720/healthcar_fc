import React , { useState }from 'react';
import Header from './Header';
import HorizontalMenu from './HorizontalMenu';

const styles = {
  panel: {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: 'white',
    },
    panelElements: {
      margin: '10px',
    },
    spanElements: {
      margin: '10px',
      display: 'block',
    },
    
};

const panelsData = [{
  id: 1,
  title: 'Covid-19 Updates',
  content: 'Stay informed about the latest Covid-19 guidelines and vaccination information.',
  expandData: ' This is the content of Panel 1.',
}, {
  id: 2,
  title: 'seasonal Flu Prevention',
  content: 'Learn about steps you can take to prevent seasonal flu and when to get vaccinated.',
  expandData: ' This is the content of Panel 2.',
}, {
  id: 3,
  title: 'Mental Health Awareness',
  content: 'Explore resources and support options for maintaining good mental health.',
  expandData: ' This is the content of Panel 3.',  
}]

const Panel = ({ panel, isExpand, title, content, onButtonClick }) => {
  const readText = isExpand ? 'Read Less' : 'Read More';
  return (
    <div style={styles.panel}>
      <h2 style={styles.panelElements}>{title}</h2>
      <span style={styles.spanElements}>{content}</span>
      <button className='panelButton' onClick={onButtonClick}>{readText}</button>
      {isExpand === true && (
          <div className="panel-content">
            <p>{panel.expandData}</p>
          </div>
        )}
    </div>
  );
};

const Home = () => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleButtonClick = (panel) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };
  
  return (
    <div>
      <Header />
      <HorizontalMenu />
      <div className='homeContent'>
        <h3>Latest Health Information</h3>
        {panelsData.map(panel => (
          <Panel key={panel.id} panel={panel} isExpand={expandedPanel===panel.id ? true: false} title={panel.title} content={panel.content} onButtonClick={() => handleButtonClick(panel.id)} />
        ))}
      </div>
    </div> 
  );
};
export default Home;
