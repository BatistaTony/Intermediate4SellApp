import { IUser } from "../../types";
import { GET_USER } from "../actions/user";

const initialState: IUser = {
  name: "TOny",
  id: "5438653475",
  avatar: "httmphdhfgrwfs.png",
};

interface IActionUser {
  type: string;
}

export default function User(
  state: IUser | aby = initialState,
  action: IActionUser
) {
  switch (action.type) {
    case GET_USER: {
      return initialState;
    }

    default: {
      return {};
    }
  }
}
