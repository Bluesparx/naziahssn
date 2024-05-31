import React from 'react'
import './resume.css'
import resumeFile from '../../assets/Nazia_Resume.pdf';

function Download() {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = 'nazia.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className='btns'>
      <button className='dwBtn' onClick={downloadFile}href='Nazia_Resume.pdf' download="nazia.pdf">Download</button>
      <button className='vwBtn' onClick={() => window.open(resumeFile, '_blank')}>View</button>
    </div>
  )
}

export default Download
