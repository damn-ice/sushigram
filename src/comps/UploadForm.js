import React, { useState } from 'react'; //Used react < 17....
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const types = ['image/png', 'image/jpeg']
    const [file, setFile] = useState(null);
    const [err, setErr] = useState(null);

    const changeHandler = e => {
        let selected = e.target.files[0]
        
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setErr(null);
        }else {
            setFile(null)
            setErr('Please selected a valid type i.e png or jpeg...')
        }
    }
    return (    
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {err && <div className="error">{err}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    
    )
}

export default UploadForm
