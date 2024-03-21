import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DiffViewer, { DiffMethod } from 'react-diff-viewer';

function TextCompare() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [showDifferences, setShowDifferences] = useState(false);

    const handleToggleDifferences = () => {
        setShowDifferences(!showDifferences);
    };

    return (
        <Container>
            <h1>Text Compare Website</h1>
            <Row>
                <Col sm={12} md={6}>
                    <textarea
                        placeholder="Enter the original text"
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        style={{ marginRight: '10px', width: '100%', height: '200px' }}
                    />
                </Col>
                <Col sm={12} md={6}>
                    <textarea
                        placeholder="Enter the Text to Compare"
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        style={{ marginRight: '10px', width: '100%', height: '200px' }}
                    />
                </Col>
            </Row>
            <Button onClick={handleToggleDifferences} className="mt-3">
                {showDifferences ? "Hide Differences" : "Show Differences"}
            </Button>
            {showDifferences && (
                <DiffViewer
                    oldValue={text1}
                    newValue={text2}
                    splitView={true}
                    showDiffOnly={true}
                    diffMethod={DiffMethod.WORDS}
                />
            )}
        </Container>
    );
}

export default TextCompare;
