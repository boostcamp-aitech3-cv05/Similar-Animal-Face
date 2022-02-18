import React, { Component } from 'react'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  onFileChange(event){
    this.setState({
      selectedFile : event.target.files[0]
    })
  }

  onUploadClick(){
    const formData = new FormData()
    formData.append(
      'files',
      this.state.selectedFile,
      this.state.selectedFile.name,
    )
    this.setState({isFileUploaded: true})
    const headers = {'Content-Type': 'multipart/form-data'}

    axios.post("http://127.0.0.1:8000/uploadfiles/", formData, headers)
  }
  render() {
    return (
      <div>
        <div>
          <input type="file" name="file" accept="image/*" onChange={event => this.onFileChange(event)}/>
          <button type="button" onClick={() => this.onUploadClick()}>보내기</button>
        </div>
      </div>
    )
  }
}

export default App