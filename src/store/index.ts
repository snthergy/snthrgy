import {User} from "./../app.d";
import {atom} from "jotai";
import {atomWithQuery} from "jotai/query";
import {fetchUsers} from "../client";

const defaultUser = {
  id: "",
  full_name: "",
};

export const idAtom = atom(0);
export const userAtom = atom(defaultUser, (get, set, _arg) => {});

export const userDBAtom = atomWithQuery(get => ({
  queryKey: ["user", get(idAtom)],
  queryFn: async ({queryKey: [, id]}) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return fetchUsers(id);
  },
}));
