import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);
  // const url = 'https://storage.googleapis.com/moksh-dev/word-doc.docx'
  // const url = 'https://icseindia.org/document/sample.pdf'

  const queryParams = new URLSearchParams(window.location.search);
  const url = queryParams.get('url'); // Replace 'myParam' with your actual query param name
  console.log('Query Parameter:', url);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        licenseKey: '<PDFTRON_LICENSE_KEY>', // Demo license key for WebViewer
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
