import { requestToApi } from "api/actions";
import { AuthWot } from "api/actions/auth_wot";
import ButtonInput from "components/ui/input/ButtonInput";
import TableUI from "components/ui/TableUI";
import Dot from "components/wot/Dot";
import { setErrorMessage, setSuccessMessage } from "helpers/flashHelper";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "reducers/wotSlice";

export default function PlayerSessions({ sessions = [], session_id = 0 }) {
  const dispatch = useDispatch();
  const [logged_out, setLoggedOut] = useState([]);
  sessions = Object.values(sessions);

  if (!sessions?.length) {
    return null;
  }

  const logOut = (id) => {
    requestToApi(AuthWot.log_out_account, { id: id }, () => {
      dispatch(setSuccessMessage(
        'logout.success',
        true
      ));
      setLoggedOut(logged_out.concat(id));
      dispatch(getUser());
    }, (error) => {
      dispatch(setErrorMessage(error?.errors));
    });
  }

  return (
    <TableUI
      headers={[
        { id: 'created_at', translation: 'logged.date' },
        { id: 'user_agent', translation: 'browser.name' },
        { id: 'deleted_at' },
      ]}
      items={sessions}
      parse={(item) => {
        return {
          created_at: item?.created_at,
          user_agent: item?.user_agent,
          deleted_at: item?.deleted_at === '' && !logged_out.includes(item?.id) && (
            item?.id === session_id ? <Dot blinking={true} /> : (
              <ButtonInput label={`log.out`} key={`button-${item.id}`} onClick={() => logOut(item.id)} />
            )
          ),
          properties: {
            class: 'disabled' //item.deleted_at !== '' ? 'disabled' : ''
          }
        }
      }}
    />
  );
}
