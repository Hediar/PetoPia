import React, { useState, useEffect } from 'react';
import { storage, auth } from '../firebase';
import { getDownloadURL, ref, uploadBytes, uploadString } from 'firebase/storage';
import styled from 'styled-components';

function FileUpload() {
  const [selectFile, setSelectFile] = useState(null);

  const handelFileSelect = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectFile) {
      const imageRef = ref(storage, `${auth.currentUser.uid}/${selectFile.name}`);
      await uploadBytes(imageRef, selectFile);

      // url 가져오기
      const downloadURL = await getDownloadURL(imageRef);
      console.log(downloadURL);
    }
  };

  return (
    <Body>
      <FileUploader type="file" multiple={true} accept="image/*" onChange={handelFileSelect} />
      <RegisterBtn onClick={handleUpload}>등록하기</RegisterBtn>
    </Body>
  );
}

export default FileUpload;

const Body = styled.div`
  width: 63%;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
`;

const FileUploader = styled.input`
  width: 200px;
  height: 26px;
  border: 4px solid #eb9307;
  border-radius: 16px;
  margin-right: 10px;
  font-size: 14px;
  padding: 10px;
  box-shadow: 10px 5px 20px gray;
`;
const RegisterBtn = styled.button`
  width: 120px;

  height: 56px;
  border-radius: 14px;
  border: none;
  background-color: #eb9307;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 10px 5px 20px gray;
  &:hover {
    cursor: pointer;
    background-color: #ff8f05;

    color: black;
  }
`;
