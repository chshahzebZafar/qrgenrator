import React, { useState, useEffect } from 'react';
import DiffViewer from 'react-diff-viewer';

function TextCompare() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showDifferences, setShowDifferences] = useState(false);

  useEffect(() => {
    // Compare texts whenever text1 or text2 changes
    setShowDifferences(text1 !== text2);
  }, [text1, text2]);

  return (
    <div>
      <h1>Text Compare Website</h1>
      <textarea
        placeholder="Enter text 1"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        style={{ marginRight: '10px', width: '45%', height: '200px' }}
      />
      <textarea
        placeholder="Enter text 2"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        style={{ marginRight: '10px', width: '45%', height: '200px' }}
      />
      {showDifferences && (
        <DiffViewer
          oldValue={text1}
          newValue={text2}
          splitView={true}
          showDiffOnly={true}
        />
      )}
    </div>
  );
}

export default TextCompare;