import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../../types/user";

import {addUser, deleteUser} from "../../store/user";

type UserOperators = {
  users: User[];
  addUser: () => void;
  deleteUser: () => void;
};

/**
 * User custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */

export const useUser = (): Readonly<UserOperators> => {

}
