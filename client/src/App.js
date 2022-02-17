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

  whenFileInput(e){
    this.setState({
      selectedFile : e.target.files
    })
  }

  whenPost(){
    const formData = new FormData()
    formData.append('file', this.state.selectedFile)

    return axios.post("http://127.0.0.1:8000/uploadfiles", formData).then((res) => {
      alert('이미지 업로드 완료')
    }).catch(err=> {
      alert(err)
    })
  }
  
  
  render() {
    return (
      <div>
        <input type="file" name="file" accept="image/*" onChange={e => this.whenFileInput(e)}/>
        <div>
          <button type="button" onClick={() => this.whenPost()}>보내기</button>
        </div>
      </div>
    )
  }
}

export default App