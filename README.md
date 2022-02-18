# Similar-Animal-Face

#### TO DO

- [x] [메인페이지 생성하기 1](https://github.com/boostcamp-aitech3-cv05/Similar-Animal-Face/issues/21)
- [ ] [이미지 전처리](https://github.com/boostcamp-aitech3-cv05/Similar-Animal-Face/issues/22)
- [ ] [DB구성](https://github.com/boostcamp-aitech3-cv05/Similar-Animal-Face/issues/23)
- [ ] [DB탐색 및 Front로 결과 전송](https://github.com/boostcamp-aitech3-cv05/Similar-Animal-Face/issues/24)
- [ ] [메인페이지 생성하기 2](https://github.com/boostcamp-aitech3-cv05/Similar-Animal-Face/issues/25)

<hr>
### 작업방법

`pip install -r requirements.txt`

client 폴더에서 `npm install` 명령으로 구성 후 `npm start`로 사용합니다.

server 폴더에서 `uvicorn main:app`으로 사용합니다.



<hr>

### 사용법





<hr>

### 진행과정

#### 메인페이지 생성하기 1

메인페이지 생성 1 과정은 이후 과정을 진행하기 위한 일종의 틀을 만드는 과정입니다.
해당 과정에서는 서버로 이미지를 전송하여 서버에 저장시키는 과정까지 진행합니다.

1. FastAPI server, React client 구축

2. BackEnd 작업

   <details>
       <summary>주요 변경점 펼쳐보기</summary>
       <div markdown="1">
           <p>1. FastAPI에서 파일을 받을 수 있도록 uploadfiles 경로를 설정하고 Postman으로 확인합니다.</p>
           <p>2. React에서 request를 보낼 수 있도록 CORS 설정을 합니다.</p>
       </div>
   </details>

3. FrontEnd 작업

   <details>
       <summary>주요 변경점 펼쳐보기</summary>
       <div markdown="1">
           <p>1. Proxy설정이 잘 적용되지 않아 FastAPI에 CORS설정을 하였습니다.</p>
           <p>2. 파일(accept=image)을 입력받습니다.</p>
           <p>3. 보내기 버튼을 통해 서버로 전송합니다.</p>
       </div>
   </details>

- 새로 알게된 부분

  <details>
      <summary>펼쳐 보기</summary>
      <p>
          1. React</br>
  		- formData에서 'file'과 'files'를 제대로 구분하지 않으면 422 Error가 발생합니다.</br>
  		- headers는 일반적으로 자동 설정되기 때문에 신경쓸 필요는 없지만, 요소를 알아두는 것이 좋습니다.</br>
  		- React의 파일 전송은 담아둘 공간(state)과 전송 method의 분리가 Django와 매우 다릅니다.</br>
  		- 비동기 요청의 결과는 Promise로 제공됩니다.</br>
  		2. FastAPI</br>
  		- async와 Promise에 대한 이해가 필요합니다.</br>
  		- proxy설정보다 server단에서 CORS 설정을 하는 것이 더 명확해 보입니다.</br>
  		- Python 기반으로, 수 많은 라이브러리 사용이 가능합니다.</br>
  	</p>
  </details>

- 수정이 필요한 부분

  <details>
      <summary>펼쳐 보기</summary>
      <p>
          1. React</br>
  		- Style을 전혀 적용하지 않아 수정이 필요합니다.(2에서 진행 예정)</br>
  		- Promise object를 받아서 사용할 방법을 고려해야합니다.</br>
  	</p>
  </details>



#### 이미지 전처리



#### DB구성



#### DB탐색 및 Front로 결과 전송



#### 메인페이지 생성하기 2

