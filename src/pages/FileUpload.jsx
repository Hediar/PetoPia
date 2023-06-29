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
    const imageRef = ref(storage, `${auth.currentUser.uid}/${selectFile.name}`);
    await uploadBytes(imageRef, selectFile);

    //url url 가져오기
    const downloadURL = await getDownloadURL(imageRef);
    console.log(downloadURL);
  };

  return (
    <div>
      <input type="file" onChange={handelFileSelect} />
      <RegisterBtn onClick={handleUpload}>Upload</RegisterBtn>
    </div>
  );
}

export default FileUpload;

// const Te = styled.input`
//   width: 300px;
//   height: 30px;
//   border: 4px solid #eb9307;
//   border-radius: 14px;
//   margin: 0 10px 0 0;
//   font-size: 20px;
//   padding: 10px 10px 10px 14px;
//   box-shadow: 10px 5px 20px gray;
// `;
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
