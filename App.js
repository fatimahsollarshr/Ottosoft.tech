import React, { useState } from 'react';

function App() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedImage(event.target.files[0]);
        setProcessedImage(null);
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            alert('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedImage);

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/process', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            setProcessedImage(`data:image/jpeg;base64,${result.image}`);
        } catch (error) {
            console.error('Error uploading the file:', error);
            alert('An error occurred while processing the image.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Smart Vision for Home Surveillance</h1>
            <p>Upload an image to process and analyze.</p>

            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginBottom: '20px' }}
            />
            <br />
            <button
                onClick={handleUpload}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                disabled={loading}
            >
                {loading ? 'Processing...' : 'Upload and Process'}
            </button>

            {processedImage && (
                <div style={{ marginTop: '30px' }}>
                    <h2>Processed Image</h2>
                    <img
                        src={processedImage}
                        alt="Processed"
                        style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '10px' }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;