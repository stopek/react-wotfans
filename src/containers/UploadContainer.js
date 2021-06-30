// import { requestToApi } from "api/actions";
// import { Wot } from "api/actions/wot";
// import ButtonInput from "components/ui/input/ButtonInput";
// import { setErrorMessage, setSuccessMessage } from "helpers/flashHelper";
// import objectToFormData from "helpers/objectToFormData";
// import WotOverlay from "overlays/Wot";
// import React, { useRef, useState } from 'react';
// import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
// import { useDispatch } from "react-redux";
// import styled from "styled-components";
// import { COLOR_THEME, RADIUS } from "styles/colors";
//
// const UploadedBox = styled.div`
//   width: 200px;
//   border-radius: ${RADIUS};
//   height: 200px;
//   cursor: pointer;
//   background-size: cover;
//   position: relative;
//   background: ${COLOR_THEME}
// `;
//
// const ChangeImage = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   padding: 10px;
//   border-radius: 5px;
//   display: flex;
//   gap: 10px;
//   background: rgba(255, 255, 255, 0.8);
// `;
//
// export default function UploadContainer({ ...props }) {
//   const changeImageInput = useRef(null);
//   const dispatch = useDispatch();
//   const [previewImage, setPreviewImage] = useState({});
//
//
//   const changeImage = (event) => {
//     event.preventDefault();
//
//     let reader = new FileReader();
//     let file = event.target.files[0];
//
//     reader.onloadend = () => {
//       setPreviewImage({
//         file: file,
//         url: reader.result
//       });
//     }
//
//     reader.readAsDataURL(file);
//   }
//
//   const send = (event) => {
//     const form = objectToFormData({
//       file: changeImageInput?.current?.files[0] || null,
//       _method: 'PUT',
//     });
//
//     requestToApi(
//       Wot.upload,
//       form,
//       () => {
//         dispatch(setSuccessMessage("Plik wysłany"));
//       },
//       (response) => {
//         dispatch(setErrorMessage(response?.errors));
//       }
//     );
//   }
//
//   return (
//     <WotOverlay {...props}>
//       {changeImageInput?.current?.files?.length > 0 && (
//         <>
//           <ButtonInput label={`send`} large onClick={send} />
//           <hr />
//         </>
//       )}
//
//       <UploadedBox
//         onClick={(event) => {
//           event.preventDefault();
//           changeImageInput.current.click();
//         }}
//       >
//         <ChangeImage>
//           <AddAPhotoIcon />
//         </ChangeImage>
//       </UploadedBox>
//
//       <input
//         onChange={changeImage}
//         ref={changeImageInput}
//         hidden
//         type="file"
//         accept="*"
//       />
//
//     </WotOverlay>
//   );
// }
