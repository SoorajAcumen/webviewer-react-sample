import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);
  const url = 'https://storage.googleapis.com/moksh-dev/word-doc.docx'
  // const url = 'https://icseindia.org/document/sample.pdf'

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        licenseKey: 'demo:1731305902335:7efef1130300000000ecd5e4619a6c4248b80b08e908e02111ef1543ca', // Demo license key for WebViewer
        initialDoc: `https://cors-anywhere.herokuapp.com/${url}`,
        enableOfficeEditing: true,
      },
      viewer.current
    ).then((instance) => {
      instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
      // instance.UI.setToolbarGroup(instance.UI.ToolbarGroup.EDIT_TEXT);
    }).catch((error) => {
      console.error('Error initializing WebViewer:', error);
    });
  }, []);

  return (
    <div className="App">
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
};

export default App;
